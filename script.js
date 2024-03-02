window.addEventListener('load', () => {
    const apiKey = '70b5dd97135e7c9b4b0bb199bfe72f87';
    const city = 'London'; // Replace 'London' with the desired city (make random list?)
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const location = data.name;
            const temperature = data.main.temp;
            const description = data.weather[0].description;

            document.getElementById('location').innerText = `Location: ${location}`;
            document.getElementById('temperature').innerText = `Temperature: ${temperature}°C`;
            document.getElementById('description').innerText = `Description: ${description}`;
        })
        .catch(error => {
            console.log('Error fetching weather data:', error);
        });
});