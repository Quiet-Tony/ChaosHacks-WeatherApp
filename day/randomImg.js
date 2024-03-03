// List of image IDs
const imageIds = [
    '01d', '03n', '13d', '11n', '50d',
    '04d', '03d', '07n', '08n', '01n'
];

// Function to randomly select one image ID from the list
function getRandomImageId() {
    return imageIds[Math.floor(Math.random() * imageIds.length)];
}

// Function to display random image
function displayRandomImage() {
    const randomImageId = getRandomImageId();
    const imageUrl = `https://openweathermap.org/img/wn/${randomImageId}`; // Replace with your image URL pattern
    document.getElementById('randomImage').src = imageUrl;
}


// Call displayRandomImage function to initially display a random image
displayRandomImage();

// Function to switch to a new random image when called
function switchToRandomImage() {
    displayRandomImage();
}
