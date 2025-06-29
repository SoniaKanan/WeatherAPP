# 🌤️ Simple Weather App - Beginner Project

A simple, clean weather application built with HTML, CSS, and JavaScript. Perfect for beginners to learn web development fundamentals!

## ✨ Features

- **Simple Search**: Enter any city name to get current weather
- **Current Weather**: Shows temperature, weather condition, feels like, and humidity
- **Weather Icons**: Fun emoji icons for different weather conditions
- **Responsive Design**: Works on desktop and mobile devices
- **No Setup Required**: No API keys or complex setup needed

### Prerequisites
- A web browser
- Internet connection

### How to Run
1. Download all files (`index.html`, `style.css`, `script.js`)
2. Put them in the same folder
3. Open `index.html` in your web browser
4. Start searching for weather!

**That's it!** No setup, no API keys, no installation required.

## 📱 How to Use

1. Type a city name (like "London" or "New York")
2. Click "Search" or press Enter
3. See the current weather for that city!

## 🛠️ What You'll Learn

This project teaches these web development concepts:

### HTML
- Basic HTML structure
- Form inputs and buttons
- Semantic elements
- DOM elements with IDs

### CSS
- Flexbox layouts
- Responsive design
- CSS animations
- Modern styling techniques

### JavaScript
- DOM manipulation
- Event listeners
- Async/await with APIs
- Error handling
- Fetch API
- Functions and variables

## 📁 File Structure
```
weather-app/
├── index.html    # HTML structure
├── style.css     # Styling
└── script.js     # JavaScript functionality
```

## 🔧 Technologies Used
- **HTML5**: Page structure
- **CSS3**: Styling and layout
- **JavaScript**: Functionality and API calls
- **Open-Meteo API**: Free weather data (no key required)

## 🎯 Learning Objectives

After building this project, you'll understand:
- How to structure a web page
- How to style with CSS
- How to use JavaScript for interactivity
- How to fetch data from APIs
- How to handle user input
- How to display dynamic content

## 🌟 Code Highlights

### Simple API Call
```javascript
async function getWeatherData(lat, lon) {
    const url = `${WEATHER_API}?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code&timezone=auto`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
```

### Event Handling
```javascript
searchBtn.addEventListener('click', searchWeather);
```

### DOM Manipulation
```javascript
temp.textContent = Math.round(current.temperature_2m);
```

## 🚀 Next Steps

Once you've built this basic version, you could add:
- 5-day weather forecast
- Location detection
- Temperature unit conversion (°C/°F)
- More weather details
- Better error messages
- Weather animations

## 🐛 Troubleshooting

**City not found?**
- Check spelling
- Try including country (e.g., "Paris, France")

**Not loading?**
- Check internet connection
- Make sure all files are in the same folder

## 📚 Resources

- [MDN Web Docs](https://developer.mozilla.org/) - Learn web development
- [Open-Meteo API](https://open-meteo.com/) - Free weather API
- [CSS Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

## 🎉 You Did It!

Congratulations on building your weather app! This project covers many important web development concepts and gives you a solid foundation for building more complex applications.

---

**Happy coding! 🌈** 