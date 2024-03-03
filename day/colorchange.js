function getRandomColor() {
    const hue = Math.floor(Math.random() * 360);
    const saturation = Math.floor(Math.random() * 51) + 50;
    const lightness = Math.floor(Math.random() * 51) + 50;
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

// Function to change background color with transition
function changeBackgroundColor() {
    const body = document.body;
    const currentColor = getComputedStyle(body).backgroundColor;
    const newColor = getRandomColor();
    
    // Apply transition to smoothly change the background color
    body.style.transition = 'background-color 1s';
    
    // Set the new background color
    body.style.backgroundColor = newColor;
    
    // Remove the transition after it completes
    setTimeout(() => {
        body.style.transition = '';
    }, 1000); // 1000 milliseconds = 1 second
}
setInterval(changeBackgroundColor, 1500); // Change color every 5 seconds (5000 milliseconds)