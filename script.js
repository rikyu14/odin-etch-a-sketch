const container = document.querySelector('.container');
const newGridBtn = document.querySelector('.newGridBtn');

function createGrid(size) {
    // Clear existing squares
    container.innerHTML = '';

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        // Set square's width and height
        square.style.width = `calc(100% / ${size})`;
        square.style.height = `calc(100% / ${size})`;
    
        square.addEventListener('mouseover', () => {
            square.classList.add('hovered');
        });

        container.appendChild(square);
    }
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
