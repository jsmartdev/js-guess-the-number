const gameScreen = document.getElementById('game-screen');

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

const displayNumber = (element, value) => {
  if (value < 10) {
    element.textContent = `00${value}`;
  } else if (value < 100) {
    element.textContent = `0${value}`;
  } else {
    element.textContent = `${value}`;
  }
}

const isWithinMinMax = (input, min, max) => {
  return input >= min && input <= max;
}

const clearChildren = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

const renderScreen = (template) => {
  clearChildren(gameScreen);
  template().forEach(el => gameScreen.appendChild(el));
}

const startTemplate = () => {
  const titleContainer = makeElement('header', 'header-container');
  const pageContainer  = makeElement('section', 'page-container');
  const titleContent = makeElement('h1', '', 'Guess The Secret Number');
  const startButton = makeElement('button', 'start-game', 'Start');
  startButton.addEventListener('click', handleStartButton);
  titleContainer.appendChild(titleContent);
  pageContainer.appendChild(startButton);
  return [titleContainer, pageContainer];
}

const gameTemplate = () => {
  const messageContainer = makeElement('section', 'message-container');
  const guessCard = makeElement('section', 'guess-card', '', ['card']);
  const turnsCard = makeElement('section', 'turns-card', '', ['card']);
  const minCard = makeElement('section', 'min-card', '', ['card']);
  const maxCard = makeElement('section', 'max-card', '', ['card']);
  const buttonGrid = makeElement('section', 'button-grid');
  const messageContent = makeElement('h4', 'message', 'Type in a number between min and max');
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
  messageContainer.appendChild(messageContent);
  guessCard.append(guessLabel, guessValue);
  turnsCard.append(turnsLabel, turnsValue);
  minCard.append(minLabel, minValue);
  maxCard.append(maxLabel, maxValue);
  buttonGrid.append(one, two, three, four, five, six, seven, eight, nine, zero, enter);
  return [messageContainer, guessCard, turnsCard, minCard, maxCard, buttonGrid];
}

const winTemplate = (secret, chances) => {
  const headerContainer = makeElement('header', 'header-container');
  const pageContainer = makeElement('section', 'page-container');
  const headerContent= makeElement('h1', '', `You Win!`);
  const messageContent = makeElement('h2', 'message-content', `${secret} is the secret number! Your score is ${chances}`);
  const returnButton = makeElement('button', 'return', 'Return');
  returnButton.addEventListener('click', () => renderScreen(startTemplate));
  headerContainer.append(headerContent);
  pageContainer.append(messageContent, returnButton);
  return [headerContainer, pageContainer];
}

const lossTemplate = () => {
  const headerContainer = makeElement('header', 'header-container');
  const pageContainer = makeElement('section', 'page-container');
  const headerContent= makeElement('h1', '', `Game Over!`);
  const messageContent = makeElement('h2', 'message-content', `You are out of chances.`);
  const returnButton = makeElement('button', 'return', 'Return');
  returnButton.addEventListener('click', () => renderScreen(startTemplate));
  headerContainer.append(headerContent);
  pageContainer.append(messageContent, returnButton);
  return [headerContainer, pageContainer];
}

const handleStartButton = () => {
  const pageContainer = document.getElementById('page-container');
  clearChildren(pageContainer);
  const easyButton = makeElement('button', 'easy-mode', 'Easy');
  const normalButton = makeElement('button', 'normal-mode', 'Normal');
  const hardButton = makeElement('button', 'hard-mode', 'Hard');
  easyButton.addEventListener('click', () => handleModeButton(14));
  normalButton.addEventListener('click', () => handleModeButton(10));
  hardButton.addEventListener('click', () => handleModeButton(6));
  pageContainer.append(easyButton, normalButton, hardButton);
}

handleModeButton = (chanceNum) => {
  renderScreen(gameTemplate);
  let chances = 0;
  chances += chanceNum;
  const secret = Math.trunc(Math.random()*999)+1;
  const turnsValue = document.getElementById('turns-value');
  const minValue = document.getElementById('min-value');
  const maxValue = document.getElementById('max-value');
  const numbers = document.querySelectorAll('.number');
  const enter = document.getElementById('enter-button');
  const guessValue = document.getElementById('guess-value');
  let typedNumerals = ""; 
  displayNumber(turnsValue, chances);
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
    const message = document.getElementById('message');
    if (!isWithinMinMax(guess, minimum, maximum)) {
      message.textContent = 'Invalid Number';
      typedNumerals = '';
      guessValue.textContent = '';
      return;
    } 
    if (guess === secret) {
      const chancesLeft = chances * 25;
      renderScreen(() => winTemplate(secret, chancesLeft));
      return;
    }
    if (guess < secret) {
      displayNumber(minValue, guess);
      message.textContent = 'Higher';
    } else {
      displayNumber(maxValue, guess);
      message.textContent = 'Lower';
    }
    chances--;
    displayNumber(turnsValue, chances);
    typedNumerals = '';
    guessValue.textContent = '';
    if (chances < 1) {
      renderScreen(lossTemplate);
      return;
    }
  })
};

renderScreen(startTemplate);