const container = document.querySelector('.container');
const gridSize = 16;

// Create 16x16 grids
for (i = 0; i < gridSize * gridSize; i++) {
    const square = document.createElement('div');
    square.classList.add('grid-square');
    container.appendChild(square);
}