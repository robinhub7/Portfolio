document.getElementById('weather-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission

    const cityName = document.getElementById('city-name').value.trim().toLowerCase();
    
    // Weather data dictionary
    const weatherData = {
        "london": {
            "temperature": "15°C",
            "conditions": "Cloudy",
            "wind_speed": "5 km/h",
            "humidity": "80%"
        },
        "new york": {
            "temperature": "20°C",
            "conditions": "Sunny",
            "wind_speed": "10 km/h",
            "humidity": "50%"
        },
        "tokyo": {
            "temperature": "18°C",
            "conditions": "Rainy",
            "wind_speed": "7 km/h",
            "humidity": "90%"
        },
        "sydney": {
            "temperature": "22°C",
            "conditions": "Windy",
            "wind_speed": "15 km/h",
            "humidity": "60%"
        },
        "paris": {
            "temperature": "17°C",
            "conditions": "Foggy",
            "wind_speed": "3 km/h",
            "humidity": "85%"
        }
    };

    // Check if the city is in the weather data
    if (weatherData[cityName]) {
        const cityWeather = weatherData[cityName];
        const weatherOutput = `
            <p>Weather in ${cityName.charAt(0).toUpperCase() + cityName.slice(1)}:</p>
            <p>Temperature: ${cityWeather.temperature}</p>
            <p>Condition: ${cityWeather.conditions}</p>
            <p>Wind: ${cityWeather.wind_speed}</p>
            <p>Humidity: ${cityWeather.humidity}</p>
        `;
        document.getElementById('weather-output').innerHTML = weatherOutput;
    } else {
        document.getElementById('weather-output').textContent = "City name not found. Please enter a valid city.";
    }
});