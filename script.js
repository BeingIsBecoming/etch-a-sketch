const display = document.querySelector(".display");
const button = document.querySelector("button");

let scale = 16;

for (let x = 0; x < scale; x++){
    for (let y = 0; y < scale; y++) {
        const pixel = document.createElement("div");
        pixel.className = "pixels";
        display.appendChild(pixel);
        pixel.addEventListener("mouseover", function () {
            pixel.style.backgroundColor = "black";
        })
    }
}
button.addEventListener("click", () => {
    newScale = prompt("Enter a number (1 - 50) to set the scale.");
    if (newScale < 1 || newScale > 50) {
        alert("Please select a number from (1-50)");
        return;
    }
});