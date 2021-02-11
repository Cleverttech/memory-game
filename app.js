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
        let cardsSelected = []
        let cardsSelectedId = []
        let cardsYouWon = []
      
        //Board created here
        function createBoard() {
          for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src', 'images/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', turnCard)
            grid.appendChild(card)
          }
        }
      
        //check for matches
        function checkForMatch() {
            const cards = document.querySelectorAll('img')
            const choiceOneId = cardsSelectedId[0]
            const choiceTwoId = cardsSelectedId[1]
            
            if(choiceOneId == choiceTwoId) {
              cards[choiceOneId].setAttribute('src', 'images/blank.png')
              cards[choiceTwoId].setAttribute('src', 'images/blank.png')
              alert('Oops! You clicked the same food!')
            }
            else if (cardsSelected[0] === cardsSelected[1]) {
              alert('Hurray! you get something to eat')
              cards[choiceOneId].setAttribute('src', 'images/white.png')
              cards[choiceTwoId].setAttribute('src', 'images/white.png')
              cards[choiceOneId].removeEventListener('click', turnCard)
              cards[choiceTwoId].removeEventListener('click', turnCard)
              cardsYouWon.push(cardsSelected)
            } else {
              cards[choiceOneId].setAttribute('src', 'images/blank.png')
              cards[choiceTwoId].setAttribute('src', 'images/blank.png')
              alert('Oooow sorry :(! still hungry? Keep going')
            }
            cardsSelected = []
            cardsSelectedId = []
            resultDisplay.textContent = cardsYouWon.length
            if  (cardsYouWon.length === cardArray.length/2) {
              resultDisplay.textContent = 'Yaay! You found them all :)!'
            }
          }
        
        //flip  card
        function turnCard() {
          let cardId = this.getAttribute('data-id')
          cardsSelected.push(cardArray[cardId].name)
          cardsSelectedId.push(cardId)
          this.setAttribute('src', cardArray[cardId].img)
          if (cardsSelected.length ===2) {
            setTimeout(checkForMatch, 500)
          }
        }
      
        createBoard()
       
})