import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

let currentPlayer = 'circle';

const playerIconElm = document.querySelector('#playing');

const tick = (evt) => {
  if (currentPlayer === 'circle') {
    evt.target.classList.add('board__field--circle');
    evt.target.disabled = true;
    const buttonMapping = Array.from(gridButtons).map((button) => {
      if (button.classList.contains('board__field--cross')) {
        return 'x';
      } else if (button.classList.contains('board__field--circle')) {
        return 'o';
      } else {
        return '_';
      }
    });
    //
    const winner = findWinner(buttonMapping);
    if (winner === 'o') {
      setTimeout(() => {
        alert('vyhrálo kolečko');
      }, 100);
    } else if (winner === 'x') {
      setTimeout(() => {
        alert('vyhrál křížek');
      }, 100);
    } else if (winner === 'tie') {
      setTimeout(() => {
        alert('hra skončila nerozhodně');
      }, 100);
    }

    currentPlayer = 'cross';
    playerIconElm.classList.remove('circle');
    playerIconElm.classList.add('cross');
    //
    fetch(`https://piskvorky.czechitas-podklady.cz/api/suggest-next-move`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        board: buttonMapping,
        player: 'x',
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        const { x, y } = data.position;
        const index = gridButtons[x + y * 10];
        index.click();
      });
    //
  } else {
    evt.target.classList.add('board__field--cross');
    evt.target.disabled = true;

    const buttonMapping = Array.from(gridButtons).map((button) => {
      if (button.classList.contains('board__field--cross')) {
        return 'x';
      } else if (button.classList.contains('board__field--circle')) {
        return 'o';
      } else {
        return '_';
      }
    });
    //
    const winner = findWinner(buttonMapping);
    if (winner === 'o') {
      setTimeout(() => {
        alert('vyhrálo kolečko');
      }, 100);
    } else if (winner === 'x') {
      setTimeout(() => {
        alert('vyhrál křížek');
      }, 100);
    } else if (winner === 'tie') {
      setTimeout(() => {
        alert('hra skončila nerozhodně');
      }, 100);
    }
    currentPlayer = 'circle';
    playerIconElm.classList.remove('cross');
    playerIconElm.classList.add('circle');
  }
};

const gridButtons = document.querySelectorAll('#grid button');

gridButtons.forEach((button) => {
  button.addEventListener('click', tick);
});
