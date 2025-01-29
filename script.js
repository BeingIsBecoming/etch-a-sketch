const display = document.querySelector(".display");
const button = document.querySelector("button");

let scale = 20;

for (let i = 0; i < scale * scale; i++){
        const pixel = document.createElement("div");
        pixel.className = "pixels";
        pixel.style.width = `${500/scale}px`;
        pixel.style.height = `${500/scale}px`;
        display.appendChild(pixel);
        pixel.addEventListener("mouseover", function () {
            pixel.style.backgroundColor = "black";
        })
}
button.addEventListener("click", () => {
    newScale = prompt("Enter a number (1 - 50) to set the scale.");
    if (newScale < 1 || newScale > 50) {
        alert("Please select a number from (1-50)");
        return;
    }
});