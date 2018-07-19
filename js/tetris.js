const canvas = document.getElementById('tetris');
const context = canvas.getContext('2d');

// set up board

context.scale(20, 20);

context.fillStyle = '#000';
context.fillRect(0, 0, canvas.clientWidth, canvas.height);

// define shapes

// T shape
const matrix = [
    [0, 0, 0],
    [1, 1, 1],
    [0, 1, 0],
];

function drawShape(matrix, offset) {
    matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value !== 0) {
                context.fillStyle = 'red';
                context.fillRect(x + offset.x, y + offset.y, 1, 1);
            }
        });
    });
}

drawShape(matrix, {x: 5, y: 5});