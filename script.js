const display = document.querySelector(".display");
const button = document.querySelector("button");

let dimensions = 16;

for (let x = 0; x < dimensions; x++){
    for (let y = 0; y < dimensions; y++) {
        const pixel = document.createElement("div");
        pixel.className = "pixels";
        display.appendChild(pixel);
    }
}
