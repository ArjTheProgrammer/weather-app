export default class WeatherAPI {
    constructor(baseUrl, apiKey){
        this.baseUrl = baseUrl;
        this.apiKey = apiKey;
    }

        async getCurrentWeather(location) {
            const response = await fetch (`${this.baseUrl}${location}/today?key=${this.apiKey}`, {mode: 'cors'});
            const currentWeather = await response.json();
            return currentWeather;
        }

        async getWeeklyWeather(location) {
            const response = await fetch (`${this.baseUrl}${location}/next7days?key=${this.apiKey}`, {mode: 'cors'});
            const weeklyWeather = await response.json();
            return weeklyWeather;
        }
}