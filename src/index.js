const visibleGameGrid = document.querySelector('#gameGrid');
// const characterPlayer = document.createElement()

const rows = 20;
const columns = 20;
const gameGrid = [];

function createGameGrid() {
  for (let i = 0; i < rows; i++) {
    gameGrid[i] = [];
    for (let j = 0; j < columns; j++) {
      let cell = document.createElement('div');
      cell.classList.add('newCell');
      gameGrid[i][j] = cell;
      visibleGameGrid.appendChild(cell);
    }
  }
  spawnCharacters();
}
createGameGrid();

function moveRight(character) {
  for (let i = 0; i < gameGrid.length; i++) {
    for (let j = 0; j < gameGrid[i].length; j++) {
      if (gameGrid[i][j].contains(character)) {
        gameGrid[i][j].remove(character);
        gameGrid[i][j + 1].appendChild(character);
      }
    }
  }
}

function spawnCharacters() {
  const randomIndex1 = Math.floor(Math.random() * 20);
  const randomIndex2 = Math.floor(Math.random() * 20);
  let player = document.createElement('div');
  player.classList.add('player');

  gameGrid[randomIndex1][randomIndex2].appendChild(player);
}

function characterMovement(keyboardKey) {
  //up
  if (keyboardKey.keyCode === 38) {
    alert('up');
  }
  //right-up
  else if (keyboardKey.keyCode === 33) {
    alert('right, up');
  }
  //right
  else if (keyboardKey.keyCode === 39) {
    moveRight(player);
    alert('right');
  }
  //right-down
  else if (keyboardKey.keyCode === 34) {
    alert('right, down');
  }
  //down
  else if (keyboardKey.keyCode === 40) {
    alert('down');
  }
  //left-down
  else if (keyboardKey.keyCode === 35) {
    alert('left, down');
  }
  //left
  else if (keyboardKey.keyCode === 37) {
    alert('left');
  }
  //left-up
  else if (keyboardKey.keyCode === 36) {
    alert('left, up');
  }
}

window.addEventListener('keyup', (event) => {
  characterMovement(event);
});
