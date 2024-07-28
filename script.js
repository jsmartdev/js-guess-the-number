
const gameUIElements = () => {
  return {
    header: {
      tagname: 'header',
      content: `<h1>Guess The Number</h1>`
    },
    main: {
      tagname: 'main',
      attributes: { id: 'game-card' },
      children: [
        {
          tagname: 'section',
          attributes: { 
            id: 'start-button',
            onclick: handleStart()
          },
          textContent: 'Start Game'
        },
        {
          tagname: 'section',
          attributes: { id: 'modes-buttons' },
          content: `<button id="easy">Easy</button>
                    <button id="normal">Normal</button>
                    <button id="hard">Hard</button>`
        },
        {
          tagname: 'section',
          attributes: { id: 'intro-message' },
          content: `<h2>You have ${chances} chances to find a number between 1 and ${maximum}.</h2>
                    <button id="continue" onclick="">Continue</button>`
        }, 
        {
          tagname: 'section',
          attributes: { id: 'game-grid' },
          content: `<div id="minimum" class="large">
                      <p>${minimum}</p>
                    </div>
                    <div id="chances" class="large">
                      <p>${chances}</p>
                    </div>
                    <div id="guess" class="large">
                      <input type="number" id="number-input" oninput="displayNumber()" autofocus required>
                      <p id="display"></p>
                    </div>
                    <div id="maximum" class="large">
                      <p>${maximum}</p>
                    </div>
                    <div id="turn-1" class="small">
                    </div>
                    <div id="turn-2" class="small">
                    </div>
                    <div id="turn-3" class="small">
                    </div>
                    <div id="turn-4" class="small">
                    </div>
                    <div id="turn-5" class="small">
                    </div>
                    <div id="turn-6" class="small">
                    </div>
                    <div id="turn-7" class="small">
                    </div>
                    <div id="turn-8" class="small">
                    </div>
                    <div id="turn-9" class="small">
                    </div>
                    <div id="turn-10" class="small">
                    </div>
                    <div id="turn-11" class="small">
                    </div>
                    <div id="turn-12" class="small">
                    </div>
                    <div id="turn-13" class="small">
                    </div>
                    <div id="turn-14" class="small">
                    </div>
                    <div id="turn-15" class="small">
                    </div>
                    <div id="turn-16" class="small">
                    </div>`
        },
        {
          tagname: 'section',
          attributes: { id: 'guess-message' },
          content: `<h2>Type in your number and press Enter.</h2>`
        },
        {
          tagname: 'section',
          attributes: { id: 'higher-message' },
          content: `<p>Higher than ${guess}</p>`
        },
        {
          tagname: 'section',
          attributes: { id: 'lower-message' },
          content: `<p>Lower than ${guess}</p>`
        },
        {
          tagname: 'section',
          attributes: { id: 'error-message' },
          content: `<p>That number is outside the current range of possibilities.</p>`
        },
        {
          tagname: 'section',
          attributes: { id: 'win-message' },
          content: `<img src="" alt="thumbs up">
                    <h2>You win!</h2>
                    <h2>${target} is the number!</h2>
                    <h2>Your score is ${score} points!</h2>`
        },
        {
          tagname: 'section',
          attributes: { id: 'lose-message' },
          content: `<img src="" alt="thumbs down">
                    <h2>Game Over! </h2>
                    <h2>You are out of chances.</h2>`
        }
      ]
    }
  }
}

const renderStart = () => {

}

const handleStart = () => {

}

const displayNumber = () => {
  let input = document.getElementById('number-input').value;
  document.getElementById('display').innerText = input;
}
