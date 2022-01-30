let counter = 0;
let decreaseButton = document.getElementById('decrease');
let increaseButton = document.getElementById('increase');
let resetButton = document.getElementById('reset');

function decreaseCounter() {
    counter--;
    document.querySelector('h2').innerHTML = counter;
}
decreaseButton.addEventListener('click', decreaseCounter);

function increaseCounter() {
    counter++;
    document.querySelector('h2').innerHTML = counter;
}
increaseButton.addEventListener('click', increaseCounter);

function resetCounter() {
    counter=0;
    document.querySelector('h2').innerHTML = counter;
}
resetButton.addEventListener('click', resetCounter);