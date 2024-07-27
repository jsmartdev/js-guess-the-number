const gameUIElements = () => {
  return {
    main: {
      tagname: 'main',
      children: [
        {
          tagname: 'section',
          attributes: { id: 'game-title'},
          content: `<h1>Guess The Number</h1>`
        },
        {
          tagname: 'section',
          attributes: { id: 'start-button' },
          content: `<button id="start" onclick="">Start Game</button>`
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
          content: `<h2>You have ${chancesNum} chances to find a number between 1 and ${max}.</h2>
                    <button id="continue" onclick="">Continue</button>`
        }, 
        {
          tagname: 'section',
          attributes: { id: 'game-grid' },
          content: `<div id="minimum" class="large">
                    </div>
                    <div id="chances" class="large">
                    </div>
                    <div id="guess" class="large">
                    </div>
                    <div id="target" class="large">
                    </div>
                    <div id="maximum" class="large">
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
                    </div>
                    <div id="turn-17" class="small">
                    </div>
                    <div id="turn-18" class="small">
                    </div>
                    <div id="turn-19" class="small">
                    </div>
                    <div id="turn-20" class="small">
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