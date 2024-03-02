// Test to see if the browser supports the HTML template element by checking
// for the presence of the template element's content attriute.

if ("content" in document.createElement("template")) {
    // Instantiate the table with the existing HTML body
    // and the row with the template
    const body = document.querySelector("body");


    function AppendCardToBody(day, temperature, isSunny) {
        const template = document.querySelector("#weather_day_view");
        const clone = template.content.cloneNode(true);
        clone.querySelector("#day").textContent = day;
        clone.querySelector("#temperature").textContent = temperature;
        if (isSunny) {
            clone.querySelector("#weather_image").setAttribute("src", "../sun.svg")
        }
        else {
            clone.querySelector("#weather_image").setAttribute("src", "../cloud.svg")
        }
        body.appendChild(clone);
    }
    AppendCardToBody("Oneday", "28°C", true)
    AppendCardToBody("Twoday", "11°C", false)
    // Clone the new row and insert it into the table
    // let row = clone.querySelectorAll(".row");
    // row[0].textContent = "1235646565";
    // row[1].textContent = "Stuff";

    // body.appendChild(clone);

    // // Clone the new row and insert it into the table
    // const clone2 = template.content.cloneNode(true);
    // row = clone2.querySelectorAll(".row");
    // row[0].textContent = "0384928528";
    // row[1].textContent = "Acme Kidney Beans 2";

    // body.appendChild(clone2);
} else {
    // Find another way to add the rows to the table because
    // the HTML template element is not supported.
}
