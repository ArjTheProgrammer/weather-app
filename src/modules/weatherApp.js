import WeatherAPI from "./weatherAPI";
import WeatherData from "./weatherData";

export default class WeatherApp {
    constructor (baseUrl, apiKey){
        this.weatherAPI = new WeatherAPI(baseUrl, apiKey);
    }

    async displayWeatherApp(){
        const header = document.querySelector("header");
        const main = document.querySelector("main");

        const inputCon = document.createElement("div");
        inputCon.className = "input-container";
        header.append(inputCon);

        const locationInput = document.createElement("input");
        location.className = "location-input";
        location.placeholder = "Input location";
        inputCon.append(locationInput);

        const inputBtn = document.createElement("button");
        inputBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>`;
        inputCon.append(inputBtn);

        const weather = await this.weatherAPI.getWeather(location.value == "" ? "manila" : location.value);

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

        inputBtn.addEventListener("click", () => {
            main.innerHTML = "";

            weatherData.displayCurrentWeather();
            weatherData.displayWeeklyWeather();
        });

        document.addEventListener("keydown", e => {
            if (e.key == "Enter"){
                inputBtn.click();
            }
        });

        weatherData.displayCurrentWeather();
        weatherData.displayWeeklyWeather();
    }
}