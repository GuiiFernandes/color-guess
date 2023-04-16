const p = document.getElementById('rgb-color');
const divCircles = document.getElementById('circles-container');
const circles = document.getElementsByClassName('ball');
const answer = document.getElementById('answer');
const btnReset = document.getElementById('reset-game');
const score = document.getElementById('score');

const random = () => Math.round(Math.random() * 255);
const rgbColor = () => `(${random()}, ${random()}, ${random()})`;

const createCircles = () => {
  for (let index = 0; index < 6; index += 1) {
    const circle = document.createElement('button');
    circle.classList.add('ball');
    divCircles.appendChild(circle);
  }
};

const colorCircles = () => {
  const randomPosition = Math.round(Math.random() * (6 - 1) + 1);
  for (let index = 0; index < circles.length; index += 1) {
    if (index === randomPosition) {
      circles[index].style.backgroundColor = `rgb${p.innerText}`;
    } else {
      circles[index].style.backgroundColor = `rgb${rgbColor()}`;
    }
  }
};

const game = (index) => {
  const colorCircle = circles[index].style.backgroundColor;
  const colorP = `rgb${p.innerText}`;
  circles[index].classList.add('selected');
  circles[index].style.border = '2px solid red';
  if (colorCircle === colorP) {
    answer.innerHTML = 'Acertou!';
    circles[index].style.borderColor = 'green';
    score.innerHTML = Number.parseInt(score.innerHTML, 10) + 3;
  } else {
    answer.innerHTML = 'Errou! Tente novamente!';
    score.innerHTML = Number.parseInt(score.innerHTML, 10) - 1;
  }
};

const clickCircle = () => {
  for (let index = 0; index < circles.length; index += 1) {
    circles[index].addEventListener('click', () => {
      const selected = document.querySelector('.selected');
      if (!selected) {
        game(index);
      }
    });
  }
};

const resetColors = () => {
  btnReset.addEventListener('click', () => {
    const selected = document.querySelector('.selected');
    if (selected) selected.classList.remove('selected');
    p.innerHTML = rgbColor();
    colorCircles();
    answer.innerHTML = 'Escolha uma cor';
    for (let index = 0; index < circles.length; index += 1) {
      circles[index].style.border = '1px solid black';
    }
  });
};

window.onload = () => {
  p.innerHTML = rgbColor();
  createCircles();
  colorCircles();
  clickCircle();
  resetColors();
};
