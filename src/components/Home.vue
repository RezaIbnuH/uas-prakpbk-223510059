<template>
  <div id="home">
    <main>
      <div class="search-box">
        <input type="text" class="search-bar" v-model="query" @keypress.enter="fetchWeather">
      </div>

      <div class="weather-wrap" v-if="weather && weather.main">
        <div class="location-box">
          <div class="location">{{ weather.name }}, {{ weather.sys.country }}</div>
          <div class="date">{{ dateBuilder() }}</div>
        </div>
        <div class="weather-box">
          <div class="temp">{{ Math.round(weather.main.temp) }}°C</div>
          <div class="weather">
            <img :src="getWeatherIcon(weather.weather[0].icon)" alt="Weather Icon" class="weather-icon">
            <div>{{ weather.weather[0].main }}</div>
          </div>
          <div class="weather-description">{{ weather.weather[0].description }}</div>
        </div>
      </div>

      <div v-if="error" class="error-message">{{ error }}</div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const api_key = 'b016a664f0fe392940982e580bb1c826';
const url_base = 'https://api.openweathermap.org/data/2.5/weather';
const query = ref('');
const weather = ref(null);
const error = ref('');

const fetchWeather = async () => {
  try {
    const res = await fetch(`${url_base}?q=${query.value}&units=metric&appid=${api_key}`);
    if (!res.ok) {
      throw new Error('Failed to fetch weather data');
    }
    const data = await res.json();
    weather.value = data;
    error.value = ''; 
  } catch (error) {
    console.error(error);
    error.value = 'Failed to fetch weather data. Please try again.'; 
  }
};

const dateBuilder = () => {
  const d = new Date();
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];
  const days = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
  ];
  const day = days[d.getDay()];
  const date = d.getDate();
  const month = months[d.getMonth()];
  const year = d.getFullYear();
  return `${day} ${date} ${month} ${year}`;
};

const getWeatherIcon = (iconCode) => {
  return `https://openweathermap.org/img/wn/${iconCode}.png`; 
};
</script>

<style>
body {
  font-family: 'Chakra Petch', sans-serif;
  margin: 0;
  padding: 0;
  background-image: url('../assets/Uas.jpg');
  background-size: auto;
  background-position: center;
  background-repeat: no-repeat;
}

main {
  min-height: 100vh;
  padding: 25px;
}

.search-box {
  width: 100%;
  margin-bottom: 30px;
}

.search-box .search-bar {
  display: block;
  width: 100%;
  padding: 15px;
  color: #313131;
  font-size: 20px;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  appearance: none;
  border: none;
  background: none;
  outline: none;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px 10px 10px 10px;
  transition: 0.4s;
}

.search-box .search-bar:focus {
  background-color: rgba(255, 255, 255, 0.75);
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  border-radius: 16px 0px 16px 0px;
}

.location-box .location {
  color: #FFFFFF;
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
}

.location-box .date {
  color: #FFFFFF;
  font-size: 20px;
  font-weight: 300;
  font-style: italic;
  text-align: center;
}

.weather-box {
  text-align: center;
}

.weather-box .temp {
  display: inline-block;
  padding: 10px 25px;
  color: #FFFFFF;
  font-size: 102px;
  font-weight: 900;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  margin: 30px 0px;
  box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}

.weather-box .weather {
  color: #FFFFFF;
  font-size: 32px;
  font-weight: 500;
}

.weather-box .weather-description {
  color: #FFFFFF;
  font-size: 10px;
  font-weight: 300;
  font-style: italic;
}

.weather-icon {
  width: 100px;
  height: 100px;
}
</style>
