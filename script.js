
const createElement = (tagName, id = '', text = '', classNames = []) => {
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
  let hiddenInput = document.getElementById('number-input');
  let guessField = document.getElementById('guess-container');
  guessField.textContent = hiddenInput.value;
}
