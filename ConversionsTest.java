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
    	Conversions conversions = new Conversions();
        // Test case 1: 32 degrees Fahrenheit should be 0 degrees Celsius
        assertEquals(0.0, conversions.fahrenheitToCelsius(32), 0.001);

        // Test case 2: 212 degrees Fahrenheit should be 100 degrees Celsius
        assertEquals(100.0, conversions.fahrenheitToCelsius(212), 0.001);

        // Test case 3: -40 degrees Fahrenheit should be -40 degrees Celsius
        assertEquals(-40.0, conversions.fahrenheitToCelsius(-40), 0.001);
     }

    @Test
    public void testMilesToKilometer() {
        Conversions conversions = new Conversions();
        // Test case 1: 1 mile should be approximately 1.60934 kilometers
        assertEquals(1.60934, conversions.milesToKilometer(1), 0.001);

        // Test case 2: 10 miles should be approximately 16.0934 kilometers
        assertEquals(16.0934, conversions.milesToKilometer(10), 0.001);

        // Test case 3: 0 miles should be 0 kilometers
        assertEquals(0.0, conversions.milesToKilometer(0), 0.001);
    }

    @Test
    public void testKilometerToMiles() {
        Conversions conversions = new Conversions();
        // Test case 1: 1 kilometer should be approximately 0.621371 miles
        assertEquals(0.621371, conversions.kilometerToMiles(1), 0.001);

        // Test case 2: 10 kilometers should be approximately 6.21371 miles
        assertEquals(6.21371, conversions.kilometerToMiles(10), 0.001);

        // Test case 3: 0 kilometers should be 0 miles
        assertEquals(0.0, conversions.kilometerToMiles(0), 0.001);
    }


    @Test
    public void testUpperCaseToLowerCase() {
        
    }

    @Test
    public void testLowerCaseToUpperCase() {
        
    }
   
}

