export default function getLocation(weatherApp){
    const header = document.querySelector("header");
    const main = document.querySelector("main");

    const inputCon = document.createElement("div");
    inputCon.className = "input-container";
    header.append(inputCon);

    const locationInput = document.createElement("input");
    locationInput.className = "location-input";
    locationInput.placeholder = "Input location";
    inputCon.append(locationInput);

    const inputBtn = document.createElement("button");
    inputBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>`;
    inputCon.append(inputBtn);

    inputBtn.addEventListener("click", async () => {
        const location = locationInput.value.trim();
        locationInput.value = "";

        main.innerHTML = "";
        weatherApp.displayWeatherApp(location == "" ? "manila" : location);
    });

    document.addEventListener("keydown", e => {
        if (e.key == "Enter"){
            inputBtn.click();
        }
    });
}