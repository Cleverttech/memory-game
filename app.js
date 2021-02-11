document.addEventListener('DOMContentLoaded', () => {
    //different cards
    const cardArray =[
        { name:'apple',
            img:'images/apple.png'
        },
        {  name:'apple',
            img:'images/apple.png'
        },      
        { name:'pear',
            img:'images/pear.png'
        },
        {  name:'pear',
            img:'images/pear.png'
        },
        {   name:'banana',
            img:'images/banana.png'
        },
        {  name:'banana',
            img:'images/banana.png'
        },
        { name:'burger',
            img:'images/burger.png'
        },
        {   name:'burger',
            img:'images/burger.png'
        },
        {  name:'pizza',
            img:'images/pizza.png'
        },
        {  name:'pizza',
            img:'images/pizza.png'
        },
        {  name:'cherry',
            img:'images/cherry.png'
        },
        {  name:'cherry',
            img:'images/cherry.png'
        }]
      
        cardArray.sort(() => 0.5 - Math.random())

        const grid = document.querySelector('.grid')
        const resultDisplay = document.querySelector('#result')
        let cardsChosen = []
        let cardsChosenId = []
        let cardsWon = []
      
        //Board created here
        function createBoard() {
          for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src', 'images/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
          }
        }
      
        //check for matches
      
        //flip  card
        function flipCard() {
          let cardId = this.getAttribute('data-id')
          cardsChosen.push(cardArray[cardId].name)
          cardsChosenId.push(cardId)
          this.setAttribute('src', cardArray[cardId].img)
          if (cardsChosen.length ===2) {
            setTimeout(checkForMatch, 500)
          }
        }
      
        createBoard()
       
})