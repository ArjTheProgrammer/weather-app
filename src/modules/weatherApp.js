import WeatherAPI from "./weatherAPI";
import WeatherData from "./weatherData";

export default class WeatherApp {
    constructor (baseUrl, apiKey){
        this.weatherAPI = new WeatherAPI(baseUrl, apiKey);
    }
}