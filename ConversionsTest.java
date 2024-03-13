package griffith;

import org.junit.Test;
import static org.junit.Assert.*;

public class ConversionsTest {

	@Test
    public void testCelsiusToFahrenheit() {
		// Test case 1: 0 degrees Celsius should be 32 degrees Fahrenheit
        assertEquals(32.0, Conversions.celsiusToFahrenheit(0), 0.001);

        // Test case 2: 100 degrees Celsius should be 212 degrees Fahrenheit
        assertEquals(212.0, Conversions.celsiusToFahrenheit(100), 0.001);

        // Test case 3: -40 degrees Celsius should be -40 degrees Fahrenheit
        assertEquals(-40.0, Conversions.celsiusToFahrenheit(-40), 0.001);
    
    }

    @Test
    public void testFahrenheitToCelsius() {
        
    }

    @Test
    public void testMilesToKilometer() {
        
    }

    @Test
    public void testKilometerToMiles() {
        
    }

    @Test
    public void testUpperCaseToLowerCase() {
        
    }

    @Test
    public void testLowerCaseToUpperCase() {
        
    }
   
}

