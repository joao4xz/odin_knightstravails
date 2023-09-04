function createBoard() {
  const board = document.getElementById('board');
  let currentLine = 0;
  for (let i = 0; i < 64; i++) {
    if (i === 0 || i % 8 === 0) {
      const line = document.createElement('div');
      line.classList.add('line');
      line.id = `Line${i / 8}`;
      currentLine = line;

      board.appendChild(line);
    }
    const square = document.createElement('div');
    square.classList.add('square');

    currentLine.appendChild(square);
  }
}

createBoard();
