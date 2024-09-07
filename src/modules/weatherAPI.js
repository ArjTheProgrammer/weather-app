export default class WeatherAPI {
    constructor(baseUrl, apiKey){
        this.baseUrl = baseUrl;
        this.apiKey = apiKey;
    }

        async getWeather(location) {
            const response = await fetch (`${this.baseUrl}${location}/next7days?key=${this.apiKey}`, {mode: 'cors'});
            const currentWeather = await response.json();
            return currentWeather;
        }
}