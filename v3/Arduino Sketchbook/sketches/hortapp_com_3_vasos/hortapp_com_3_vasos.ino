#include <OneWire.h>
#include <DallasTemperature.h>
#include <Arduino.h>
#include <ESP32Web.h>
#include <WiFi.h>
#include <HTTPClient.h>
#include "soc/timer_group_struct.h"
#include "soc/timer_group_reg.h"

#define LIGHT_SENSOR_PIN 36 // ESP32 pin GPIO36 (SENSOR LDR)
#define MOISTURE_SENSOR_PIN_1 35 // ESP32 pin GPIO35 (SENSOR DE UMIDADE 1)
#define MOISTURE_SENSOR_PIN_2 34 // ESP32 pin GPIO34 (SENSOR DE UMIDADE 2)
#define MOISTURE_SENSOR_PIN_3 39 // ESP32 pin GPIO39 (SENSOR DE UMIDADE 3)
#define TEMPERATURE_SENSOR_PIN 17 // ESP32 pin GPIO17 (SENSOR DE TEMPERATURA)
OneWire oneWire(TEMPERATURE_SENSOR_PIN); // SETA O PIN DOS SENSORES DE TEMPERATURA AO ONEWIRE
DallasTemperature sensors(&oneWire); // CRIA VARIAVEL DE SENSORES ATRÁVES DO ONEWIRE
DeviceAddress temperature_sensor_1X = { 0x28, 0x7B, 0x64, 0x43, 0xD4, 0xE1, 0x3C, 0x33 }; // ENDEREÇO DO SENSOR DE TEMPERATURA 1
DeviceAddress temperature_sensor_2Y = { 0x28, 0xB4, 0x4E, 0x43, 0xD4, 0xE1, 0x3C, 0xCD }; // ENDEREÇO DO SENSOR DE TEMPERATURA 2
DeviceAddress temperature_sensor_3A = { 0x28, 0x21, 0x9A, 0x43, 0xD4, 0xE1, 0x3C, 0xD6 }; // ENDEREÇO DO SENSOR DE TEMPERATURA 3
String HOST_NAME = "http://100.28.235.107"; // IP DA INSTÂNCIA AWS EC2
String PATH_NAME = "/update_measures.php?garden_id=218ABE355AC3E580";
String lightString = "&light_value=";
String temperatureString_1X = "&first_plant_temperature_value=";
String temperatureString_2Y = "&second_plant_temperature_value=";
String temperatureString_3A = "&third_plant_temperature_value=";
String moistureString_1X = "&first_plant_moisture_value="; 
String moistureString_2Y = "&second_plant_moisture_value=";
String moistureString_3A = "&third_plant_moisture_value=";


// LED Pin
#define LED_PIN 2

void setup() {
   Serial.begin(115200);
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
  float moisture_value_one = analogRead(MOISTURE_SENSOR_PIN_1);
  float moisture_value_two = analogRead(MOISTURE_SENSOR_PIN_2);
  float moisture_value_three = analogRead(MOISTURE_SENSOR_PIN_3);

  Serial.print("Valor absoluto da umidade do sensor 1: ");
  Serial.print(moisture_value_one);
  Serial.println("");
  Serial.print("Valor absoluto da umidade do sensor 2: ");
  Serial.print(moisture_value_two);
  Serial.println("");
  Serial.print("Valor absoluto da umidade do sensor 3: ");
  Serial.print(moisture_value_three);

  // SETAR O VALOR MÁXIMO E MÍNIMO, ACIMA DE MOISTURE_VALUE SENDO X, CONSIDERAR 0%, ABAIXO DE Y, CONSIDERAR 100%
  Serial.println("");
  String queryMoistureValueOne = "sem valor";
  String queryMoistureValueTwo = "sem valor";
  String queryMoistureValueThree = "sem valor";
  
  
  Serial.print("Nível de umidade do sensor 1: ");
  if(moisture_value_one > 2500.00) {
    Serial.print("0.00");
    queryMoistureValueOne = String(0.00);
  }
  else if (moisture_value_one < 1000.00) {
    Serial.print("100.00");
    queryMoistureValueOne = String(100.00);
  }
  else {
    Serial.print((1 - ((moisture_value_one - 1000.00) / (2500.00 - 1000.00))) * 100);
    queryMoistureValueOne = String((1 - ((moisture_value_one - 1000.00) / (2500.00 - 1000.00))) * 100);
  }

  Serial.print("%");
  Serial.println();

  Serial.print("Nível de umidade do sensor 2: ");
  if(moisture_value_two > 2500.00) {
    Serial.print("0.00");
    queryMoistureValueTwo = String(0.00);
  }
  else if (moisture_value_two < 1000.00) {
    Serial.print("100.00");
    queryMoistureValueTwo = String(100.00);
  }
  else {
    Serial.print((1 - ((moisture_value_two - 1000.00) / (2500.00 - 1000.00))) * 100);
    queryMoistureValueTwo = String((1 - ((moisture_value_two - 1000.00) / (2500.00 - 1000.00))) * 100);
  }

  Serial.print("%");
  Serial.println();

  Serial.print("Nível de umidade do sensor 3: ");
  if(moisture_value_three > 2500.00) {
    Serial.print("0.00");
    queryMoistureValueThree = String(0.00);
  }
  else if (moisture_value_three < 1000.00) {
    Serial.print("100.00");
    queryMoistureValueThree = String(100.00);
  }
  else {
    Serial.print((1 - ((moisture_value_three - 1000.00) / (2500.00 - 1000.00))) * 100);
    queryMoistureValueThree = String((1 - ((moisture_value_three - 1000.00) / (2500.00 - 1000.00))) * 100);
  }

  Serial.print("%");
  Serial.println();

  // SENSOR DE UMIDADE - FIM

  // SENSOR DE TEMPERATURA - INICIO
  Serial.println("Atualizando temperaturas...");
  sensors.requestTemperatures(); // Send the command to get temperatures
  
  Serial.print("Sensor 1(*C): ");
  Serial.print(sensors.getTempC(temperature_sensor_1X));
  String queryTempValueOne = String(sensors.getTempC(temperature_sensor_1X)); 

  Serial.println();

  Serial.print("Sensor 2(*C): ");
  Serial.print(sensors.getTempC(temperature_sensor_2Y));
  String queryTempValueTwo = String(sensors.getTempC(temperature_sensor_2Y)); 

  Serial.println();

  Serial.print("Sensor 3(*C): ");
  Serial.print(sensors.getTempC(temperature_sensor_3A));
  String queryTempValueThree = String(sensors.getTempC(temperature_sensor_3A)); 

  Serial.println("");

  // SENSOR DE TEMPERATURA - FIM

  if((WiFi.status() == WL_CONNECTED)) {
      http.begin(HOST_NAME + PATH_NAME + lightString + queryLightValue + temperatureString_1X + queryTempValueOne + moistureString_1X + queryMoistureValueOne + 
      temperatureString_2Y + queryTempValueTwo + moistureString_2Y + queryMoistureValueTwo + 
      temperatureString_3A + queryTempValueThree + moistureString_3A + queryMoistureValueThree); //HTTP
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

  delay(20000);
}