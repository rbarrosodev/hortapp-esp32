#include <OneWire.h>
#include <DallasTemperature.h>
#include <Arduino.h>

#define LIGHT_SENSOR_PIN 36 // ESP32 pin GPIO36 (SENSOR LDR)
#define MOISTURE_SENSOR_PIN 25 // ESP32 pin GPIO25 (SENSOR DE UMIDADE)
#define TEMPERATURE_SENSOR_PIN 17 // ESP32 pin GPIO17 (SENSOR DE TEMPERATURA 1)
OneWire oneWire(TEMPERATURE_SENSOR_PIN); // SETA O PIN DOS SENSORES DE TEMPERATURA AO ONEWIRE
DallasTemperature sensors(&oneWire); // CRIA VARIAVEL DE SENSORES ATRÁVES DO ONEWIRE
DeviceAddress temperature_sensor_1 = { 0x28, 0x7B, 0x64, 0x43, 0xD4, 0xE1, 0x3C, 0x33 }; // ENDEREÇO DO SENSOR DE TEMPERATURA 1


void setup() {
  Serial.begin(9600);
  sensors.begin();
}

void loop() {
  // SENSOR DE LUMINOSIDADE - INICIO
  int light_value = analogRead(LIGHT_SENSOR_PIN);

  Serial.print("Valor da Luminosidade = ");
  Serial.print(light_value);   // VALOR DA LUMINOSIDADE
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
  moisture_value = (1 - ((moisture_value - 670.00) / (2800.00 - 670.00))) * 100; // applies moisture formula for percentage

  Serial.print(" Nível de umidade: ");
  Serial.print(moisture_value);
  Serial.print("%");
  Serial.println();

  // SENSOR DE UMIDADE - FIM



  // SENSOR DE TEMPERATURA - INICIO
  Serial.println("Atualizando temperaturas...");
  sensors.requestTemperatures(); // Send the command to get temperatures
  
  Serial.print("Sensor 1(*C): ");
  Serial.println(sensors.getTempC(temperature_sensor_1)); 

  Serial.println();

  // SENSOR DE TEMPERATURA - FIM
  
  delay(2000);
}
