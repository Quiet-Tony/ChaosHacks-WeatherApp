// List of 25 large, well-known cities
const cities = [
    'Tokyo', 'Delhi', 'Shanghai', 'São Paulo', 'Mumbai',
    'Mexico City', 'Beijing', 'Osaka', 'Cairo', 'New York City',
    'Dhaka', 'Karachi', 'Buenos Aires', 'Istanbul', 'Kolkata',
    'Lagos', 'Kinshasa', 'Manila', 'Rio de Janeiro', 'Tianjin',
    'Guangzhou', 'London', 'Lahore', 'Bangkok', 'Shenzhen'
];

// Function to randomly select one city from the list
function getRandomCity() {
    return cities[Math.floor(Math.random() * cities.length)];
}

// Function to randomly select one unit (Celsius, Fahrenheit, Kelvin)
function getRandomUnit() {
    const units = ['metric', 'imperial', 'standard']; // Celsius, Fahrenheit, Kelvin
    return units[Math.floor(Math.random() * units.length)];
}

// Function to fetch 5-day weather forecast data for a city using the API
function fetchWeatherForecast(city, units) {
    const apiKey = '70b5dd97135e7c9b4b0bb199bfe72f87'; // Replace with your API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${units}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Extract the forecast data you need from the API response
            const forecastList = data.list; // List of forecast data for 5 days

            // Display the forecast data on the webpage
            const forecastDataElement = document.getElementById('forecastData');
            forecastDataElement.innerHTML = ''; // Clear previous forecast data

            const forecastTitle = document.createElement('h2');
            forecastTitle.textContent = `5-Day Weather Forecast for ${city} (${getUnitLabel(units)})`;
            forecastDataElement.appendChild(forecastTitle);
            forecastList.forEach(forecast => {
                const dateTime = forecast.dt_txt; // Date and time of the forecast
                const temperature = forecast.main.temp; // Temperature
                const description = forecast.weather[0].description; // Weather description

                const forecastItem = document.createElement('p');
                forecastItem.textContent = `${dateTime}: Temperature ${temperature}°${getUnitSymbol(units)}, ${description}`;
                forecastDataElement.appendChild(forecastItem);
            });
        })
        .catch(error => {
            console.log('Error fetching weather forecast:', error);
        });
}
// Function to get label for the unit
function getUnitLabel(units) {
    switch(units) {
        case 'metric':
            return 'Celsius';
        case 'imperial':
            return 'Fahrenheit';
        case 'standard':
            return 'Kelvin';
        default:
            return '';
    }
}
// Function to get symbol for the unit
function getUnitSymbol(units) {
    switch(units) {
        case 'metric':
            return 'C';
        case 'imperial':
            return 'F';
        case 'standard':
            return 'K';
        default:
            return '';
    }
}
const randomCity = getRandomCity();
const randomUnit = getRandomUnit();
fetchWeatherForecast(randomCity, randomUnit);