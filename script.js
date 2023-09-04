function createBoard() {
  const board = document.getElementById('board');
  let currentLine = 0;
  let currentCol = 0;
  let isKnightSelected = false;
  let isDestinySelected = false;

  for (let i = 0; i < 64; i++) {
    if (i === 0 || i % 8 === 0) {
      const line = document.createElement('div');
      line.classList.add('line');
      line.id = `Line${i / 8}`;
      currentLine = line;
      currentCol = 0;

      board.appendChild(line);
    }

    const square = document.createElement('div');
    square.classList.add('square');
    square.classList.add(`square${currentCol}`);

    square.addEventListener('click', (event) => {
      const lineNumber = event.target.closest('.line').id.slice(-1);
      const squareNumber = event.target.classList.value.slice(-1);
      console.log(lineNumber);
      console.log(squareNumber);
      if (!isKnightSelected) {
        event.target.classList.add('knight-selected');

        var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('viewBox', '0 0 24 24');
        svg.setAttribute('width', '95');
        svg.setAttribute('height', '95');
        var title = document.createElementNS(
          'http://www.w3.org/2000/svg',
          'title'
        );
        var path = document.createElementNS(
          'http://www.w3.org/2000/svg',
          'path'
        );
        path.setAttribute(
          'd',
          'M19,22H5V20H19V22M13,2V2C11.75,2 10.58,2.62 9.89,3.66L7,8L9,10L11.06,8.63C11.5,8.32 12.14,8.44 12.45,8.9C12.47,8.93 12.5,8.96 12.5,9V9C12.8,9.59 12.69,10.3 12.22,10.77L7.42,15.57C6.87,16.13 6.87,17.03 7.43,17.58C7.69,17.84 8.05,18 8.42,18H17V6A4,4 0 0,0 13,2Z'
        );
        svg.appendChild(title);
        svg.appendChild(path);

        const squareColor = window.getComputedStyle(
          event.target
        ).backgroundColor;

        if (squareColor === 'rgb(221, 221, 221)') {
          svg.setAttribute('fill', 'black');
        } else if (squareColor === 'rgb(68, 68, 68)') {
          svg.setAttribute('fill', 'white');
        }

        square.appendChild(svg);

        isKnightSelected = true;
      } else if (isKnightSelected && !isDestinySelected) {
        event.target.setAttribute('id', 'destiny-selected');

        var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

        svg.setAttribute('viewBox', '0 0 24 24');
        svg.setAttribute('width', '90');
        svg.setAttribute('height', '90');

        var title = document.createElementNS(
          'http://www.w3.org/2000/svg',
          'title'
        );
        title.textContent = 'bullseye';

        var path = document.createElementNS(
          'http://www.w3.org/2000/svg',
          'path'
        );
        path.setAttribute(
          'd',
          'M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10Z'
        );

        svg.appendChild(title);
        svg.appendChild(path);

        const squareColor = window.getComputedStyle(
          event.target
        ).backgroundColor;

        if (squareColor === 'rgb(221, 221, 221)') {
          svg.setAttribute('fill', 'black');
        } else if (squareColor === 'rgb(68, 68, 68)') {
          svg.setAttribute('fill', 'white');
        }

        square.appendChild(svg);

        isDestinySelected = true;
      }
    });

    currentCol++;

    currentLine.appendChild(square);
  }
}

createBoard();
