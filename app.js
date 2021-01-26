document.addEventListener('DOMContentLoaded', () => {


    //different cards
    const cardArray =[
        {
            name:'apple',
            img:'images/apple.png'
        },
        {
            name:'apple',
            img:'images/apple.png'
        },      
        {
            name:'pear',
            img:'images/pear.png'
        },
        {
            name:'pear',
            img:'images/pear.png'
        },
        {
            name:'banana',
            img:'images/banana.png'
        },
        {
            name:'banana',
            img:'images/banana.png'
        },
        {
            name:'burger',
            img:'images/burger.png'
        },
        {
            name:'burger',
            img:'images/burger.png'
        },
        {
            name:'pizza',
            img:'images/pizza.png'
        },
        {
            name:'pizza',
            img:'images/pizza.png'
        },
        {
            name:'cherry',
            img:'images/cherry.png'
        },
        {
            name:'cherry',
            img:'images/cherry.png'
        }
        
    ]
  
    const grid = document.querySelector('.grid')

    //creating my Board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++){
            var card = document.createElement('img')
            card.setAttribute('src', 'images/transparent.png')
            card.setAttribute('data-id', i)
            //card.addEventListener('click', flipcard)
            grid.appendChild(card)
        }
    }
    createBoard()





































































})