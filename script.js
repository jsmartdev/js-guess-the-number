const gameField = document.getElementById('game-field');
const secret = Math.trunc(Math.random()*500)+1;
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

const displayNumber = (field, value) => {
  field.textContent = value;
}

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
  const guessCard = makeElement('section', 'guess-card', '', ['card']);
  const turnsCard = makeElement('section', 'turns-card', '', ['card']);
  const minCard = makeElement('section', 'min-card', '', ['card']);
  const maxCard = makeElement('section', 'max-card', '', ['card']);
  const buttonGrid = makeElement('section', 'button-grid')
  const message = makeElement('h4', 'message', 'Type in a number between min and max, then press enter');
  const guessLabel = makeElement('h2', 'guess-label', 'Guess');
  const guessValue = makeElement('h3', 'guess-value');
  const turnsLabel = makeElement('h2', 'turns-label', 'Turns');
  const turnsValue = makeElement('h3', 'turns-value');
  const minLabel = makeElement('h2', 'min-label', 'Min');
  const minValue = makeElement('h3', 'min-value', '001');
  const maxLabel = makeElement('h2', 'max-label', 'Max');
  const maxValue = makeElement('h3', 'max-value', '500');
  const one = makeElement('button', '', '1', ['number']);
  const two = makeElement('button', '', '2', ['number']);
  const three = makeElement('button', '', '3', ['number']);
  const four = makeElement('button', '', '4', ['number']);
  const five = makeElement('button', '', '5', ['number']);
  const six = makeElement('button', '', '6', ['number']);
  const seven = makeElement('button', '', '7', ['number']);
  const eight = makeElement('button', '', '8', ['number']);
  const nine = makeElement('button', '', '9', ['number']);
  const zero = makeElement('button', '', '0', ['number']);
  const backSpace = makeElement('button', 'back-space', 'BS');
  const enter = makeElement('button', 'enter', 'E');
  messageField.appendChild(message);
  guessCard.append(guessLabel, guessValue);
  turnsCard.append(turnsLabel, turnsValue);
  minCard.append(minLabel, minValue);
  maxCard.append(maxLabel, maxValue);
  buttonGrid.append(one, two, three, four, five, six, seven, eight, nine, zero, backSpace, enter);
  
  return [messageField, guessCard, turnsCard, minCard, maxCard, buttonGrid];
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
  const normalButton = makeElement('button', 'normal-mode', 'Normal', ['button'] );
  const hardButton = makeElement('button', 'hard-mode', 'Hard', ['button'] );
  
  easyButton.addEventListener('click', () => handleModeButton(16));
  normalButton.addEventListener('click', () => handleModeButton(12));
  hardButton.addEventListener('click', () => handleModeButton(8));
  
  buttonContainer.appendChild(easyButton);
  buttonContainer.appendChild(normalButton);
  buttonContainer.appendChild(hardButton);
}

handleModeButton = (chanceNum) => {
  chances += chanceNum;
  clearChildren(gameField);
  renderGameScreen();
  
  const turnsValue = document.getElementById('turns-value');
  const numbers = document.querySelectorAll('.number');
  const guessValue = document.getElementById('guess-value');
  let typedNumerals = ""; 

  numbers.forEach((number) => {
    number.addEventListener('click', (event) => {
    typedNumerals += event.target.textContent;
    if(typedNumerals.length > 3) {
      typedNumerals = typedNumerals.slice(-3);
    }
    guessValue.textContent = typedNumerals;
  })
})

  if(chances < 10) {
    turnsValue.textContent = `00${chances}`;
  } else {
    turnsValue.textContent = `0${chances}`;
  }


}

renderStartScreen();









