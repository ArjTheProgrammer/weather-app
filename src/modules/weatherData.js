import icon from "./icons.js";


export default class WeatherData{
    constructor(icon, time, date, address, temp, 
        condition, feelsLike, description, windspeed, humidity, 
        visibility, pressure, dew){
        this.icon = icon;
        this.time = time;
        this.date = date;
        this.address = address;
        this.temp = temp;
        this.condition = condition;
        this.feelsLike = feelsLike;
        this.description = description;
        this.windspeed = windspeed;
        this.humidity = humidity;
        this.visibility = visibility;
        this.pressure = pressure;
        this.dew = dew;
    }

    displayCurrentWeather(){
        const main = document.querySelector("main");

        //container of the current data
        const currentCon = document.createElement("div");
        currentCon.className = "current-container";
        main.append(currentCon);

        //date and time container
        const dateCon = document.createElement("div");
        dateCon.className = "date-container";
        currentCon.append(dateCon);

        //Displays of date and time
        const disTitle = document.createElement("span");
        disTitle.textContent = "Current Weather";
        dateCon.append(disTitle);

        const disTime = document.createElement("span");
        disTime.textContent = this.time;
        dateCon.append(disTime);

        const disDate = document.createElement("span");
        disDate.textContent = this.date;
        dateCon.append(disDate);

        const disAddress = document.createElement("span");
        disAddress.textContent = this.address;
        dateCon.append(disAddress)

        //temperature and description container
        const tempCon = document.createElement("div");
        tempCon.className = "temp-container";
        currentCon.append(tempCon);

        //display of temperature and description
        const disIcon = document.createElement("div");
        disIcon.className = "icon-container";
        disIcon.innerHTML = icon(this.icon);
        tempCon.append(disIcon);

        const disTemp = document.createElement("span");
        disTemp.textContent = this.temp;
        tempCon.append(disTemp);

        const tempScale = document.createElement("span");
        tempScale.textContent = " F°";
        tempCon.append(tempScale);

        const disCondition = document.createElement("span");
        disCondition.textContent = this.condition;
        tempCon.append(disCondition);

        const disFeelsLike = document.createElement("span");
        disFeelsLike.textContent = `feels like ${this.feelsLike}`;
        tempCon.append(disFeelsLike);

        const disDesc = document.createElement("span");
        disDesc.textContent = this.description;
        tempCon.append(disDesc);

        //data container //container for other data
        const infoCon = document.createElement("div");
        infoCon.className = "info-container";
        currentCon.append(infoCon);

        const disWindspeed = displayData("Windspeed", this.windspeed);
        infoCon.append(disWindspeed);

        const disHumidity = displayData("Humidity", this.humidity);
        infoCon.append(disHumidity);

        const disVisibility = displayData("Visibility", this.visibility);
        infoCon.append(disVisibility);

        const disPressure = displayData("Pressure", this.pressure);
        infoCon.append(disPressure);

        const disDew = displayData("Dew", this.dew);
        infoCon.append(disDew);
    }
}

function displayData(title, data){
    const disCon = document.createElement("div");
    disCon.className = "data-container";

    const diTitle = document.createElement("span");
    diTitle.className = "data-title";
    diTitle.textContent = title;
    disCon.append(diTitle);

    const disData = document.createElement("span");
    disData.className = "data";
    disData.textContent = data;
    disCon.append(disData);

    return disCon;
}