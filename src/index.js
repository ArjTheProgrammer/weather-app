const key = "5SSD5LWXSL6XMNLUZCTR5RCYA";

const input = document.querySelector("input");
const btn = document.querySelector("button");

let location = "manila";

btn.addEventListener("click", () => {
    location = input.value;

    showWeather();
})


async function showWeather(){
    const locationAPI = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=5SSD5LWXSL6XMNLUZCTR5RCYA`, {mode: 'cors'});
    const locationWeather = await locationAPI.json();

    console.log(locationWeather);
}

showWeather();