#include <OneWire.h>
#include <DallasTemperature.h>
#include <Arduino.h>
#include <ESP32Web.h>
#include <WiFi.h>
#include <HTTPClient.h>
#include "soc/timer_group_struct.h"
#include "soc/timer_group_reg.h"

#define LIGHT_SENSOR_PIN 36 // ESP32 pin GPIO36 (SENSOR LDR)
#define MOISTURE_SENSOR_PIN 35 // ESP32 pin GPIO34 (SENSOR DE UMIDADE)
#define TEMPERATURE_SENSOR_PIN 17 // ESP32 pin GPIO17 (SENSOR DE TEMPERATURA 1)
OneWire oneWire(TEMPERATURE_SENSOR_PIN); // SETA O PIN DOS SENSORES DE TEMPERATURA AO ONEWIRE
DallasTemperature sensors(&oneWire); // CRIA VARIAVEL DE SENSORES ATRÁVES DO ONEWIRE
DeviceAddress temperature_sensor_1 = { 0x28, 0x7B, 0x64, 0x43, 0xD4, 0xE1, 0x3C, 0x33 }; // ENDEREÇO DO SENSOR DE TEMPERATURA 1
String HOST_NAME = "http://54.225.18.148"; // IP DA INSTÂNCIA AWS EC2
String PATH_NAME = "/update_measures.php?garden_id=FD2B599CF8E87030";
String lightString = "&light_value=";
String temperatureString = "&first_plant_temperature_value=";
String moistureString = "&first_plant_moisture_value="; 



// LED Pin
#define LED_PIN 2

void setup() {
   Serial.begin(9600);
   sensors.begin();
   delay(4000); // not always needed. Some boards need a delay to allow Serial to be ready

   pinMode(LED_PIN, OUTPUT);
   digitalWrite(LED_PIN, LOW);

   // Looping Functions: 
   t0_AP_Mode.setInterval(1000, ledBlink); // timer for LED blink
   t0_AP_Mode.setInterval(1000, stopAP); // timer for AP mode (WiFi Hostpot)

   // check config file -> run AP or STA mode -> start web server
   checkWiFiConfig();
   
   TIMERG0.wdt_wprotect=TIMG_WDT_WKEY_VALUE;
   TIMERG0.wdt_feed=1;
   TIMERG0.wdt_wprotect=0;

   Serial.println("Setup done");
}

void loop() {
   handleState(); // handle the state of the web server (AP or STA)

   HTTPClient http;
   // SENSOR DE LUMINOSIDADE - INICIO
  int light_value = analogRead(LIGHT_SENSOR_PIN);

  Serial.print("Valor da Luminosidade = ");
  Serial.print(light_value);
  String queryLightValue = String(light_value);   // VALOR DA LUMINOSIDADE
  // SETAR OS THRESHOLDS 
  if (light_value < 40) {
    Serial.println(" => Sem luz");
  } else if (light_value < 800) {
    Serial.println(" => Luz baixa");
  } else if (light_value < 2000) {
    Serial.println(" => Luz média");
  } else if (light_value < 3200) {
    Serial.println(" => Luz alta");
  } else {
    Serial.println(" => Luz muito alta");
  }

  // SENSOR DE LUMINOSIDADE - FIM

  // SENSOR DE UMIDADE - INICIO
  float moisture_value = analogRead(MOISTURE_SENSOR_PIN);
  Serial.print("Valor absoluto da umidade: ");
  Serial.print(moisture_value);
  Serial.print(",");
  
  
  Serial.print(" Nível de umidade: ");
  Serial.print((1 - ((moisture_value - 670.00) / (2800.00 - 670.00))) * 100);
  String queryMoistureValue = String(moisture_value);
  Serial.print("%");
  Serial.println();

  // SENSOR DE UMIDADE - FIM

  // SENSOR DE TEMPERATURA - INICIO
  Serial.println("Atualizando temperaturas...");
  sensors.requestTemperatures(); // Send the command to get temperatures
  
  Serial.print("Sensor 1(*C): ");
  Serial.println(sensors.getTempC(temperature_sensor_1));
  String queryTempValue = String(sensors.getTempC(temperature_sensor_1)); 

  Serial.println();

  // SENSOR DE TEMPERATURA - FIM

  if((WiFi.status() == WL_CONNECTED)) {
      http.begin(HOST_NAME + PATH_NAME + lightString + queryLightValue + temperatureString + queryTempValue + moistureString + queryMoistureValue); //HTTP
      int httpCode = http.GET();

      // httpCode will be negative on error
      if(httpCode > 0) {
         // file found at server
         if(httpCode == HTTP_CODE_OK) {
            String payload = http.getString();
            Serial.println(payload);
         } else {
            // HTTP header has been send and Server response header has been handled
            Serial.printf("[HTTP] GET... code: %d\n", httpCode);
         }
      } else {
         Serial.printf("[HTTP] GET... failed, error: %s\n", http.errorToString(httpCode).c_str());
      }
      http.end();
  }

  delay(30000);
}



