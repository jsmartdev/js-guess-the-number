const gameUIElements = () => {
  return {
    main: {
      tagname: 'main',
      children: [
        {
          tagname: 'section',
          attributes: { id: 'game-start' },
          content: `<button id="start">Start Game</button>`
        },
        {
          tagname: 'section',
          attributes: { id: 'game-modes' },
          content: `<button id="easy">Easy</button>
                    <button id="normal">Normal</button>
                    <button id="hard">Hard</button>`
        },
        { 
          tagname: 'section',
          attributes: { id: 'random-number' },
          content: `<h2>${display}</h2>`
        },
        {
          tagname: 'section',
          attributes: { id: 'player-guess' },
          content: `<div>
                      <button id="add-thousand"></button>
                      <button id="add-hundred"></button>
                      <button id="add-ten"></button>            
                      <button id="add-one"></button>
                    </div>
                    <div>
                      <h2 id="thousands-digit">${thousands}</h2>
                      <h2 id="hundreds-digit">${hundreds}</h2>
                      <h2 id"tens-digit">${tens}</h2>
                      <h2 id="ones-digit">${ones}</h2>
                    </div>
                    <div>
                      <button id="minus-thousand"></button>
                      <button id="minus-hundred"></button>
                      <button id="minus-ten"></button>            
                      <button id="minus-one"></button>
                    </div>`
        }
      ]
    }
  }
}