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
            
            let counter = 0; // Counter to track the number of data points processed

            forecastList.forEach(forecast => {
                const dateTime = forecast.dt_txt; // Date and time of the forecast
                const temperature = forecast.main.temp; // Temperature
                const description = forecast.weather[0].description; // Weather description
                const iconCode = forecast.weather[0].icon; // Weather icon code

                // Create a container for the forecast item
                const forecastItem = document.createElement('div');
                forecastItem.classList.add('forecast-item');

                // Create HTML elements for displaying forecast data
                const dateTimeElement = document.createElement('p');
                dateTimeElement.textContent = `Date and Time: ${dateTime}`;

                const temperatureElement = document.createElement('p');
                temperatureElement.textContent = `Temperature: ${temperature}${getUnitSymbol(units)}`;

                const descriptionElement = document.createElement('p');
                descriptionElement.textContent = `Description: ${description}`;
                 // Create an img element for the weather icon
                 const iconElement = document.createElement('img');
                 iconElement.src = `https://openweathermap.org/img/wn/${iconCode}.png`;

                // Append forecast data elements to the forecast item container
                forecastItem.appendChild(dateTimeElement);
                forecastItem.appendChild(temperatureElement);
                forecastItem.appendChild(descriptionElement);
                forecastItem.appendChild(iconElement);
                // Append forecast item container to the forecast data container
                forecastDataElement.appendChild(forecastItem);
                counter++; // Increment counter

                // Add line break after every 8 data points
                if (counter % 8 === 0) {
                     for (let i = 0; i < 3; i++) {
                        forecastDataElement.appendChild(document.createElement('br'));
                    }
                }
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
            return '°C';
        case 'imperial':
            return '°F';
        case 'standard':
            return 'K';
        default:
            return '';
    }
}

// Get a random city and unit, and fetch 5-day weather forecast for it
const randomCity = getRandomCity();
const randomUnit = getRandomUnit();
fetchWeatherForecast(randomCity, randomUnit);
