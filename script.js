const display = document.querySelector(".display");
const displayWidth = display.clientWidth;
const button = document.querySelector("button");

function generateGrid(scale){
display.innerText = " ";
    for (let i = 0; i < scale * scale; i++){
        const pixel = document.createElement("div");
        pixel.className = "pixels";
        pixel.style.width = `${displayWidth/scale}px`;
        pixel.style.height = `${displayWidth/scale}px`;
        display.appendChild(pixel);
        pixel.addEventListener("mouseover", function () {
            pixel.style.backgroundColor = "black";
        })
    }
};

button.addEventListener("click", () => {
    const scale = prompt("Enter a number (1 - 50) to set the scale.");
        if (scale < 1 || scale > 50) {
        alert("Please select a number from (1-50)");
        return;
        }
    generateGrid(scale);
});
generateGrid(16);