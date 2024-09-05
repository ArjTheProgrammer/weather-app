export default class WeatherData{
    constructor(address, date, icon, temp, precip, humidity, windspeed, description){
        this.address = address;
        this.date = date;
        this.icon = icon;
        this.temp = temp;
        this.precip = precip;
        this.humidty = humidity;
        this.windspeed = windspeed;
        this.description = description;
    }

    displayCurrentWeather(){
        
    }
}