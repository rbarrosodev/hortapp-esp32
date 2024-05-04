#include <OneWire.h>
#include <DallasTemperature.h>
#include <Arduino.h>
#include <WiFi.h>
#include <HTTPClient.h>

#define LIGHT_SENSOR_PIN 36 // ESP32 pin GPIO36 (SENSOR LDR)
#define MOISTURE_SENSOR_PIN 25 // ESP32 pin GPIO25 (SENSOR DE UMIDADE)
#define TEMPERATURE_SENSOR_PIN 17 // ESP32 pin GPIO17 (SENSOR DE TEMPERATURA 1)
OneWire oneWire(TEMPERATURE_SENSOR_PIN); // SETA O PIN DOS SENSORES DE TEMPERATURA AO ONEWIRE
DallasTemperature sensors(&oneWire); // CRIA VARIAVEL DE SENSORES ATRÁVES DO ONEWIRE
DeviceAddress temperature_sensor_1 = { 0x28, 0x7B, 0x64, 0x43, 0xD4, 0xE1, 0x3C, 0x33 }; // ENDEREÇO DO SENSOR DE TEMPERATURA 1
const char WIFI_SSID[] = "RODRIGO FIBRA 2G";
const char WIFI_PASSWORD[] = "091020002G";
String HOST_NAME = "http://54.160.214.29"; // IP DA INSTÂNCIA AWS EC2
String PATH_NAME   = "/insert_measures.php";
String temperatureString = "?temperature=";
String lightString = "&light=";
String moistureString = "&moisture="; 


void setup() {
  Serial.begin(9600);
  sensors.begin();

  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.println("Connecting");
  while(WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("");
  Serial.print("Connected to WiFi network with IP Address: ");
  Serial.println(WiFi.localIP());
}

void loop() {
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

  http.begin(HOST_NAME + PATH_NAME + temperatureString + queryTempValue + lightString + queryLightValue + moistureString + queryMoistureValue); //HTTP
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

  
  delay(20000);
}
