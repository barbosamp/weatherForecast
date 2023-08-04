
const key = "3ae068ae8866fd1a6821f509d28b3668"

function setDataOnScreen(data) {
    document.querySelector(".city").innerHTML = "Tempo em " + data.name;
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "ºC";
    document.querySelector(".text-weather").innerHTML = data.weather[0].description
    document.querySelector(".text-humidity").innerHTML = "Umidade do ar: " + data.main.humidity + "%"
    document.querySelector(".img-weather").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png` 


    


}

async function getCity(city) {

    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`)
    .then(response => response.json())
    setDataOnScreen(data)
}

function clickSearchButton() {
    const city = document.querySelector(".input-city").value;
    getCity(city);
}

