let btn = document
// getElementById("change");
let app = document.getElementById("color")
let car = document.querySelector("body")
// console.log(car);

btn.addEventListener("click", function () {
    let color1 = getRandomColor();
    // console.log(color1);
    let color2 = getRandomColor();
    let color3 = getRandomColor();
    let color = `rgb(${color1}, ${color2}, ${color3})`;
    app.innerHTML = color
    car.style.background = color;
})

function getRandomColor() {
    let randomColor = Math.floor(Math.random()*256);
    return randomColor; 
}