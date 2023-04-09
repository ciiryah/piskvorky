let currentPlayer = 'circle';

const playerIconElm = document.querySelector('#playing');

const tick = (evt) => {
  if (currentPlayer === 'circle') {
    evt.target.classList.add('board__field--circle');
    evt.target.disabled = true;
    currentPlayer = 'cross';
    playerIconElm.classList.remove('circle');
    playerIconElm.classList.add('cross');
    console.log(currentPlayer);
  } else {
    evt.target.classList.add('board__field--cross');
    evt.target.disabled = true;
    currentPlayer = 'circle';
    playerIconElm.classList.remove('cross');
    playerIconElm.classList.add('circle');
    console.log(currentPlayer);
  }
};

document
  .querySelector('#grid button:nth-child(1)')
  .addEventListener('click', tick);

document
  .querySelector('#grid button:nth-child(2)')
  .addEventListener('click', tick);

document
  .querySelector('#grid button:nth-child(3)')
  .addEventListener('click', tick);

document
  .querySelector('#grid button:nth-child(4)')
  .addEventListener('click', tick);

document
  .querySelector('#grid button:nth-child(5)')
  .addEventListener('click', tick);

document
  .querySelector('#grid button:nth-child(6)')
  .addEventListener('click', tick);

document
  .querySelector('#grid button:nth-child(7)')
  .addEventListener('click', tick);

document
  .querySelector('#grid button:nth-child(8)')
  .addEventListener('click', tick);

document
  .querySelector('#grid button:nth-child(9)')
  .addEventListener('click', tick);

document
  .querySelector('#grid button:nth-child(10)')
  .addEventListener('click', tick);
