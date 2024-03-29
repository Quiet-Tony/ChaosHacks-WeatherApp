
// List of 25 cities
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

// List of units for temperature
const units = [
    'metric', 'imperial', 'standard'
]

// Function to randomly select one unit from the list
function getRandomUnit() {
    return units[Math.floor(Math.random() * units.length)]
}

// Function to fetch weather data for a city using the API
function fetchWeatherData(city, unit) {
    const apiKey = '70b5dd97135e7c9b4b0bb199bfe72f87'; // Replace with your API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const location = data.name;
        const temperature = data.main.temp;
        const description = data.weather[0].description;
        const iconCode = data.weather[0].icon;
        const date = data.dt;
        const realDate = new Date(date * 1000);
        const dateStr = realDate.toDateString();
        

        document.getElementById('dateShow').innerText = dateStr;

        document.getElementById('location').innerText = `Location: ${location}`;
        if (unit == units[0]) {
            document.getElementById('temperature').innerText = `Temperature: ${temperature}°C`;
        } else if (unit == units[1]) {
            document.getElementById('temperature').innerText = `Temperature: ${temperature}°F`;
        } else {
            document.getElementById('temperature').innerText = `Temperature: ${temperature}K`;
        }
        
        document.getElementById('description').innerText = `Description: ${description}`;

        
    })
    .catch(error => {
        console.log('Error fetching weather data:', error);
    });
}

// Get a random city and fetch weather data for it
const randomCity = getRandomCity();
const randomUnit = getRandomUnit();
fetchWeatherData(randomCity, randomUnit);
