let count = 0;

let countDisplay = document.getElementById("count");
let incBtn = document.getElementById("incBtn");
let decBtn = document.getElementById("decBtn");

// Increase
incBtn.addEventListener("click", function () {
    count++;
    countDisplay.innerText = count;
});

// Decrease
decBtn.addEventListener("click", function () {
    count--;
    countDisplay.innerText = count;
});