function loadDegree() {
    let degree = document.getElementById("degree");
    degree.style = "display:inline-block";
}

const inputText = document.getElementById("input-text");

function ShowCity(cityId) {
    let cityName = document.getElementById(cityId);
    cityName.innerText = inputText.value;
}

const searchBtn = document.getElementById("submit");
const calling = searchBtn.addEventListener("click", function () {
    callWeather();
    ShowCity("city");
});

function callWeather(data) {
    fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${inputText.value}&APPID=7fb4d8bc6df1f92c521f63277305709d`
        )
        .then((res) => res.json())
        .then((data) => {
            let weatherArr = data.weather[0];
            let weatherSrc = weatherArr.icon;
            let icons = document.getElementById("image-icon");
            icons.src = `https://openweathermap.org/img/wn/${weatherSrc}@2x.png`;

            let weatherMain = weatherArr.main;
            let cloud = document.getElementById("cloud");
            cloud.innerText = weatherMain;

            let temperatureFromApi = data.main;
            let temp = temperatureFromApi.temp;
            let temperatureTag = document.getElementById("temperature");
            temperatureTag.innerText = (temp / 10).toFixed(2);
        });
}