const gameField = document.getElementById('game-field');
let chances = 0;
let min = 1;
let max = 500;

const makeElement = (tagName, id = '', text = '', classNames = []) => {
  const element = document.createElement(tagName);
  if (id) {
    element.id = id;
  }
  if (text) {
    element.textContent = text;
  }
  if (classNames.length > 0) {
    element.classList.add(...classNames);
  }
  return element;
};

const modifyClasses = (element, classesToAdd = [], classesToRemove = []) => {
  if (element instanceof Element) {
    if (classesToRemove.length > 0) {
      element.classList.remove(...classesToRemove);
    }
    if (classesToAdd.length > 0) {
      element.classList.add(...classesToAdd);
    }
  } else {
    console.error('Provided argument is not a valid DOM element.');
  }
};

const clearChildren = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

const startScreen = () => {
  const titleContainer = makeElement('header', 'title-container');
  const buttonContainer  = makeElement('section', 'button-container');
  const gameTitle = makeElement('h1', '', 'Guess The Secret Number');
  const startButton = makeElement('button', 'start-game', 'Start Game', ['button'])
  startButton.addEventListener('click', handleStartButton);
  
  buttonContainer.appendChild(startButton);
  titleContainer.appendChild(gameTitle);
  
  return [titleContainer, buttonContainer];
}

const gameScreen = () => {
  const messageField = makeElement('section', 'message-field');
  const guessField = makeElement('section', 'guess-field');
  const turnsField = makeElement('section', 'turns-field');
  const minField = makeElement('section', 'min-field', '001');
  const maxField = makeElement('section', 'max-field', '500');
  const message = makeElement('h4', 'message', 'Type in a number between min and max, then press enter');
  const guessLabel = makeElement('h2', 'guess-label', 'Guess');
  const guessValue = makeElement('h3', 'guess-value');
  const turnsLabel = makeElement('h2', 'turns-label', 'Turns');
  const turnsValue = makeElement('h3', 'turns-value', `${chances}`);
  const minLabel = makeElement('h2', 'min-label', 'Min');
  const minValue = makeElement('h3', 'min-value', '001');
  const maxLabel = makeElement('h2', 'max-label', 'Max');
  const maxValue = makeElement('h3', 'max-value', '500');
  

  messageField.appendChild(message);
  guessField.appendChild(guessLabel);
  guessField.appendChild(guessValue);
  turnsField.appendChild(turnsLabel);
  turnsField.appendChild(turnsValue);
  minField.appendChild(minLabel);
  minField.appendChild(minValue);
  maxField.appendChild(maxLabel);
  maxField.appendChild(maxValue);

  return [messageField, guessField, turnsField, minField, maxField, hiddenInput];
}


const renderStartScreen = () => {
  startScreen().forEach(el => gameField.appendChild(el));
}

const renderGameScreen = () => {
  gameScreen().forEach(el => gameField.appendChild(el));
}

const handleStartButton = () => {
  const buttonContainer = document.getElementById('button-container');
  clearChildren(buttonContainer);

  const easyButton = makeElement('button', 'easy-mode', 'Easy', ['button'] );
  easyButton.addEventListener('click', () => handleModeButton('easy-mode', 16));
  const normalButton = makeElement('button', 'normal-mode', 'Normal', ['button'] );
  normalButton.addEventListener('click', () => handleModeButton('normal-mode', 12));
  const hardButton = makeElement('button', 'hard-mode', 'Hard', ['button'] );
  hardButton.addEventListener('click', () => handleModeButton('hard-mode', 8));
  
  buttonContainer.appendChild(easyButton);
  buttonContainer.appendChild(normalButton);
  buttonContainer.appendChild(hardButton);
}

handleModeButton = (id, chanceNum) => {
  const modeButton = document.getElementById(id);
  chances += chanceNum;
  clearChildren(gameField);
  renderGameScreen();
}

renderStartScreen();









