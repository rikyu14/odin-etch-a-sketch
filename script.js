const container = document.querySelector('.container');
const newGridBtn = document.querySelector('.newGridBtn');

function createGrid(size) {
    // Clear existing squares
    container.innerHTML = '';

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        // Set square's width and height to fill container evenly
        square.style.width = `calc(100% / ${size})`;
        square.style.height = `calc(100% / ${size})`;
        
        square.style.opacity = 0;

        square.addEventListener('mouseover', () => {
            darkenSquare(square);
        });

        container.appendChild(square);
    }
}

function darkenSquare(square) {
    let opacity = parseFloat(square.style.opacity);
    if (opacity < 1) {
        opacity += 0.1;
        square.style.opacity = opacity;
        square.style.backgroundColor = randomColor();
    }
}

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

createGrid(16);

newGridBtn.addEventListener('click', () => {
    let size = parseInt(prompt('Enter a number of squares per side (max = 100):'));

    if (isNaN(size) || size <= 0 || size > 100) {
        alert('Ivalid input. Please enter a number between 1 and 100.');
        return;
    }

    createGrid(size);
});
