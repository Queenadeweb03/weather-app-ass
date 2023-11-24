'use scrict';

const searchBtn = document.getElementById('search');
const errorMes = document.getElementById('hidden');
const searchInput = document.getElementById('search-input');
const weatherIcon = document.getElementById('weather-icon');
const weather = document.getElementById('weather');
const temp = document.querySelector('.temp');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');

const apiKey = '94599f7c3b5bf3e8f63b0edfafb9c6a5';

const apiUrl =
  'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

async function appWeather(city) {
  let response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (response.status == 404) {
    errorMes.style.display = 'block';
  } else {
    let data = await response.json();
    //console.log(data);

    document.getElementById('city').innerHTML = data.name;
    temp.innerHTML = Math.round(data.main.temp) + '°C';
    humidity.innerHTML = data.main.humidity + '%';
    wind.innerHTML = data.wind.speed + ' km/h';

    if (data.weather[0].main == 'Clear') {
      weatherIcon.src = 'images/clear.png';
    } else if (data.weather[0].main == 'Mist') {
      weatherIcon.src = 'images/mist.png';
    } else if (data.weather[0].main == 'Rain') {
      weatherIcon.src = 'images/rain.png';
    } else if (data.weather[0].main == 'Drizzle') {
      weatherIcon.src = 'images/drizzle.png';
    } else if (data.weather[0].main == 'Clouds') {
      weatherIcon.src = 'images/clouds.png';
    } else if (data.weather[0].main == 'Snow') {
      weatherIcon.src = 'images/snow.png';
    }
    weather.style.display = 'block';
  }
}

searchBtn.addEventListener('click', function () {
  appWeather(searchInput.value);
});
