//green-felt poker table background
document.body.style.backgroundImage = "url('./images/green-felt-background-texture-poker-casino-table.jpeg')";
document.body.style.backgroundSize = 'cover';
document.body.style.backgroundRepeat = 'no-repeat';
let hideGameplayContainer = document.querySelector('.masterGameplayContainer')
hideGameplayContainer.style.visibility = 'hidden';

//CLASSES: deck, player, dealer, table (includes pot)
class MainDeck {
    constructor(deck, suits, cards){
        this.deck = []
        this.suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds']
        this.cards = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King']
    for (let suit in this.suits){
        //this for in loop uses a suit variable (declared with let) representing the iteration through the suits array.
        for (let card in this.cards){
        //this for in loop uses a card variable (declared with let) representing the iteration through the cards array.
        //when both for in loops are run, the returned results will be each all cards specified above for each suit. So, in total, there are 52 suits.
        (this.deck.push(`${this.cards[card]} of ${this.suits[suit]}`))
        //I am pushing the results of the two for in loops into the deck array that i created above. The 'suit' and the 'card' variables represent the iterators for the suits and cards arrays, respectively.
            }
        }
}
}

const tableDeck = new MainDeck()
console.log('tableDeck console.log', tableDeck.deck)

//the below is a test to access specific card in array console.log(tableDeck.deck[3]). The result is 4 of hearts.
//console.log(tableDeck.deck[3])

// const playerName = prompt("Enter Your Name")
//CONSOLE.LOGGING THIS OUT FOR NOW TO PREVENT HINDERANCES TO GIT ADDING/COMMITTING
console.log('remember to turn prompt back on')

// const playerName = 'Bond ... James Bond';
class Player {
    constructor(name, playerHand, playerMoney){
        this.name = name
        this.playerHand = playerHand
        this.playerMoney = playerMoney
    }
    promptForPlayerName(){
        // if (playerName != null) {
        // // document.getElementById('namePlayer').innerText = `${playerName}`
        //     }
        console.log('COMPLETE promptForPlayerName')}
    playerHit(){
        console.log('COMPLETE playerHit')
    }
    playerBetAmount(){
        console.log('COMPLETE playerBetAmount')
    }
    playerMoneyMethod(){
        console.log('COMPLETE playerMoneyMethod')
    }
}

const User = new Player('fill in with playerName variable', 'placeHolder for Hand', 'placeHolder for playerMoney')

User.promptForPlayerName()
User.playerHit()
User.playerBetAmount()
User.playerMoneyMethod()

class Dealer {
    constructor(name){
        this.name = name
    }
}

const mrHouse = new Dealer('Mr. House')

class Table {
    constructor(pot){
        this.pot = pot
    }
    createPot(){
        console.log('COMPLETE createPot')
        //this method should call upon the function User.playerBetAmount because that is what will create the pot. Maybe I can just assign createPot() to this.pot.
    }
}

const BlackjackTable = new Table('should call upon createPot method result')

//buttons

document.getElementById('startButton').addEventListener('click', () => {
    let = getGameplayContainer = document.querySelector('.masterGameplayContainer')
    getGameplayContainer.style.visibility = 'visible';
})

document.getElementById('restartButton')