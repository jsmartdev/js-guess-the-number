const startScreen = () => {
  const titleContainer = document.createElement('header');
  const buttonContainer  = document.createElement('section');
  const gameTitle = document.createElement('h1');
  gameTitle.textContent = 'Guess The Secret Number';
  const easyButton = document.createElement('button');
  const normalButton = document.createElement('button');
  const hardButton = document.createElement('button');
  
  titleContainer.id = 'title-container';
  buttonContainer.id = 'button-container';
  easyButton.id = 'easy-mode';
  normalButton.id = 'normal-mode';
  hardButton.id = 'hard-mode';
  easyButton.textContent = 'Easy';
  normalButton.textContent = 'Normal';
  hardButton.textContent = 'Hard';
  buttonContainer.appendChild(easyButton);
  buttonContainer.appendChild(normalButton);
  buttonContainer.appendChild(hardButton);
  const buttons = buttonContainer.querySelectorAll('button');
  buttons.forEach(button => button.classList.add('button'));
  titleContainer.appendChild(gameTitle);
  return [titleContainer, buttonContainer];
}

const gameScreen = document.getElementById('game-screen');
const startScreenElements = startScreen();
startScreenElements.forEach(el => gameScreen.appendChild(el));

const handleModes = () => {
  
}

const displayNumber = () => {
  let input = document.getElementById('number-input').value;
  document.getElementById('display').innerText = input;
}
