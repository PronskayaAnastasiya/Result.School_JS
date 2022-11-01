const board = document.getElementById('board');
const SQUARES_NUMBER = 1000;
const colors = '0123456789ABCDEF';
//const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange']

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square);
}

function setColor(square) {
    const color = getRandomColor()
    square.style.backgroundColor = color;
    square.style.boxShadow = `0 0 2px ${color},0 0 10px  ${color}`
}

function removeColor(square) {
    square.style.backgroundColor = '#1d1d1d';
    square.style.boxShadow = '0 0 02px #000';
}

function getRandomColor() {
    let randomColor = '#';
    for (let i = 0; i < 6; i++) {
        randomColor += colors[Math.floor(Math.random() * colors.length)];
    }
    return randomColor;
}