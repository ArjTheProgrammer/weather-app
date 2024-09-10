import "./styles.css";
import WeatherApp from "./modules/weatherApp";
import getLocation from "./modules/getLocation";

    const baseUrl = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
    const apiKey = "5SSD5LWXSL6XMNLUZCTR5RCYA";

    const weatherApp = new WeatherApp(baseUrl, apiKey);

    getLocation(weatherApp);

    weatherApp.displayWeatherApp("manila");