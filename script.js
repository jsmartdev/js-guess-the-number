const gameField = document.getElementById('game-field');
const secret = Math.trunc(Math.random()*999)+1;
let chances = 0;

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

const isWithinMinMax = (input, min, max) => {
  return input >= min && input <= max;
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
  const maxValue = makeElement('h3', 'max-value', '999');
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
  const enter = makeElement('button', 'enter-button', 'enter', ['enter']);
  messageField.appendChild(message);
  guessCard.append(guessLabel, guessValue);
  turnsCard.append(turnsLabel, turnsValue);
  minCard.append(minLabel, minValue);
  maxCard.append(maxLabel, maxValue);
  buttonGrid.append(one, two, three, four, five, six, seven, eight, nine, zero, enter);
  
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
  clearChildren(gameField);
  renderGameScreen();
  chances += chanceNum;
  
  const turnsValue = document.getElementById('turns-value');
  const minValue = document.getElementById('min-value');
  const maxValue = document.getElementById('max-value');
  const numbers = document.querySelectorAll('.number');
  const enter = document.getElementById('enter-button');
  const guessValue = document.getElementById('guess-value');
  let typedNumerals = ""; 

  if(chances < 10) {
    turnsValue.textContent = `00${chances}`;
  } else {
    turnsValue.textContent = `0${chances}`;
  }

  numbers.forEach((number) => {
    number.addEventListener('click', (event) => {
      typedNumerals += event.target.textContent;
      if(typedNumerals.length > 3) {
        typedNumerals = typedNumerals.slice(-3);
      }
      guessValue.textContent = typedNumerals;
    })
  })
    
  enter.addEventListener('click', () => {
    
    const guess = parseFloat(guessValue.textContent);
    const minimum = parseFloat(minValue.textContent);
    const maximum = parseFloat(maxValue.textContent);
    
    if (!isWithinMinMax(guess, minimum, maximum)) {
      renderErrorMessage();
      typedNumerals = '';
      guessValue.textContent = '';
      return;
    } 
    if (guess === secret) {
      renderWinScreen();
      return;
    }
    if (guess < secret) {
      minValue.textContent = guess;
    } else {
      maxValue.textContent = guess;
    }
    chances -= 1;
    console.log(chances);
    turnsValue.textContent = '';
    if (chances < 10) {
      turnsValue.textContent = `00${chances}`;
    } else {
      turnsValue.textContent = `0${chances}`;
    }
    typedNumerals = '';
    guessValue.textContent = '';
    if (chances < 1) {
      renderGameOver();
      return;
    }
  })
};

renderStartScreen();









