

// can read digital: digitalRead(PIN #)
// WILL EITHER BY HIGH OR LOW, where pressed == LOW
// DIGITAL WRITE HIGH MEANS GIVE POWER (turn on)

void setup() 
{
  pinMode(12, OUTPUT);
  pinMode(13, INPUT_PULLUP);  

}

void loop() 
{
  if (digitalRead(13) == LOW)
  {
    digitalWrite(12, HIGH);
  } else {
    digitalWrite(12, LOW);
  }
}
