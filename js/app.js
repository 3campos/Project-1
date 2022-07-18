//green-felt poker table background
document.body.style.backgroundImage = "url('./images/green-felt-background-texture-poker-casino-table.jpeg')";
document.body.style.backgroundSize = 'cover';
document.body.style.backgroundRepeat = 'no-repeat';
const getGameplayContainer = document.querySelector('.masterGameplayContainer')
getGameplayContainer.style.visibility = 'hidden';

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

let dealDealersCard1;
let dealDealersCard2;
let extract1stDealersCard;
let extract2ndDealersCard;

let dealPlayersCard1;
let dealPlayersCard2;
let extract1stPlayersCard;
let extract2ndPlayersCard;

//FOR OFFICE HOURS
function dealInitialCards (arr) {
    dealDealersCard1 = arr[Math.floor(Math.random() * arr.length)]
    //getting a random card for first dealt card using math floor and random methods. this random card is being stored into my above variable.
    extract1stDealersCard = tableDeck.deck.indexOf(dealDealersCard1)

    tableDeck.deck.splice(extract1stDealersCard, 1)
    //this card that was extracted is being deleted. 
        //THIS IS THE PART THAT I'M STUCK ON. THE DELETE OPERATOR IS NOT DELETING MY VARIABLE'S STORED VALUE THAT I GAVE TO IT ON LINE 33. Instead it's displaying "false" in the console. Why is it not deleting? Try a different approach.
        //should i be using slice instead? no, try splice because slice will produce a new array. Splice will directly modify the original array.

    //find the index of the card that was randomly chosen; try indexof
        //then save this value to a variable
        //tabledeck.deck.splice(, 1) --this will just remove the one card from the index

    // delete tableDeck.deck[[Math.floor(Math.random() * arr.length)]]
    //deleting a random card using the delete operator
    

    dealDealersCard2 = arr[Math.floor(Math.random() * arr.length)]
    //getting a random card for first dealt card using math floor and random methods. this random card is being stored into my above variable.
    extract2ndDealersCard = tableDeck.deck.indexOf(dealDealersCard1)

    tableDeck.deck.splice(extract2ndDealersCard, 1)

    dealPlayersCard1 = arr[Math.floor(Math.random() * arr.length)]
    //getting a random card for first dealt card using math floor and random methods. this random card is being stored into my above variable.
    extract1stPlayersCard = tableDeck.deck.indexOf(dealPlayersCard1)

    tableDeck.deck.splice(extract1stPlayersCard, 1)

    dealPlayersCard2 = arr[Math.floor(Math.random() * arr.length)]
    //getting a random card for first dealt card using math floor and random methods. this random card is being stored into my above variable.
    extract2ndPlayersCard = tableDeck.deck.indexOf(dealPlayersCard2)

    tableDeck.deck.splice(extract2ndPlayersCard, 1)

    // dealDealersCard2 = arr[Math.floor(Math.random() * arr.length)]
    // //getting a random card for second dealt card using math floor and random methods
    // delete dealDealersCard2

    // //delete tableDeck.deck[[Math.floor(Math.random() * arr.length)]]
    // //deleting a random card using the delete operator
    // console.log('tableDeck after deal2 console.log', tableDeck.deck)
    
    // console.log('dealers1&2', dealDealersCard1, dealDealersCard2)
    // //test to deal dealer's 1st and 2nd card

    // console.log('afterdealersdeal', tableDeck.deck)
    // //test to see the deck result after deal.

    // return dealDealersCard1, dealDealersCard2
    return tableDeck.deck
}

console.log('dealInitialCards', dealInitialCards(tableDeck.deck))



//https://www.w3docs.com/snippets/javascript/how-to-remove-an-element-from-an-array-in-javascript.html
//I used the delete operator in order to not duplicate the dealing of a card.

//for resetting
    //how can i recreate my deck
    //think about changing all variables back to 0; and all of teh innerhtml's and innertext to blanks.

//order to deal to dealer
//1st card face up
//2nd card to the hole



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
    getGameplayContainer.style.visibility = 'visible';
    //EXTRA if time allows, add an animation (maybe using keyframes) to fade in the gameplay container.
})

document.getElementById('restartButton').addEventListener('click', () => {
        //i tried using my button here to reset the start button's effect.
    document.getElementById('startButton').reset();
        //this is the reset method targeting the start button.
})

//I realized about after spending 30 minutes on this that the reset method only works on forms. Is there a different type of reset function or method that I should use?

//NOTES;
//https://www.w3schools.com/jsref/met_form_reset.asp
//Per w3schools, "The reset() method resets the values of all elements in a form (same as clicking the Reset button)."
//document.getElementById("elementID").reset();