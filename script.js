// search-bar
const search = document.querySelector('#search-bar');
const submitButton = document.querySelector('.search-button');

// left-side
const mainWeatherIcon = document.querySelector('.main-weather-icon')
const mainTemp = document.querySelector('.main-temp');
const weatherCondition = document.querySelector('.weather-condition');
const date = document.querySelector('.date');
const day = document.querySelector('.day');
const time = document.querySelector('.time');
const place = document.querySelector('.city');
const state = document.querySelector('.state');
const country = document.querySelector('.country');

// right-side
// today's stats
const highTemp = document.querySelector('.high-temp');
const lowTemp = document.querySelector('.low-temp');
const uvIndex = document.querySelector('.uv-index');
const humidity = document.querySelector('.humidity');
const windStatus = document.querySelector('.wind-status');
const rain = document.querySelector('.rain');

// today's forecast
const tempOne = document.querySelector('.temp-1');
const tempTwo = document.querySelector('.temp-2');
const tempThree = document.querySelector('.temp-3');
const tempFour = document.querySelector('.temp-4');
const tempFive = document.querySelector('.temp-5');
const tempSix = document.querySelector('.temp-6');
// icons
const iconOne = document.querySelector('.weather-icon-1');
const iconTwo = document.querySelector('.weather-icon-2');
const iconThree = document.querySelector('.weather-icon-3');
const iconFour = document.querySelector('.weather-icon-4');
const iconFive = document.querySelector('.weather-icon-5');
const iconSix = document.querySelector('.weather-icon-6');

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '3d769dab03msh90c234d71421c98p14a481jsn5e46113a0db6',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
};

let addWeather = (city) => {
    fetch('https://weatherapi-com.p.rapidapi.com/forecast.json?q=' + city, options)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data);
            // left-side
            mainWeatherIcon.src = data.current.condition.icon;
            mainTemp.innerHTML = data.current.temp_c;
            weatherCondition.innerHTML = data.current.condition.text;
            date.innerHTML = new Date(data.location.localtime).toLocaleString('default', { day: 'numeric', month: 'short', year: 'numeric' });
            day.innerHTML = new Date(data.location.localtime).toLocaleString('default', { weekday: 'long' });
            time.innerHTML = new Date(data.location.localtime).toLocaleString('en-US', { hour: "2-digit", minute: "2-digit" });
            place.innerHTML = data.location.name;
            state.innerHTML = data.location.region;
            country.innerHTML = data.location.country;

            // right-side
            // today's stats
            highTemp.innerHTML = data.forecast.forecastday[0].day.maxtemp_c;
            lowTemp.innerHTML = data.forecast.forecastday[0].day.mintemp_c;
            uvIndex.innerHTML = data.current.uv;
            humidity.innerHTML = data.current.humidity;
            windStatus.innerHTML = data.current.wind_kph;
            rain.innerHTML = data.forecast.forecastday[0].day.daily_chance_of_rain;

            // right-side
            // today's forecast
            tempOne.innerHTML = data.forecast.forecastday[0].hour[6].temp_c;
            iconOne.src = data.forecast.forecastday[0].hour[6].condition.icon;

            tempTwo.innerHTML = data.forecast.forecastday[0].hour[9].temp_c;
            iconTwo.src = data.forecast.forecastday[0].hour[9].condition.icon;

            tempThree.innerHTML = data.forecast.forecastday[0].hour[12].temp_c;
            iconThree.src = data.forecast.forecastday[0].hour[12].condition.icon;

            tempFour.innerHTML = data.forecast.forecastday[0].hour[15].temp_c;
            iconFour.src = data.forecast.forecastday[0].hour[15].condition.icon;

            tempFive.innerHTML = data.forecast.forecastday[0].hour[18].temp_c;
            iconFive.src = data.forecast.forecastday[0].hour[18].condition.icon;

            tempSix.innerHTML = data.forecast.forecastday[0].hour[21].temp_c;
            iconSix.src = data.forecast.forecastday[0].hour[21].condition.icon;
        })
        .catch((error) => {
            console.log(error);
        })
}

addWeather("Mumbai Maharashtra India");

// search-bar
submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    addWeather(search.value);
})
