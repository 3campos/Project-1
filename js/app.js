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


for (let i = 0; i < tableDeck.deck.length; i++){
    if (tableDeck.deck[i].startsWith('A')){
    //console.log(i=1); THIS ALMOST MADE CHROME EXPLODE.
    //console.log([i]=1); //ERROR: ILLEGAL RETURN STATEMENT
    }
}

//try storing all 3 in an object, 

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

let hitClickCount = 0;
let dealPlayersCard3;
let dealPlayersCard4;
let dealPlayersCard5;
let extract3rdPlayersCard;
let extract4thPlayersCard;
let extract5thPlayersCard;

function dealHitCards (arr) {
    //PSEUDOCODE: this function is dealing my cards to the player based on the number of times they click the 'hit' button to request another card.
    hitClickCount += 1
        //this line adds 1 to the hit count variable.

        //below are if functions for the number of hit count clicks. 
            //1. each if function executes a deal function, dealing a card to the player. 
            //2. That dealt card id extracted from the original array so that it cannot be re-dealt.
            //3. The deck (i.e., an array) is returned with the missing cards so that none of hte dealt cards are re-dealt.
    if(hitClickCount === 1){
        dealPlayersCard3 = arr[Math.floor(Math.random() * tableDeck.deck.length)]
        extract3rdPlayersCard = arr.indexOf(dealPlayersCard3)
        tableDeck.deck.splice(extract3rdPlayersCard, 1)
        return tableDeck.deck
        //QUESTION 1: is the above returning to the system as well as logging to the console? Just curious about whether it's doing both. I researched this but only found stack overflow articles.
            //answer: delete them. console logs should be removed by final product.
        //codecademy definition: console log = print to the console
            //return - is a call to pass some value back up to where the call was made.

    }
    else if(hitClickCount === 2){
        dealPlayersCard4 = arr[Math.floor(Math.random() * tableDeck.deck.length)]
        extract4thPlayersCard = arr.indexOf(dealPlayersCard4)
        tableDeck.deck.splice(extract4thPlayersCard, 1)
        return tableDeck.deck
    }
    else if(hitClickCount === 3){
        dealPlayersCard5 = arr[Math.floor(Math.random() * tableDeck.deck.length)]
        extract5thPlayersCard = arr.indexOf(dealPlayersCard5)
        tableDeck.deck.splice(extract5thPlayersCard, 1)
        return tableDeck.deck    
    }//QUESTION 2: By doing a return statement on any of the above if and else if functions, the system will: (1) make the hitClickCount variable increase by 1 permanently and (2) exit the function and go to the return statement with the string 'hitcount' below, right?    
}

//PLAN: Need to invoke a function here that assigns 21 to the players' hand. I can use the p assignment: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
            //step 1: add numerical values to each card in an array above for each card.
            //step 2: sum up those values to the playersHand variable. 
                //When player hits 3 on the hit click count OR the values equal 21, then grant the player a 'blackjack'.


/* (this is the full array of cards that I can use, per my console log on line 27, that I can use for destructuring).

//ARRAYS

MDN DOCS EXAMPLE: 

let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: Array [30,40,50]

MY WORK:
ORIGINAL ARRAY: 
['Ace of Hearts', '2 of Hearts', '3 of Hearts', '4 of Hearts', '5 of Hearts', '6 of Hearts', '7 of Hearts', '8 of Hearts', '9 of Hearts', '10 of Hearts', 'Jack of Hearts', 'Queen of Hearts', 'King of Hearts', 'Ace of Spades', '2 of Spades', '3 of Spades', '4 of Spades', '5 of Spades', '6 of Spades', '7 of Spades', '8 of Spades', '9 of Spades', '10 of Spades', 'Jack of Spades', 'Queen of Spades', 'King of Spades', 'Ace of Clubs', '2 of Clubs', '3 of Clubs', '4 of Clubs', '5 of Clubs', '6 of Clubs', '7 of Clubs', '8 of Clubs', '9 of Clubs', '10 of Clubs', 'Jack of Clubs', 'Queen of Clubs', 'King of Clubs', 'Ace of Diamonds', '2 of Diamonds', '3 of Diamonds', '4 of Diamonds', '5 of Diamonds', '6 of Diamonds', '7 of Diamonds', '8 of Diamonds', '9 of Diamonds', '10 of Diamonds', 'Jack of Diamonds', 'Queen of Diamonds', 'King of Diamonds']

[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ]

(52) 
//HEARTS


for (let i = 0; i < tableDeck.deck.length; i++){
    if (tableDeck.deck[i].startsWith('A')){
  console.log('FOUND ACE')
}

LINE 1
['Ace of Hearts', '2 of Hearts', '3 of Hearts', '4 of Hearts', '5 of Hearts', 

let 

LINE2
'6 of Hearts', '7 of Hearts', '8 of Hearts', '9 of Hearts', '10 of Hearts', 'Jack of Hearts', 

LINE3
'Queen of Hearts', 'King of Hearts', 

//SPADES
LINE 1
'Ace of Spades', '2 of Spades', '3 of Spades', '4 of Spades', '5 of Spades', '6 of Spades', 

LINE 2
'7 of Spades', '8 of Spades', '9 of Spades', '10 of Spades', 'Jack of Spades',

LINE 3
'Queen of Spades', 'King of Spades', 

CLUBS
LINE 1
'Ace of Clubs', '2 of Clubs', '3 of Clubs', '4 of Clubs', 

LINE 2
'5 of Clubs', '6 of Clubs', '7 of Clubs', '8 of Clubs', '9 of Clubs', '10 of Clubs', 

LINE 3
'Jack of Clubs', 'Queen of Clubs', 'King of Clubs', 

DIAMONDS
LINE 1
'Ace of Diamonds', '2 of Diamonds', '3 of Diamonds', '4 of Diamonds', '5 of Diamonds', 
LINE 2
'6 of Diamonds', '7 of Diamonds', '8 of Diamonds', '9 of Diamonds', '10 of Diamonds', 

LINE 3
'Jack of Diamonds', 'Queen of Diamonds', 'King of Diamonds']

*/



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

document.getElementById('hit').addEventListener('click', () => {dealHitCards(tableDeck.deck)})

//I realized about after spending 30 minutes on this that the reset method only works on forms. Is there a different type of reset function or method that I should use?

//NOTES;
//https://www.w3schools.com/jsref/met_form_reset.asp
//Per w3schools, "The reset() method resets the values of all elements in a form (same as clicking the Reset button)."
//document.getElementById("elementID").reset();