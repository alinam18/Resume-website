// script.js
const gameStatus = document.getElementById('gameStatus');
const restartButton = document.getElementById('restartButton');
const cells = document.querySelectorAll('.cell');
let symbol = 'X'; // Default starting symbol
let gameActive = true;

function checkWin() {
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let condition of winConditions) {
        let [a, b, c] = condition;
        if (cells[a].innerText && cells[a].innerText === cells[b].innerText && cells[a].innerText === cells[c].innerText) {
            gameStatus.innerText = `${symbol} wins!`;
            gameActive = false;
            return;
        }
    }

    if ([...cells].every(cell => cell.innerText !== '')) {
        gameStatus.innerText = "It's a draw!";
        gameActive = false;
        return;
    }
}

cells.forEach(cell => {
    cell.addEventListener('click', function() {
        if (cell.innerText !== '' || !gameActive) return;

        cell.innerText = symbol;
        checkWin();
        symbol = symbol === 'X' ? 'O' : 'X';
    });
});

restartButton.addEventListener('click', () => {
    cells.forEach(cell => cell.innerText = '');
    gameActive = true;
    gameStatus.innerText = '';
    symbol = 'X';
});

window.onload = () => {
    gameStatus.innerText = "Welcome to Tic Tac Toe!";
};
