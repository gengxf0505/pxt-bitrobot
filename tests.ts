{
  // Drive 100 ms forward
  BitRobot.motor(BBMotor.All, 1023);
  basic.pause(100);

  // Drive 100 ms reverse
  BitRobot.motor(BBMotor.All, -1023);
  basic.pause(100);

  // Drive 100 ms forward on left and reverse on right
  BitRobot.motor(BBMotor.Left, 1023);
  BitRobot.motor(BBMotor.Right, -1023);
  basic.pause(100);

  // Buzz for 100 ms
  BitRobot.buzz(1);
  basic.pause(100);
  BitRobot.buzz(0);

  // Read left and right line sensor
  basic.showNumber(BitRobot.readLine(BBLineSensor.Left));
  basic.showNumber(BitRobot.readLine(BBLineSensor.Right));

  // Read left and right light sensor
  basic.showNumber(BitRobot.readLight(BBLightSensor.Left));
  basic.showNumber(BitRobot.readLight(BBLightSensor.Right));

  // Read sonar values
  basic.showNumber(BitRobot.sonar(BBPingUnit.MicroSeconds));
  basic.showNumber(BitRobot.sonar(BBPingUnit.Centimeters));
  basic.showNumber(BitRobot.sonar(BBPingUnit.Inches));

  // Show all leds
  BitRobot.neoSetColor(neopixel.colors(NeoPixelColors.Red));
  BitRobot.neoShow();

  // Clear all leds
  BitRobot.neoClear();
  BitRobot.neoShow();

  // Show led at position 1
  BitRobot.neoSetPixelColor(0, neopixel.colors(NeoPixelColors.Red));
  BitRobot.neoShow();

  // Show led rainbow
  BitRobot.neoRainbow();
  BitRobot.neoShow();

  // Show led rainbow and shift
  BitRobot.neoRainbow();
  BitRobot.neoShift();
  BitRobot.neoShow();

  // Show led rainbow and rotate
  BitRobot.neoRainbow();
  BitRobot.neoRotate();
  BitRobot.neoShow();

  // Set brightness of leds
  BitRobot.neoBrightness(100);
  BitRobot.neoShow();

  // Use neo() variable
  BitRobot.neo().clear();
  BitRobot.neo().show();
}
