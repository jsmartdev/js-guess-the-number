
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
  const easyButton = makeElement('button', 'easy-mode', 'Easy', 'button-class');
  const normalButton = makeElement('button', 'normal-mode', 'Normal', 'button-class');
  const hardButton = makeElement('button', 'hard-mode', 'Hard', 'button-class');
  
  buttonContainer.appendChild(easyButton);
  buttonContainer.appendChild(normalButton);
  buttonContainer.appendChild(hardButton);
  titleContainer.appendChild(gameTitle);
  
  return [titleContainer, buttonContainer];
}

startScreen().forEach(el => document.body.appendChild(el));

const handleModes = () => {
  
}

const displayNumber = () => {
  let hiddenInput = document.getElementById('number-input');
  let guessField = document.getElementById('guess-container');
  guessField.textContent = hiddenInput.value;
}
