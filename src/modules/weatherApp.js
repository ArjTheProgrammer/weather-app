import WeatherAPI from "./weatherAPI";
import WeatherData from "./weatherData";

export default class WeatherApp {
    constructor (baseUrl, apiKey){
        this.weatherAPI = new WeatherAPI(baseUrl, apiKey);
    }

    async displayWeatherApp(location){
        const weather = await this.weatherAPI.getWeather(location);

        const weatherData = new WeatherData(
            weather.days[0].icon,
            weather.currentConditions.datetime,
            weather.days[0].datetime,
            weather.resolvedAddress,
            weather.days[0].temp,
            weather.days[0].conditions,
            weather.days[0].feelslike,
            weather.days[0].description,
            weather.days[0].windspeed,
            weather.days[0].humidity,
            weather.days[0].visibility,
            weather.days[0].pressure,
            weather.days[0].dew,
            weather.days
        );

        weatherData.displayCurrentWeather();
        weatherData.displayWeeklyWeather();
    }
}