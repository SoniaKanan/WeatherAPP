// Simple Weather App JavaScript

// API URLs
const WEATHER_API = 'https://api.open-meteo.com/v1/forecast';
const GEOCODING_API = 'https://geocoding-api.open-meteo.com/v1/search';

// Get HTML elements
const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const loading = document.getElementById('loading');
const error = document.getElementById('error');
const errorText = document.getElementById('errorText');
const weatherDisplay = document.getElementById('weatherDisplay');
const cityName = document.getElementById('cityName');
const country = document.getElementById('country');
const temp = document.getElementById('temp');
const weatherIcon = document.getElementById('weatherIcon');
const description = document.getElementById('description');
const feelsLike = document.getElementById('feelsLike');
const humidity = document.getElementById('humidity');

// Weather icons
const weatherIcons = {
    0: '☀️',   // Clear sky
    1: '🌤️',   // Mainly clear
    2: '⛅',   // Partly cloudy
    3: '☁️',   // Overcast
    45: '🌫️',  // Fog
    48: '🌫️',  // Fog
    51: '🌦️',  // Light drizzle
    53: '🌦️',  // Drizzle
    55: '🌧️',  // Heavy drizzle
    61: '🌧️',  // Light rain
    63: '🌧️',  // Rain
    65: '⛈️',  // Heavy rain
    71: '🌨️',  // Light snow
    73: '❄️',  // Snow
    75: '❄️',  // Heavy snow
    80: '🌦️',  // Light showers
    81: '🌧️',  // Showers
    82: '⛈️',  // Heavy showers
    95: '⛈️',  // Thunderstorm
    96: '⛈️',  // Thunderstorm with hail
    99: '⛈️'   // Heavy thunderstorm
};

const weatherDescriptions = {
    0: 'Clear sky',
    1: 'Mainly clear',
    2: 'Partly cloudy',
    3: 'Overcast',
    45: 'Fog',
    48: 'Fog',
    51: 'Light drizzle',
    53: 'Drizzle',
    55: 'Heavy drizzle',
    61: 'Light rain',
    63: 'Rain',
    65: 'Heavy rain',
    71: 'Light snow',
    73: 'Snow',
    75: 'Heavy snow',
    80: 'Light showers',
    81: 'Showers',
    82: 'Heavy showers',
    95: 'Thunderstorm',
    96: 'Thunderstorm with hail',
    99: 'Heavy thunderstorm'
};

// Event listeners
searchBtn.addEventListener('click', searchWeather);
cityInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchWeather();
    }
});

// Search for weather
async function searchWeather() {
    const city = cityInput.value.trim();
    
    if (!city) {
        showError('Please enter a city name');
        return;
    }
    
    showLoading();
    
    try {
        // Get city coordinates
        const cityData = await getCityCoordinates(city);
        
        // Get weather data
        const weatherData = await getWeatherData(cityData.latitude, cityData.longitude);
        
        // Display weather
        displayWeather(weatherData, cityData);
        
    } catch (err) {
        showError(err.message);
    }
}

// Get city coordinates
async function getCityCoordinates(cityName) {
    const response = await fetch(`${GEOCODING_API}?name=${cityName}&count=1&language=en&format=json`);
    const data = await response.json();
    
    if (!data.results || data.results.length === 0) {
        throw new Error('City not found. Please check spelling.');
    }
    
    return data.results[0];
}

// Get weather data
async function getWeatherData(lat, lon) {
    const url = `${WEATHER_API}?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code&timezone=auto`;
    
    const response = await fetch(url);
    const data = await response.json();
    
    if (!response.ok) {
        throw new Error('Weather data not available');
    }
    
    return data;
}

// Display weather data
function displayWeather(weatherData, cityData) {
    const current = weatherData.current;
    
    // Update city info
    cityName.textContent = cityData.name;
    country.textContent = cityData.country || '';
    
    // Update weather info
    temp.textContent = Math.round(current.temperature_2m);
    feelsLike.textContent = Math.round(current.apparent_temperature);
    humidity.textContent = Math.round(current.relative_humidity_2m);
    
    // Update weather icon and description
    const weatherCode = current.weather_code;
    weatherIcon.textContent = weatherIcons[weatherCode] || '❓';
    description.textContent = weatherDescriptions[weatherCode] || 'Unknown';
    
    // Show weather display
    hideAll();
    weatherDisplay.classList.add('show');
}

// Show loading
function showLoading() {
    hideAll();
    loading.classList.add('show');
}

// Show error
function showError(message) {
    hideAll();
    errorText.textContent = message;
    error.classList.add('show');
}

// Hide all displays
function hideAll() {
    loading.classList.remove('show');
    error.classList.remove('show');
    weatherDisplay.classList.remove('show');
} 