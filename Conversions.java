package griffith;


public class Conversions {

	public static double celsiusToFahrenheit(double celsius) {
        return (celsius * 9 / 5) + 32;
    }

	public double fahrenheitToCelsius(double fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }

	public double milesToKilometer(double miles) {
        return miles * 1.60934;
    }

    public double kilometerToMiles(double kilometer) {
        return kilometer / 1.60934;
    }

    public String upperCaseToLowerCase(String input) {
        return input.toLowerCase();
    }

    public String lowerCaseToUpperCase(String input) {
        return input.toUpperCase();
    }
}


