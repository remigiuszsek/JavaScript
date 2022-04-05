const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    },
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    }
]



let gridDisplay = document.querySelector('#grid');
let resultDisplay = document.querySelector('#result')
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = []
let check = true
function createBoard() {
    for(let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card);
    }
    check = false
}

function checkMatch() {
    const cards = document.querySelectorAll('#grid img');
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    console.log(cards);
    console.log('check for match!');
    if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('You have clicked the same image!')
        cardsChosen[1] = 'other'
        console.log('sprawdz: '+cardsChosen[1])
    }

    if(cardsChosen[0] == cardsChosen[1]) {
        alert('You found a match!');
        cards[cardsChosenIds[0]].setAttribute('src', 'images/white.png');
        cards[cardsChosenIds[1]].setAttribute('src', 'images/white.png');
        cards[cardsChosenIds[0]].removeEventListener('click', flipCard);
        cards[cardsChosenIds[1]].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('Sorry try again!')
    }
    resultDisplay.textContent = cardsWon.length
    cardsChosen = []
    cardsChosenIds= []

    if (cardsWon.length == cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations you found them all!'
        
    }
}

function flipCard() {
    // if(allowed) {
        console.log(cardArray);
        const cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenIds.push(cardId);
        console.log(cardsChosen);
        console.log(cardsChosenIds);
        console.log('clicked', cardId);
        console.log(cardsChosen);
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkMatch, 500)
        }
    // } else {
    //     alert('Kliknij przycisk "Start", aby rozpocząć grę!')
    // }
    
}

//poza konkursem
let allowed = false
const gameButton = document.createElement('button')
const secondh3 = document.getElementById('time')
secondh3.appendChild(document.createElement('br'))
secondh3.appendChild(gameButton)
gameButton.textContent = 'Start'
let elo = ''
gameButton.addEventListener('click', () => {
    timeArea.textContent = '0 s'
    let gameTime = 0

    allowed = true
    
    clearInterval(elo)
    elo = setInterval(() => {
        gameTime += 1
        
        if(gameTime<60) {
            if (cardsWon.length == cardArray.length/2) {
                clearInterval(elo)
                gameTime-=1
                timeArea.textContent = gameTime + ' s'
            } else {
                timeArea.textContent = gameTime + ' s'
            }
        } else {
            if (cardsWon.length == cardArray.length/2) {
                clearInterval(elo)
                gameTime-=1
                timeArea.textContent = Math.floor(gameTime/60) + ' min ' + gameTime%60 + ' s'
            } else {
                timeArea.textContent = Math.floor(gameTime/60) + ' min ' + gameTime%60 + ' s'
            }
            
        }
    }, 1000)

    cardArray.sort(() => 0.5 - Math.random()) 
    
    replaceCards()
})

function replaceCards() {
    if(check) {
        createBoard()
    } else {
        resultDisplay.innerHTML = 0
        gridDisplay.innerHTML = ''
        
        createBoard()
        //kod bez ten sam z create board tylko bez niektórych linijek może albo po prostu jeszcze lepiej zrobić, żeby to wszystko się jakoś usunęło i normalnie wtedy createBoard() w tym elseie tutaj
    }
}

const timeArea = document.getElementById('time-area')

//DONE - kiedy wszystkie kafelki zostaną odkryte i uzytkownik uzyska 6 punktów czas się zatrzymuje i pojawia się wynik w alercie albo na stronie po prostu

//DONE - dopóki użytkownik nie kliknie w mierzenie czasu, nie można zacząć gry
//  DONE - jeżeli klika bez kliknięcia w mierzenie czasu jest alert, kliknij w guzik zanim zaczniesz
//  DONE - albo w ogóle nic nie ma prawie poza guzikiem i dopiero wtedy jak kliknie to pojawiają się kafelki

//DONE - Kiedy użytkownik kliknie w trakcie gry ponownie w przycisk start wszystkie kafelki losują się na nową i stają się zakryte

//DONE - spoprawić błąd, że jak użytkownik klika w ten sam obrazek dwa razy to zamienia się spowrotem na blank

//pisać samemu z pamięci ten kod jako zadanie ćwiczenie czy coś?


























