// Test to see if the browser supports the HTML template element by checking
// for the presence of the template element's content attriute.

if ("content" in document.createElement("template")) {
    // Instantiate the table with the existing HTML body
    // and the row with the template
    const body = document.querySelector("body");


    function AppendCardToBody(day, temperature, isSunny, location, description) {
        const template = document.querySelector("#weather_day_view");
        const clone = template.content.cloneNode(true);
        clone.querySelector("#day").textContent = day;
        clone.querySelector("#temperature").textContent = temperature;
        clone.querySelector("#location").textContent = location;
        clone.querySelector("#d").textContent = description;
        if (isSunny) {
            clone.querySelector("#weather_image").setAttribute("src", "../sun.svg")
        }
        else {
            clone.querySelector("#weather_image").setAttribute("src", "../cloud.svg")
        }
        body.appendChild(clone);
    }
    AppendCardToBody("Oneday", "28°C", true, "Vancouver", "Broken Clouds");
    AppendCardToBody("Twoday", "-5°C", false, "TurtleTown", "Cold af");
} else {
   console.error("Templates not Supported")
}
