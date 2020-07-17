const humanPlayer = 'X'
const computerPlayer = 'O'
const winCombos = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[6, 4, 2]
]

const cells = document.querySelectorAll('.cell');
const board = document.getElementById('board')

startGame()

function startGame() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', turnClick, false);
  }
}

function turnClick(square) {
	turn(square.target.id, humanPlayer)
}

function turn(cellId, player) {
	board[cellId] = player;
  document.getElementById(cellId).innerText = player;
}

