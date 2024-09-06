export default class WeatherData{
    constructor(icon, address, time, date, temp, condition, feelsLike, description, windspeed, humidity, visibility, pressure, dew){
        this.address = address;
        this.time = time;
        this.date = date;
        this.icon = icon;
        this.temp = temp;
        this.condition = condition;
        this.feelsLike = feelsLike;
        this.description = description;
        this.windspeed = windspeed;
        this.humidty = humidity;
        this.visibility = visibility;
    }
}