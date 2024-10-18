document.getElementById('newGridButton').addEventListener('click', () => {
    let gridSize = prompt("well hello there....how many squares do you want on each size?");
    //converts string to number
    gridSize = parseInt(gridSize);

    //validation
    if (gridSize>=1  && gridSize<=100) {
        createGrid(gridSize);
    }
    else {
        alert("must be between 1-100 sorry.....");
    }
});

function createGrid(gridSize) {
    const container = document.getElementById('container');
    container.innerHTML = ''; 

    const size = 960/(gridSize)

    container.style.display = 'grid';
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    container.style.width = '960px';
    container.style.height = '960px';

    for(let i = 0; i < gridSize * gridSize; i++) {
        const square = document.createElement('div');
        square.classList.add('square');

        square.style.width = '100%';
        square.style.height = '100%';
        square.style.border = '1px solid black';

        square.addEventListener('mouseenter', () => {
            const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
            square.style.background = randomColor;
        });

        square.addEventListener('mouseleave', () => {
            square.style.background = randomColor;
        });

        container.appendChild(square);
    }
}

// const squaresPerSide = document.createElement('button');
// squaresPerSide.textContent = 'how many squares do u want per side?';
// body.appendChild(squaresPerSide);