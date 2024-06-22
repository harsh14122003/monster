const inputbox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchbtn');
const weather_img = document.querySelector('.weather-img');
const temprature = document.querySelector('.temprature');
const discription = document.querySelector('.discription');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

async function checkweather(city) {
    const api_key = '4e2a3172af762b0ffaf43229e88ce182';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());

    temprature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    discription.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;



    // console.log(weather_data);
}


searchBtn.addEventListener('click', ()=>{
    checkweather(inputbox.value)
});

// https://github.com/CodeTraversal/JavaScript-Projects/blob/main/Weather%20App/script.js