const startScreen = () => {
  
  const titleContainer = document.createElement('header');
  const buttonContainer  = document.createElement('section');
  const gameTitle = document.createElement('h1');
  const easyButton = document.createElement('button');
  const normalButton = document.createElement('button');
  const hardButton = document.createElement('button');
  
  titleContainer.id = 'title-container';
  buttonContainer.id = 'button-container';
  easyButton.id = 'easy-mode';
  normalButton.id = 'normal-mode';
  hardButton.id = 'hard-mode';
  gameTitle.textContent = 'Guess The Secret Number';
  easyButton.textContent = 'Easy';
  normalButton.textContent = 'Normal';
  hardButton.textContent = 'Hard';
  
  buttonContainer.appendChild(easyButton);
  buttonContainer.appendChild(normalButton);
  buttonContainer.appendChild(hardButton);
  titleContainer.appendChild(gameTitle);
  
  const buttons = buttonContainer.querySelectorAll('button');
  buttons.forEach(button => button.classList.add('button'));
  
  return [titleContainer, buttonContainer];

}

startScreen().forEach(el => document.body.appendChild(el));

const handleModes = () => {
  
}

const displayNumber = () => {
  let input = document.getElementById('number-input').value;
  document.getElementById('display').innerText = input;
}
