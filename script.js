const display = document.querySelector(".display");

let dimensions = 256;

for (let i = 0; i < dimensions; i++){
    const pixels = document.createElement("div");
    pixels.className = "pix";
    display.appendChild(pixels);
}
