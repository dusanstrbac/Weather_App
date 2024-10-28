const apiKey = 'e52bbd08577340d6cdfd34ad8e6d2da1';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBox = document.querySelector('.Search input');
const searchButton = document.querySelector('.Search button');
const weatherIcon = document.querySelector('#weatherImage');

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector('#city').innerHTML = data.name;
    document.querySelector('#temp').innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector('#humidityLevel').innerHTML = data.main.humidity + '%';
    document.querySelector('#windSpeed').innerHTML = data.wind.speed + ' km/h';

    if(data.weather[0].main == "Clouds") {
        weatherIcon.src = 'assets/Clouds.png';
    } 
    else if(data.weather[0].main == "Clear") {
        weatherIcon.src = 'assets/Sunny.png';
    }
    else if(data.weather[0].main == "Rain") {
        weatherIcon.src = 'assets/Rain.png';
    }
    else if(data.weather[0].main == "Drizzle") {
        weatherIcon.src = 'assets/Drizzle.png';
    }
    else if(data.weather[0].main == "Mist") {
        weatherIcon.src = 'assets/Mist.png';
    }


}

searchButton.addEventListener('click', () => {
    checkWeather(searchBox.value);
});

checkWeather(city);