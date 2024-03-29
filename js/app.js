//green-felt poker table background
document.body.style.backgroundImage = "url('./images/green-felt-background-texture-poker-casino-table.jpeg')";
document.body.style.backgroundSize = 'cover';
document.body.style.backgroundRepeat = 'no-repeat';
const getGameplayContainer = document.querySelector('.masterGameplayContainer')
getGameplayContainer.style.visibility = 'hidden';

function enableAgainAllButtons(){
    document.getElementById('hit').style.pointerEvents = 'auto';
    document.getElementById('stay').style.pointerEvents = 'auto';
    document.getElementById('toBetAmount').style.pointerEvents = 'auto';
    document.getElementById('bankroll').style.pointerEvents = 'auto';
    document.getElementById('startButton').style.pointerEvents = 'auto';
    document.getElementById('restartButton').style.pointerEvents = 'auto';
}

//CLASSES: deck, player, dealer, table (includes pot)
class MainDeck {
    constructor(deck, suits, cards){
        this.deck = []
        this.suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds']
        this.cards = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King']
        this.cardImages = []
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

//2 options:
//have 52 images of 52 cards

//MASTER PLAN EXCERPT
    //1.have an array of objects that holds the images for the suits.
        //e.g. object: name of card: image path;
        //should I use images or emojis for the cards? Emoji examples are below.
            //🂡 🂴
                //even if i use emojis, an object is probably still best, correct?
            //look into switch cases as a last resort


const tableDeck = new MainDeck()
console.log('tableDeck console.log', tableDeck.deck)

tableDeck.deck
const heartsStrings = ['Ace of Hearts', '2 of Hearts', '3 of Hearts', '4 of Hearts', '5 of Hearts', '6 of Hearts', '7 of Hearts', '8 of Hearts', '9 of Hearts', '10 of Hearts', 'Jack of Hearts', 'Queen of Hearts', 'King of Hearts']
const spadesStrings = ['Ace of Spades', '2 of Spades', '3 of Spades', '4 of Spades', '5 of Spades', '6 of Spades', '7 of Spades', '8 of Spades', '9 of Spades', '10 of Spades', 'Jack of Spades', 'Queen of Spades', 'King of Spades']
const clubsStrings = ['Ace of Clubs', '2 of Clubs', '3 of Clubs', '4 of Clubs', '5 of Clubs', '6 of Clubs', '7 of Clubs', '8 of Clubs', '9 of Clubs', '10 of Clubs', 'Jack of Clubs', 'Queen of Clubs', 'King of Clubs']
const diamondsStrings = ['Ace of Diamonds', '2 of Diamonds', '3 of Diamonds', '4 of Diamonds', '5 of Diamonds', '6 of Diamonds', '7 of Diamonds', '8 of Diamonds', '9 of Diamonds', '10 of Diamonds', 'Jack of Diamonds', 'Queen of Diamonds', 'King of Diamonds']

// const aces = 1
// const twos = 2
// const threes = 3
// const fours = 4
// const fives = 5
// const sixes = 6
// const sevens = 7
// const eights = 8
// const nines = 9
// const tens = 10
// const jacks = 10
// const queens = 10
// const kings = 10

//LIBRARY OF VARIABLES

const allCardValues = ['Ace', '2', "3", "4", "5", "6", "7", "8", "9", "10", 'Jack', 'Queen', 'King']
// const allSuits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'] // this didn't work.

//DEALER CARD STYLE (grouped by card number)

let dealerCard1Style = document.getElementById('dealerCard1').style
let dealerCard1TopNumber = document.getElementById('dealers1stCardTLN')
let dealerCard1Suit = document.getElementById('dealers1stCardSuit')
let dealerCard1BottomNumber = document.getElementById('dealers1stCardBRN')

let dealerCard2Style = document.getElementById('dealerCard2').style
let dealerCard2TopNumber = document.getElementById('dealers2ndCardTLN')
let dealerCard2Suit = document.getElementById('dealers2ndCardSuit')
let dealerCard2BottomNumber = document.getElementById('dealers2ndCardBRN')

let dealerCard3Style = document.getElementById('dealerCard3').style
let dealerCard3TopNumber = document.getElementById('dealers3rdCardTLN')
let dealerCard3Suit = document.getElementById('dealers3rdCardSuit')
let dealerCard3BottomNumber = document.getElementById('dealers3rdCardBRN')


let dealerCard4Style = document.getElementById('dealerCard4').style
let dealerCard4TopNumber = document.getElementById('dealers4thCardTLN')
let dealerCard4Suit = document.getElementById('dealers4thCardSuit')
let dealerCard4BottomNumber = document.getElementById('dealers4thCardBRN')


let dealerCard5Style = document.getElementById('dealerCard5').style
let dealerCard5TopNumber = document.getElementById('dealers5thCardTLN')
let dealerCard5Suit = document.getElementById('dealers5thCardSuit')
let dealerCard5BottomNumber = document.getElementById('dealers5thCardBRN')

//PLAYER CARD STYLE (grouped by card number)
let playerCard1Style = document.getElementById('playerCard1').style
let playerCard1TopNumber = document.getElementById('players1stCardTLN')
let playerCard1Suit = document.getElementById('players1stCardSuit')
let playerCard1BottomNumber = document.getElementById('players1stCardBRN')

let playerCard2Style = document.getElementById('playerCard2').style
let playerCard2TopNumber = document.getElementById('players2ndCardTLN')
let playerCard2Suit = document.getElementById('players2ndCardSuit')
let playerCard2BottomNumber = document.getElementById('players2ndCardBRN')

let playerCard3Style = document.getElementById('playerCard3').style
let playerCard3TopNumber = document.getElementById('players3rdCardTLN')
let playerCard3Suit = document.getElementById('players3rdCardSuit')
let playerCard3BottomNumber = document.getElementById('players3rdCardBRN')

let playerCard4Style = document.getElementById('playerCard4').style
let playerCard4TopNumber = document.getElementById('players4thCardTLN')
let playerCard4Suit = document.getElementById('players4thCardSuit')
let playerCard4BottomNumber = document.getElementById('players4thCardBRN')

let playerCard5Style = document.getElementById('playerCard5').style
let playerCard5TopNumber = document.getElementById('players5thCardTLN')
let playerCard5Suit = document.getElementById('players5thCardSuit')
let playerCard5BottomNumber = document.getElementById('players5thCardBRN')

//match function to search deck-array strings

let match;
let matchSuits;

//dealing functions to dealer
let dealDealersCard1;
let dealDealersCard2;
let extract1stDealersCard;
let extract2ndDealersCard;

let dealDealersCard3;
let dealDealersCard4;
let dealDealersCard5;
let extract3rdDealersCard;
let extract4thDealersCard;
let extract5thDealersCard;

//dealing functions to player
let dealPlayersCard1;
let dealPlayersCard2;
let extract1stPlayersCard;
let extract2ndPlayersCard;

let dealPlayersCard3;
let dealPlayersCard4;
let dealPlayersCard5;
let extract3rdPlayersCard;
let extract4thPlayersCard;
let extract5thPlayersCard;

let betPrompt;
//END OF LIBRARY

class Player {
    constructor(name, playerHand, playerBet, playerMoney){
        this.name = name
        this.playerHand = playerHand
        this.playerBet = playerBet
        this.playerMoney = playerMoney
    }
    playerBetAction(){    
        betPrompt = prompt ('Enter a Bet Amount. A $5 minimum is required: $')
        //need to parseint the  prompt

        // if (betPrompt >= 5) {
        // document.getElementById('toBetAmount').innerText = `Bet Amount: $${betPrompt}`
        // } 
        while (betPrompt < 5) {
            alert('Please bet at least $5.')
            betPrompt = prompt ('Enter a Bet Amount. A $5 minimum is required per turn. $')
        }
        if (betPrompt >= 5){
            document.getElementById('toBetAmount').innerText = `Bet: $${betPrompt}`
            }   
            // document.getElementById('toBetAmount').innerText = parseInt(`Bet: $${betPrompt}`)
        }
    }


const user = new Player('', 0, 0, 100)

let getPot = document.getElementById('tablePot');
let getBetAmount = document.getElementById('toBetAmount');
let getBankroll = document.getElementById('bankroll');

function playerMoneyMethod(){
    user.playerBet.innerText = parseInt(`${betPrompt}`)
    user.playerBet = parseInt(`${betPrompt}`)
    // console.log(user.playerBet, user.playerMoney)
    getBankroll.innerText = `Bankroll = $${user.playerMoney -= user.playerBet}`
    getBetAmount.innerText = `Bet = $${user.playerBet}`
    getPot.innerText = `$${user.playerBet}`
    //one issue: may need to parseint fof playerbet
}




class Dealer {
    constructor(name, dealerHand){
        this.name = name
        this.dealerHand = dealerHand
    }
}

const mrHouse = new Dealer('Mr. House', 0)

// class Table {
//     constructor(pot){
//         this.pot = pot
//     }
//     addBetToPot(){
//         document.getElementById('tablePot').innerText = 
    
//     }
// }

// const BlackjackTable = new Table(`${0}`)

//MASTER PLAN
    //1. assign values to cards when they're dealt= DONE!
        //a. use if/else if statements, e.g., if card contains 2, the value is 2. = DONE!
        //b. to get image, use a similar approach for the suits' images.
    //2. have an array of objects that holds the images for the suits.
        //e.g. object: name of card: image path;
        //should I use images or emojis for the cards? Emoji examples are below.
            //🂡 🂴
                //even if i use emojis, an object is probably still best, correct?
            //look into switch cases as a last resort

//EXAMPLE OF INDEXOF STRUCTURE: https://www.techonthenet.com/js/string_indexof.php
        // var totn_string = 'TechOnTheNet';
        // console.log(totn_string.indexOf('The'));

//disable everything
function disableAllButtons(){
    document.getElementById('hit').style.pointerEvents = 'none';
    document.getElementById('stay').style.pointerEvents = 'none';
    document.getElementById('toBetAmount').style.pointerEvents = 'none';
    document.getElementById('bankroll').style.pointerEvents = 'none';
    document.getElementById('startButton').style.pointerEvents = 'none';
}

//Win tracking global functions

let winner = 'TBD';

let hitClickCount = 0;

function playerBlackjack(playersClicks){
        if(user.playerHand===21){
            setTimeout(function(){alert('Player has a blackjack! Player wins the round!'); }, 100) 
            disableAllButtons()
            document.getElementById('dealers1stCardTLN').style.visibility = "visible"
            document.getElementById('dealers1stCardSuit').style.visibility = "visible"
            document.getElementById('dealers1stCardBRN').style.visibility = "visible"
            getPot.innerText = `$${0}`
            getBetAmount.innerText = `$${0}`
            getBankroll.innerText = `Bankroll = $${user.playerMoney += user.playerBet += user.playerBet}`
            if (user.playerMoney <= 0){
                setTimeout(function(){alert('Player loses the game. Click Ok to try again.');}, 250)
                setTimeout(function(){window.location.reload(); }, 2000)
            } else if (user.playerMoney >= 150){
                setTimeout(function(){alert('Player wins the game! Click Ok to play again.');}, 250)
                setTimeout(function(){window.location.reload(); }, 2000)
            }
        } else if (user.playerHand<=21 && playersClicks === 3){
            setTimeout(function(){alert('Player has a blackjack! Player wins the round!'); }, 100)
            disableAllButtons()
            document.getElementById('dealers1stCardTLN').style.visibility = "visible"
            document.getElementById('dealers1stCardSuit').style.visibility = "visible"
            document.getElementById('dealers1stCardBRN').style.visibility = "visible"
            getPot.innerText = `$${0}`
            getBetAmount.innerText = `$${0}`
            getBankroll.innerText = `Bankroll = $${user.playerMoney += user.playerBet += user.playerBet}`
            if (user.playerMoney <= 0){
                setTimeout(function(){alert('Player loses the game. Click Ok to try again.');}, 250)
                setTimeout(function(){window.location.reload(); }, 2000)
            } else if (user.playerMoney >= 150){
                setTimeout(function(){alert('Player wins the game! Click Ok to play again.');}, 250)
                setTimeout(function(){window.location.reload(); }, 2000)
            }
        } else if (user.playerHand > 21){
            setTimeout(function(){alert('Player busts! Dealer wins the round!'); }, 100)
            document.getElementById('dealers1stCardTLN').style.visibility = "visible"
            document.getElementById('dealers1stCardSuit').style.visibility = "visible"
            document.getElementById('dealers1stCardBRN').style.visibility = "visible"
            disableAllButtons()
            getPot.innerText = `$${0}`
            getBetAmount.innerText = `$${0}`
            if (user.playerMoney <= 0){
                setTimeout(function(){alert('Player loses the game. Click Ok to try again.');}, 250)
                setTimeout(function(){window.location.reload(); }, 2000)
            } else if (user.playerMoney >= 150){
                setTimeout(function(){alert('Player wins the game! Click Ok to play again.');}, 250)
                setTimeout(function(){window.location.reload(); }, 2000)
            }
        }
    }

let dealersHits = 0;

function dealerBlackjack(dealersHits){
    if(mrHouse.dealerHand===21){
        setTimeout(function(){alert('Dealer has a blackjack! Dealer wins the round!'); }, 100)
        winner = 'Dealer'
        disableAllButtons()
        document.getElementById('dealers1stCardTLN').style.visibility = "visible"
        document.getElementById('dealers1stCardSuit').style.visibility = "visible"
        document.getElementById('dealers1stCardBRN').style.visibility = "visible"
        getPot.innerText = `$${0}`
        getBetAmount.innerText = `$${0}`
        } else if (mrHouse.dealerHand<21 && dealersHits === 3){
        setTimeout(function(){alert('Dealer has a blackjack! Dealer wins the round!'); }, 100)
        winner = 'Dealer'
        disableAllButtons()
        document.getElementById('dealers1stCardTLN').style.visibility = "visible"
        document.getElementById('dealers1stCardSuit').style.visibility = "visible"
        document.getElementById('dealers1stCardBRN').style.visibility = "visible"
        getPot.innerText = `$${0}`
        getBetAmount.innerText = `$${0}`

    } else if (mrHouse.dealerHand > 21){
        setTimeout(function(){alert('Dealer busts! Player wins the round!'); }, 100)
        winner = 'Player'
        disableAllButtons()
        document.getElementById('dealers1stCardTLN').style.visibility = "visible"
        document.getElementById('dealers1stCardSuit').style.visibility = "visible"
        document.getElementById('dealers1stCardBRN').style.visibility = "visible"
        getPot.innerText = `$${0}`
        getBetAmount.innerText = `$${0}`
        getBankroll.innerText = `Bankroll = $${user.playerMoney += user.playerBet += user.playerBet}`
    }
    if (user.playerMoney <= 0){
        setTimeout(function(){alert('Player loses the game. Click Ok to try again.');}, 250)
        setTimeout(function(){window.location.reload(); }, 2000)
    } else if (user.playerMoney >= 150){
        setTimeout(function(){alert('Player wins the game! Click Ok to play again.');}, 250)
        setTimeout(function(){window.location.reload(); }, 2000)
    }
}


function compareHandsIfNoOneBusts(){
    if (winner === 'TBD'){
        if(mrHouse.dealerHand > user.playerHand){
            setTimeout(function(){alert('Dealer has a higher hand. Dealer wins the round!'); }, 100)
            disableAllButtons()
            document.getElementById('dealers1stCardTLN').style.visibility = "visible"
            document.getElementById('dealers1stCardSuit').style.visibility = "visible"
            document.getElementById('dealers1stCardBRN').style.visibility = "visible"
            getPot.innerText = `$${0}`
            getBetAmount.innerText = `$${0}`
        } else if(user.playerHand > mrHouse.dealerHand){
            setTimeout(function(){alert('Player has a higher hand. Player wins the round!'); }, 100)
            disableAllButtons()
            document.getElementById('dealers1stCardTLN').style.visibility = "visible"
            document.getElementById('dealers1stCardSuit').style.visibility = "visible"
            document.getElementById('dealers1stCardBRN').style.visibility = "visible"
            getPot.innerText = `$${0}`
            getBetAmount.innerText = `$${0}`
            getBankroll.innerText = `Bankroll = $${user.playerMoney += user.playerBet += user.playerBet}`
        } else { //for draws
            setTimeout(function(){alert('The Player and Dealer have the same value. Draw!'); }, 100)
            disableAllButtons()
            document.getElementById('dealers1stCardTLN').style.visibility = "visible"
            document.getElementById('dealers1stCardSuit').style.visibility = "visible"
            document.getElementById('dealers1stCardBRN').style.visibility = "visible"
            getPot.innerText = `$${0}`
            getBetAmount.innerText = `$${0}`
            getBankroll.innerText = `Bankroll = $${user.playerMoney += user.playerBet}`
            }
        if (user.playerMoney <= 0){
            setTimeout(function(){alert('Player loses the game. This page will refresh in 2 seconds');}, 250)
            setTimeout(function(){window.location.reload(); }, 2000)
        } else if (user.playerMoney >= 150){
            setTimeout(function(){alert('Player wins the game! This page will refresh in 2 seconds');}, 250)
            setTimeout(function(){window.location.reload(); }, 2000)
        }
    }
}

function dealInitialCards (arr) {

    dealPlayersCard1 = arr[Math.floor(Math.random() * arr.length)]
    //getting a random card for first dealt card using math floor and random methods. this random card is being stored into my above variable.
    extract1stPlayersCard = tableDeck.deck.indexOf(dealPlayersCard1)
     //getting the index of the card randomly dealt.
    tableDeck.deck.splice(extract1stPlayersCard, 1)
    //extracting the randomly dealt card from the array
    if (dealPlayersCard1.startsWith("A")){
        user.playerHand += 1
        playerCard1TopNumber.innerText = 'A'
        playerCard1BottomNumber.innerText = 'A'
        playerCard1Style.backgroundColor='white'

        if (dealPlayersCard1.includes('Clubs')){
            playerCard1Suit.innerText='♣️'
        }

        if (dealPlayersCard1.includes('Diamonds')){
            playerCard1Suit.innerText='♦️'
        } 

        if (dealPlayersCard1.includes('Hearts')){
            playerCard1Suit.innerText='♥️'
        } 

        if (dealPlayersCard1.includes('Spades')){
            playerCard1Suit.innerText='♠️'
        }
        } else if (dealPlayersCard1.startsWith("2")){
        user.playerHand += 2

        playerCard1TopNumber.innerText = '2'
        playerCard1BottomNumber.innerText = '2'
        playerCard1Style.backgroundColor='white'

        if (dealPlayersCard1.includes('Clubs')){
            playerCard1Suit.innerText='♣️'
        }

        if (dealPlayersCard1.includes('Diamonds')){
            playerCard1Suit.innerText='♦️'
        } 

        if (dealPlayersCard1.includes('Hearts')){
            playerCard1Suit.innerText='♥️'
        } 

        if (dealPlayersCard1.includes('Spades')){
            playerCard1Suit.innerText='♠️'
        } 
        //e.g. this could be in a function and then I could pass the card in as a parameter.
        //could change the number to a string (use parseint) and then pass that in as a parameter.
        } else if (dealPlayersCard1.startsWith("3")){
        user.playerHand +=3
        playerCard1TopNumber.innerText = '3'
        playerCard1BottomNumber.innerText = '3'
        playerCard1Style.backgroundColor='white'

        if (dealPlayersCard1.includes('Clubs')){
            playerCard1Suit.innerText='♣️'
        }

        if (dealPlayersCard1.includes('Diamonds')){
            playerCard1Suit.innerText='♦️'
        } 

        if (dealPlayersCard1.includes('Hearts')){
            playerCard1Suit.innerText='♥️'
        } 

        if (dealPlayersCard1.includes('Spades')){
            playerCard1Suit.innerText='♠️'
        }

        } else if (dealPlayersCard1.startsWith("4")){
        user.playerHand += 4

        playerCard1TopNumber.innerText = '4'
        playerCard1BottomNumber.innerText = '4'
        playerCard1Style.backgroundColor='white'

        if (dealPlayersCard1.includes('Clubs')){
            playerCard1Suit.innerText='♣️'
        }

        if (dealPlayersCard1.includes('Diamonds')){
            playerCard1Suit.innerText='♦️'
        } 

        if (dealPlayersCard1.includes('Hearts')){
            playerCard1Suit.innerText='♥️'
        } 

        if (dealPlayersCard1.includes('Spades')){
            playerCard1Suit.innerText='♠️'
        }

        } else if (dealPlayersCard1.startsWith("5")){
        user.playerHand += 5
        playerCard1TopNumber.innerText = '5'
        playerCard1BottomNumber.innerText = '5'
        playerCard1Style.backgroundColor='white'

        if (dealPlayersCard1.includes('Clubs')){
            playerCard1Suit.innerText='♣️'
        }

        if (dealPlayersCard1.includes('Diamonds')){
            playerCard1Suit.innerText='♦️'
        } 

        if (dealPlayersCard1.includes('Hearts')){
            playerCard1Suit.innerText='♥️'
        } 

        if (dealPlayersCard1.includes('Spades')){
            playerCard1Suit.innerText='♠️'
        }
        } else if (dealPlayersCard1.startsWith("6")){
        user.playerHand += 6
        playerCard1TopNumber.innerText = '6'
        playerCard1BottomNumber.innerText = '6'
        playerCard1Style.backgroundColor='white'

        if (dealPlayersCard1.includes('Clubs')){
            playerCard1Suit.innerText='♣️'
        }

        if (dealPlayersCard1.includes('Diamonds')){
            playerCard1Suit.innerText='♦️'
        } 

        if (dealPlayersCard1.includes('Hearts')){
            playerCard1Suit.innerText='♥️'
        } 

        if (dealPlayersCard1.includes('Spades')){
            playerCard1Suit.innerText='♠️'
        }
        } else if (dealPlayersCard1.startsWith("7")){
        user.playerHand += 7
        playerCard1TopNumber.innerText = '7'
        playerCard1BottomNumber.innerText = '7'
        playerCard1Style.backgroundColor='white'

        if (dealPlayersCard1.includes('Clubs')){
            playerCard1Suit.innerText='♣️'
        }

        if (dealPlayersCard1.includes('Diamonds')){
            playerCard1Suit.innerText='♦️'
        } 

        if (dealPlayersCard1.includes('Hearts')){
            playerCard1Suit.innerText='♥️'
        } 

        if (dealPlayersCard1.includes('Spades')){
            playerCard1Suit.innerText='♠️'
        }
        } else if (dealPlayersCard1.startsWith("8")){
        user.playerHand += 8
        playerCard1TopNumber.innerText = '8'
        playerCard1BottomNumber.innerText = '8'
        playerCard1Style.backgroundColor='white'

        if (dealPlayersCard1.includes('Clubs')){
            playerCard1Suit.innerText='♣️'
        }

        if (dealPlayersCard1.includes('Diamonds')){
            playerCard1Suit.innerText='♦️'
        } 

        if (dealPlayersCard1.includes('Hearts')){
            playerCard1Suit.innerText='♥️'
        } 

        if (dealPlayersCard1.includes('Spades')){
            playerCard1Suit.innerText='♠️'
        }
        } else if (dealPlayersCard1.startsWith("9")){
        user.playerHand += 9
        playerCard1TopNumber.innerText = '9'
        playerCard1BottomNumber.innerText = '9'
        playerCard1Style.backgroundColor='white'

        if (dealPlayersCard1.includes('Clubs')){
            playerCard1Suit.innerText='♣️'
        }

        if (dealPlayersCard1.includes('Diamonds')){
            playerCard1Suit.innerText='♦️'
        } 

        if (dealPlayersCard1.includes('Hearts')){
            playerCard1Suit.innerText='♥️'
        } 

        if (dealPlayersCard1.includes('Spades')){
            playerCard1Suit.innerText='♠️'
        }
        } else if (dealPlayersCard1.startsWith("10")){
        user.playerHand += 10
        playerCard1TopNumber.innerText = '10'
        playerCard1BottomNumber.innerText = '10'
        playerCard1Style.backgroundColor='white'

        if (dealPlayersCard1.includes('Clubs')){
            playerCard1Suit.innerText='♣️'
        }

        if (dealPlayersCard1.includes('Diamonds')){
            playerCard1Suit.innerText='♦️'
        } 

        if (dealPlayersCard1.includes('Hearts')){
            playerCard1Suit.innerText='♥️'
        } 

        if (dealPlayersCard1.includes('Spades')){
            playerCard1Suit.innerText='♠️'
        }
        } else if (dealPlayersCard1.startsWith("Jack")){
            user.playerHand += 10
            playerCard1TopNumber.innerText = 'J'
        playerCard1BottomNumber.innerText = 'J'
        playerCard1Style.backgroundColor='white'

        if (dealPlayersCard1.includes('Clubs')){
            playerCard1Suit.innerText='♣️'
        }

        if (dealPlayersCard1.includes('Diamonds')){
            playerCard1Suit.innerText='♦️'
        } 

        if (dealPlayersCard1.includes('Hearts')){
            playerCard1Suit.innerText='♥️'
        } 

        if (dealPlayersCard1.includes('Spades')){
            playerCard1Suit.innerText='♠️'
        }
        } else if (dealPlayersCard1.startsWith("Queen")){
            user.playerHand += 10
        playerCard1TopNumber.innerText = 'Q'
        playerCard1BottomNumber.innerText = 'Q'
        playerCard1Style.backgroundColor='white'

        if (dealPlayersCard1.includes('Clubs')){
            playerCard1Suit.innerText='♣️'
        }

        if (dealPlayersCard1.includes('Diamonds')){
            playerCard1Suit.innerText='♦️'
        } 

        if (dealPlayersCard1.includes('Hearts')){
            playerCard1Suit.innerText='♥️'
        } 

        if (dealPlayersCard1.includes('Spades')){
            playerCard1Suit.innerText='♠️'
        }
        } else if (dealPlayersCard1.startsWith("King")){
            user.playerHand += 10
            playerCard1TopNumber.innerText = 'K'
        playerCard1BottomNumber.innerText = 'K'
        playerCard1Style.backgroundColor='white'

        if (dealPlayersCard1.includes('Clubs')){
            playerCard1Suit.innerText='♣️'
        }

        if (dealPlayersCard1.includes('Diamonds')){
            playerCard1Suit.innerText='♦️'
        } 

        if (dealPlayersCard1.includes('Hearts')){
            playerCard1Suit.innerText='♥️'
        } 

        if (dealPlayersCard1.includes('Spades')){
            playerCard1Suit.innerText='♠️'
        }
        }

    dealPlayersCard2 = arr[Math.floor(Math.random() * arr.length)]
    //getting a random card for first dealt card using math floor and random methods. this random card is being stored into my above variable.
    extract2ndPlayersCard = tableDeck.deck.indexOf(dealPlayersCard2)
    //getting the index of the card randomly dealt.
    tableDeck.deck.splice(extract2ndPlayersCard, 1)
    //extracting the randomly dealt card from the array
    if (dealPlayersCard2.startsWith("A")){
        user.playerHand += 1
        playerCard2TopNumber.innerText = 'A'
        playerCard2BottomNumber.innerText = 'A'
        playerCard2Style.backgroundColor='white'

        if (dealPlayersCard2.includes('Clubs')){
            playerCard2Suit.innerText='♣️'
        }

        if (dealPlayersCard2.includes('Diamonds')){
            playerCard2Suit.innerText='♦️'
        } 

        if (dealPlayersCard2.includes('Hearts')){
            playerCard2Suit.innerText='♥️'
        } 

        if (dealPlayersCard2.includes('Spades')){
            playerCard2Suit.innerText='♠️'
        }
        } else if (dealPlayersCard2.startsWith("2")){
        user.playerHand += 2
        playerCard2TopNumber.innerText = '2'
        playerCard2BottomNumber.innerText = '2'
        playerCard2Style.backgroundColor='white'

        if (dealPlayersCard2.includes('Clubs')){
            playerCard2Suit.innerText='♣️'
        }

        if (dealPlayersCard2.includes('Diamonds')){
            playerCard2Suit.innerText='♦️'
        } 

        if (dealPlayersCard2.includes('Hearts')){
            playerCard2Suit.innerText='♥️'
        } 

        if (dealPlayersCard2.includes('Spades')){
            playerCard2Suit.innerText='♠️'
        }
        } else if (dealPlayersCard2.startsWith("3")){
        user.playerHand +=3
        playerCard2TopNumber.innerText = '3'
        playerCard2BottomNumber.innerText = '3'
        playerCard2Style.backgroundColor='white'

        if (dealPlayersCard2.includes('Clubs')){
            playerCard2Suit.innerText='♣️'
        }

        if (dealPlayersCard2.includes('Diamonds')){
            playerCard2Suit.innerText='♦️'
        } 

        if (dealPlayersCard2.includes('Hearts')){
            playerCard2Suit.innerText='♥️'
        } 

        if (dealPlayersCard2.includes('Spades')){
            playerCard2Suit.innerText='♠️'
        }
        } else if (dealPlayersCard2.startsWith("4")){
        user.playerHand += 4
        playerCard2TopNumber.innerText = '4'
        playerCard2BottomNumber.innerText = '4'
        playerCard2Style.backgroundColor='white'

        if (dealPlayersCard2.includes('Clubs')){
            playerCard2Suit.innerText='♣️'
        }

        if (dealPlayersCard2.includes('Diamonds')){
            playerCard2Suit.innerText='♦️'
        } 

        if (dealPlayersCard2.includes('Hearts')){
            playerCard2Suit.innerText='♥️'
        } 

        if (dealPlayersCard2.includes('Spades')){
            playerCard2Suit.innerText='♠️'
        }
        } else if (dealPlayersCard2.startsWith("5")){
        user.playerHand += 5
        playerCard2TopNumber.innerText = '5'
        playerCard2BottomNumber.innerText = '5'
        playerCard2Style.backgroundColor='white'

        if (dealPlayersCard2.includes('Clubs')){
            playerCard2Suit.innerText='♣️'
        }

        if (dealPlayersCard2.includes('Diamonds')){
            playerCard2Suit.innerText='♦️'
        } 

        if (dealPlayersCard2.includes('Hearts')){
            playerCard2Suit.innerText='♥️'
        } 

        if (dealPlayersCard2.includes('Spades')){
            playerCard2Suit.innerText='♠️'
        }
        } else if (dealPlayersCard2.startsWith("6")){
        user.playerHand += 6
        playerCard2TopNumber.innerText = '6'
        playerCard2BottomNumber.innerText = '6'
        playerCard2Style.backgroundColor='white'

        if (dealPlayersCard2.includes('Clubs')){
            playerCard2Suit.innerText='♣️'
        }

        if (dealPlayersCard2.includes('Diamonds')){
            playerCard2Suit.innerText='♦️'
        } 

        if (dealPlayersCard2.includes('Hearts')){
            playerCard2Suit.innerText='♥️'
        } 

        if (dealPlayersCard2.includes('Spades')){
            playerCard2Suit.innerText='♠️'
        }
        } else if (dealPlayersCard2.startsWith("7")){
        user.playerHand += 7
        playerCard2TopNumber.innerText = '7'
        playerCard2BottomNumber.innerText = '7'
        playerCard2Style.backgroundColor='white'

        if (dealPlayersCard2.includes('Clubs')){
            playerCard2Suit.innerText='♣️'
        }

        if (dealPlayersCard2.includes('Diamonds')){
            playerCard2Suit.innerText='♦️'
        } 

        if (dealPlayersCard2.includes('Hearts')){
            playerCard2Suit.innerText='♥️'
        } 

        if (dealPlayersCard2.includes('Spades')){
            playerCard2Suit.innerText='♠️'
        }
        } else if (dealPlayersCard2.startsWith("8")){
        user.playerHand += 8
        playerCard2TopNumber.innerText = '8'
        playerCard2BottomNumber.innerText = '8'
        playerCard2Style.backgroundColor='white'

        if (dealPlayersCard2.includes('Clubs')){
            playerCard2Suit.innerText='♣️'
        }

        if (dealPlayersCard2.includes('Diamonds')){
            playerCard2Suit.innerText='♦️'
        } 

        if (dealPlayersCard2.includes('Hearts')){
            playerCard2Suit.innerText='♥️'
        } 

        if (dealPlayersCard2.includes('Spades')){
            playerCard2Suit.innerText='♠️'
        }
        } else if (dealPlayersCard2.startsWith("9")){
        user.playerHand += 9
        playerCard2TopNumber.innerText = '9'
        playerCard2BottomNumber.innerText = '9'
        playerCard2Style.backgroundColor='white'

        if (dealPlayersCard2.includes('Clubs')){
            playerCard2Suit.innerText='♣️'
        }

        if (dealPlayersCard2.includes('Diamonds')){
            playerCard2Suit.innerText='♦️'
        } 

        if (dealPlayersCard2.includes('Hearts')){
            playerCard2Suit.innerText='♥️'
        } 

        if (dealPlayersCard2.includes('Spades')){
            playerCard2Suit.innerText='♠️'
        }
        } else if (dealPlayersCard2.startsWith("10")){   
            user.playerHand += 10
            playerCard2TopNumber.innerText = '10'
            playerCard2BottomNumber.innerText = '10'
            playerCard2Style.backgroundColor='white'
    
            if (dealPlayersCard2.includes('Clubs')){
                playerCard2Suit.innerText='♣️'
            }
    
            if (dealPlayersCard2.includes('Diamonds')){
                playerCard2Suit.innerText='♦️'
            } 
    
            if (dealPlayersCard2.includes('Hearts')){
                playerCard2Suit.innerText='♥️'
            } 
    
            if (dealPlayersCard2.includes('Spades')){
                playerCard2Suit.innerText='♠️'
            }
        } else if (dealPlayersCard2.startsWith("Jack")){
            user.playerHand += 10
        playerCard2TopNumber.innerText = 'J'
        playerCard2BottomNumber.innerText = 'J'
        playerCard2Style.backgroundColor='white'

        if (dealPlayersCard2.includes('Clubs')){
            playerCard2Suit.innerText='♣️'
        }

        if (dealPlayersCard2.includes('Diamonds')){
            playerCard2Suit.innerText='♦️'
        } 

        if (dealPlayersCard2.includes('Hearts')){
            playerCard2Suit.innerText='♥️'
        } 

        if (dealPlayersCard2.includes('Spades')){
            playerCard2Suit.innerText='♠️'
        }
        } else if (dealPlayersCard2.startsWith("Queen")){
        user.playerHand += 10
        playerCard2TopNumber.innerText = 'Q'
        playerCard2BottomNumber.innerText = 'Q'
        playerCard2Style.backgroundColor='white'

        if (dealPlayersCard2.includes('Clubs')){
            playerCard2Suit.innerText='♣️'
        }

        if (dealPlayersCard2.includes('Diamonds')){
            playerCard2Suit.innerText='♦️'
        } 

        if (dealPlayersCard2.includes('Hearts')){
            playerCard2Suit.innerText='♥️'
        } 

        if (dealPlayersCard2.includes('Spades')){
            playerCard2Suit.innerText='♠️'
        }
        } else if (dealPlayersCard2.startsWith("King")){
            user.playerHand += 10
            playerCard2TopNumber.innerText = 'K'
            playerCard2BottomNumber.innerText = 'K'
            playerCard2Style.backgroundColor='white'
    
            if (dealPlayersCard2.includes('Clubs')){
                playerCard2Suit.innerText='♣️'
            }
    
            if (dealPlayersCard2.includes('Diamonds')){
                playerCard2Suit.innerText='♦️'
            } 
    
            if (dealPlayersCard2.includes('Hearts')){
                playerCard2Suit.innerText='♥️'
            } 
    
            if (dealPlayersCard2.includes('Spades')){
                playerCard2Suit.innerText='♠️'
            }
        }
        
    document.getElementById('dealers1stCardTLN').style.visibility = "hidden"
    document.getElementById('dealers1stCardSuit').style.visibility = "hidden"
    document.getElementById('dealers1stCardBRN').style.visibility = "hidden"

    dealDealersCard1 = arr[Math.floor(Math.random() * arr.length)]
    //getting a random card for first dealt card using math floor and random methods. this random card is being stored into my above variable.
    extract1stDealersCard = tableDeck.deck.indexOf(dealDealersCard1)
    //getting the index of the card randomly dealt.
    tableDeck.deck.splice(extract1stDealersCard, 1)
    //extracting the randomly dealt card from the array
        if (dealDealersCard1.startsWith("A")){
        mrHouse.dealerHand += 1
        dealerCard1TopNumber.innerText = 'A'
        dealerCard1BottomNumber.innerText = 'A'   
        dealerCard1Style.backgroundColor='white'

            if (dealDealersCard1.includes('Clubs')){
                dealerCard1Suit.innerText='♣️'
            }

            if (dealDealersCard1.includes('Diamonds')){
            dealerCard1Suit.innerText='♦️'
            } 

            if (dealDealersCard1.includes('Hearts')){
                dealerCard1Suit.innerText='♥️'
            } 

            if (dealDealersCard1.includes('Spades')){
                dealerCard1Suit.innerText='♠️'
            }

        } else if (dealDealersCard1.startsWith("2")){
        mrHouse.dealerHand += 2

                dealerCard1TopNumber.innerText = '2'
                dealerCard1BottomNumber.innerText = '2'   
                dealerCard1Style.backgroundColor='white'

                if (dealDealersCard1.includes('Clubs')){
                    dealerCard1Suit.innerText='♣️'
                }
    
                if (dealDealersCard1.includes('Diamonds')){
                dealerCard1Suit.innerText='♦️'
                } 
    
                if (dealDealersCard1.includes('Hearts')){
                    dealerCard1Suit.innerText='♥️'
                } 
    
                if (dealDealersCard1.includes('Spades')){
                    dealerCard1Suit.innerText='♠️'
                }
        } else if (dealDealersCard1.startsWith("3")){
        mrHouse.dealerHand +=3
                dealerCard1TopNumber.innerText = '3'
                dealerCard1BottomNumber.innerText = '3'   
                dealerCard1Style.backgroundColor='white'

            if (dealDealersCard1.includes('Clubs')){
                dealerCard1Suit.innerText='♣️'
            }

            if (dealDealersCard1.includes('Diamonds')){
            dealerCard1Suit.innerText='♦️'
            } 

            if (dealDealersCard1.includes('Hearts')){
                dealerCard1Suit.innerText='♥️'
            } 

            if (dealDealersCard1.includes('Spades')){
                dealerCard1Suit.innerText='♠️'
            }

        } else if (dealDealersCard1.startsWith("4")){
        mrHouse.dealerHand += 4
            dealerCard1TopNumber.innerText = '4'
            dealerCard1BottomNumber.innerText = '4'   
            dealerCard1Style.backgroundColor='white'
            
            if (dealDealersCard1.includes('Clubs')){
                dealerCard1Suit.innerText='♣️'
            }

            if (dealDealersCard1.includes('Diamonds')){
            dealerCard1Suit.innerText='♦️'
            } 

            if (dealDealersCard1.includes('Hearts')){
                dealerCard1Suit.innerText='♥️'
            } 

            if (dealDealersCard1.includes('Spades')){
                dealerCard1Suit.innerText='♠️'
            }
        } else if (dealDealersCard1.startsWith("5")){
        mrHouse.dealerHand += 5
                dealerCard1TopNumber.innerText = '5'
                dealerCard1BottomNumber.innerText = '5'
                dealerCard1Style.backgroundColor='white'

            if (dealDealersCard1.includes('Clubs')){
                dealerCard1Suit.innerText='♣️'
            }

            if (dealDealersCard1.includes('Diamonds')){
            dealerCard1Suit.innerText='♦️'
            } 

            if (dealDealersCard1.includes('Hearts')){
                dealerCard1Suit.innerText='♥️'
            } 

            if (dealDealersCard1.includes('Spades')){
                dealerCard1Suit.innerText='♠️'
            }
        } else if (dealDealersCard1.startsWith("6")){
        mrHouse.dealerHand += 6
       
                dealerCard1TopNumber.innerText = '6'
                dealerCard1BottomNumber.innerText = '6'   
                dealerCard1Style.backgroundColor='white'

                if (dealDealersCard1.includes('Clubs')){
                    dealerCard1Suit.innerText='♣️'
                }
    
                if (dealDealersCard1.includes('Diamonds')){
                dealerCard1Suit.innerText='♦️'
                } 
    
                if (dealDealersCard1.includes('Hearts')){
                    dealerCard1Suit.innerText='♥️'
                } 
    
                if (dealDealersCard1.includes('Spades')){
                    dealerCard1Suit.innerText='♠️'
                } 
        } else if (dealDealersCard1.startsWith("7")){
        mrHouse.dealerHand += 7
                dealerCard1TopNumber.innerText = '7'
                dealerCard1BottomNumber.innerText = '7'   
                dealerCard1Style.backgroundColor='white'

                if (dealDealersCard1.includes('Clubs')){
                    dealerCard1Suit.innerText='♣️'
                }
    
                if (dealDealersCard1.includes('Diamonds')){
                dealerCard1Suit.innerText='♦️'
                } 
    
                if (dealDealersCard1.includes('Hearts')){
                    dealerCard1Suit.innerText='♥️'
                } 
    
                if (dealDealersCard1.includes('Spades')){
                    dealerCard1Suit.innerText='♠️'
                }  
        } else if (dealDealersCard1.startsWith("8")){
        mrHouse.dealerHand += 8
        
        dealerCard1TopNumber.innerText = '8'
        dealerCard1BottomNumber.innerText = '8'   
        dealerCard1Style.backgroundColor='white'

        if (dealDealersCard1.includes('Clubs')){
            dealerCard1Suit.innerText='♣️'
        }

        if (dealDealersCard1.includes('Diamonds')){
        dealerCard1Suit.innerText='♦️'
        } 

        if (dealDealersCard1.includes('Hearts')){
            dealerCard1Suit.innerText='♥️'
        } 

        if (dealDealersCard1.includes('Spades')){
            dealerCard1Suit.innerText='♠️'
        } 
        } else if (dealDealersCard1.startsWith("9")){
            mrHouse.dealerHand += 9
            dealerCard1TopNumber.innerText = '9'
            dealerCard1BottomNumber.innerText = '9'   
            dealerCard1Style.backgroundColor='white'
            

            if (dealDealersCard1.includes('Clubs')){
                dealerCard1Suit.innerText='♣️'
            }

            if (dealDealersCard1.includes('Diamonds')){
            dealerCard1Suit.innerText='♦️'
            } 

            if (dealDealersCard1.includes('Hearts')){
                dealerCard1Suit.innerText='♥️'
            } 

            if (dealDealersCard1.includes('Spades')){
                dealerCard1Suit.innerText='♠️'
            }
        } else if (dealDealersCard1.startsWith(allCardValues[9])){
            mrHouse.dealerHand += 10
            dealerCard1TopNumber.innerText = '10'
            dealerCard1BottomNumber.innerText = '10'   
            dealerCard1Style.backgroundColor='white'

            if (dealDealersCard1.includes('Clubs')){
                dealerCard1Suit.innerText='♣️'
            }

            if (dealDealersCard1.includes('Diamonds')){
            dealerCard1Suit.innerText='♦️'
            } 

            if (dealDealersCard1.includes('Hearts')){
                dealerCard1Suit.innerText='♥️'
            } 

            if (dealDealersCard1.includes('Spades')){
                dealerCard1Suit.innerText='♠️'
            } 
        } else if (dealDealersCard1.startsWith(allCardValues[10])){
            mrHouse.dealerHand += 10
            
            dealerCard1TopNumber.innerText = 'J'
            dealerCard1BottomNumber.innerText = 'J'   
            dealerCard1Style.backgroundColor='white'

            if (dealDealersCard1.includes('Clubs')){
                dealerCard1Suit.innerText='♣️'
            }

            if (dealDealersCard1.includes('Diamonds')){
            dealerCard1Suit.innerText='♦️'
            } 

            if (dealDealersCard1.includes('Hearts')){
                dealerCard1Suit.innerText='♥️'
            } 

            if (dealDealersCard1.includes('Spades')){
                dealerCard1Suit.innerText='♠️'
            }
    } else if (dealDealersCard1.startsWith(allCardValues[11])){
        mrHouse.dealerHand += 10
        dealerCard1TopNumber.innerText = 'Q'
        dealerCard1BottomNumber.innerText = 'Q'   
        dealerCard1Style.backgroundColor='white'

        if (dealDealersCard1.includes('Clubs')){
            dealerCard1Suit.innerText='♣️'
        }

        if (dealDealersCard1.includes('Diamonds')){
        dealerCard1Suit.innerText='♦️'
        } 

        if (dealDealersCard1.includes('Hearts')){
            dealerCard1Suit.innerText='♥️'
        } 

        if (dealDealersCard1.includes('Spades')){
            dealerCard1Suit.innerText='♠️'
        }
} else if (dealDealersCard1.startsWith(allCardValues[12])){
    mrHouse.dealerHand += 10
    dealerCard1TopNumber.innerText = 'K'
    dealerCard1BottomNumber.innerText = 'K'   
    dealerCard1Style.backgroundColor='white'

    if (dealDealersCard1.includes('Clubs')){
        dealerCard1Suit.innerText='♣️'
    }

    if (dealDealersCard1.includes('Diamonds')){
    dealerCard1Suit.innerText='♦️'
    } 

    if (dealDealersCard1.includes('Hearts')){
        dealerCard1Suit.innerText='♥️'
    } 

    if (dealDealersCard1.includes('Spades')){
        dealerCard1Suit.innerText='♠️'
    } 
}
     
            



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
    extract2ndDealersCard = tableDeck.deck.indexOf(dealDealersCard2)
     //getting the index of the card randomly dealt.
    tableDeck.deck.splice(extract2ndDealersCard, 1)
    //extracting the randomly dealt card from the array
    if (dealDealersCard2.startsWith("A")){
        mrHouse.dealerHand += 1
        dealerCard2TopNumber.innerText = 'A'
        dealerCard2BottomNumber.innerText = 'A'   
        dealerCard2Style.backgroundColor='white'

        if (dealDealersCard2.includes('Clubs')){
            dealerCard2Suit.innerText='♣️'
        }

        if (dealDealersCard2.includes('Diamonds')){
        dealerCard2Suit.innerText='♦️'
        } 

        if (dealDealersCard2.includes('Hearts')){
            dealerCard2Suit.innerText='♥️'
        } 

        if (dealDealersCard2.includes('Spades')){
            dealerCard2Suit.innerText='♠️'
        }

        } else if (dealDealersCard2.startsWith("2")){
        mrHouse.dealerHand += 2
        dealerCard2TopNumber.innerText = '2'
        dealerCard2BottomNumber.innerText = '2'   
        dealerCard2Style.backgroundColor='white'
        
        if (dealDealersCard2.includes('Clubs')){
            dealerCard2Suit.innerText='♣️'
        }

        if (dealDealersCard2.includes('Diamonds')){
        dealerCard2Suit.innerText='♦️'
        } 

        if (dealDealersCard2.includes('Hearts')){
            dealerCard2Suit.innerText='♥️'
        } 

        if (dealDealersCard2.includes('Spades')){
            dealerCard2Suit.innerText='♠️'
        }

        } else if (dealDealersCard2.startsWith("3")){
        mrHouse.dealerHand +=3
        dealerCard2TopNumber.innerText = '3'        
        dealerCard2BottomNumber.innerText = '3'   
        dealerCard2Style.backgroundColor='white'
        
        if (dealDealersCard2.includes('Clubs')){
            dealerCard2Suit.innerText='♣️'
        }

        if (dealDealersCard2.includes('Diamonds')){
        dealerCard2Suit.innerText='♦️'
        } 

        if (dealDealersCard2.includes('Hearts')){
            dealerCard2Suit.innerText='♥️'
        } 

        if (dealDealersCard2.includes('Spades')){
            dealerCard2Suit.innerText='♠️'
        }

        } else if (dealDealersCard2.startsWith("4")){
        mrHouse.dealerHand += 4
        dealerCard2TopNumber.innerText = '4'        
        dealerCard2BottomNumber.innerText = '4'   
        dealerCard2Style.backgroundColor='white'
        
        if (dealDealersCard2.includes('Clubs')){
            dealerCard2Suit.innerText='♣️'
        }

        if (dealDealersCard2.includes('Diamonds')){
        dealerCard2Suit.innerText='♦️'
        } 

        if (dealDealersCard2.includes('Hearts')){
            dealerCard2Suit.innerText='♥️'
        } 

        if (dealDealersCard2.includes('Spades')){
            dealerCard2Suit.innerText='♠️'
        }

        } else if (dealDealersCard2.startsWith("5")){
        mrHouse.dealerHand += 5
        dealerCard2TopNumber.innerText = '5'        
        dealerCard2BottomNumber.innerText = '5'   
        dealerCard2Style.backgroundColor='white'
        
        if (dealDealersCard2.includes('Clubs')){
            dealerCard2Suit.innerText='♣️'
        }

        if (dealDealersCard2.includes('Diamonds')){
        dealerCard2Suit.innerText='♦️'
        } 

        if (dealDealersCard2.includes('Hearts')){
            dealerCard2Suit.innerText='♥️'
        } 

        if (dealDealersCard2.includes('Spades')){
            dealerCard2Suit.innerText='♠️'
        }

        } else if (dealDealersCard2.startsWith("6")){
        mrHouse.dealerHand += 6
        dealerCard2TopNumber.innerText = '6'        
        dealerCard2BottomNumber.innerText = '6'   
        dealerCard2Style.backgroundColor='white'
        
        if (dealDealersCard2.includes('Clubs')){
            dealerCard2Suit.innerText='♣️'
        }

        if (dealDealersCard2.includes('Diamonds')){
        dealerCard2Suit.innerText='♦️'
        } 

        if (dealDealersCard2.includes('Hearts')){
            dealerCard2Suit.innerText='♥️'
        } 

        if (dealDealersCard2.includes('Spades')){
            dealerCard2Suit.innerText='♠️'
        }
        } else if (dealDealersCard2.startsWith("7")){
        mrHouse.dealerHand += 7
        dealerCard2TopNumber.innerText = '7'        
        dealerCard2BottomNumber.innerText = '7'   
        dealerCard2Style.backgroundColor='white'
        
        if (dealDealersCard2.includes('Clubs')){
            dealerCard2Suit.innerText='♣️'
        }

        if (dealDealersCard2.includes('Diamonds')){
        dealerCard2Suit.innerText='♦️'
        } 

        if (dealDealersCard2.includes('Hearts')){
            dealerCard2Suit.innerText='♥️'
        } 

        if (dealDealersCard2.includes('Spades')){
            dealerCard2Suit.innerText='♠️'
        }

        } else if (dealDealersCard2.startsWith("8")){
        mrHouse.dealerHand += 8
        dealerCard2TopNumber.innerText = '8'        
        dealerCard2BottomNumber.innerText = '8'   
        dealerCard2Style.backgroundColor='white'
        
        if (dealDealersCard2.includes('Clubs')){
            dealerCard2Suit.innerText='♣️'
        }

        if (dealDealersCard2.includes('Diamonds')){
        dealerCard2Suit.innerText='♦️'
        } 

        if (dealDealersCard2.includes('Hearts')){
            dealerCard2Suit.innerText='♥️'
        } 

        if (dealDealersCard2.includes('Spades')){
            dealerCard2Suit.innerText='♠️'
        }

        } else if (dealDealersCard2.startsWith("9")){
        mrHouse.dealerHand += 9
        dealerCard2TopNumber.innerText = '9'        
        dealerCard2BottomNumber.innerText = '9'   
        dealerCard2Style.backgroundColor='white'
        
        if (dealDealersCard2.includes('Clubs')){
            dealerCard2Suit.innerText='♣️'
        }

        if (dealDealersCard2.includes('Diamonds')){
        dealerCard2Suit.innerText='♦️'
        } 

        if (dealDealersCard2.includes('Hearts')){
            dealerCard2Suit.innerText='♥️'
        } 

        if (dealDealersCard2.includes('Spades')){
            dealerCard2Suit.innerText='♠️'
        }

        } else if (dealDealersCard2.startsWith("10")){
        mrHouse.dealerHand += 10
        dealerCard2TopNumber.innerText = '10'        
        dealerCard2BottomNumber.innerText = '10'   
        dealerCard2Style.backgroundColor='white'
        
        if (dealDealersCard2.includes('Clubs')){
            dealerCard2Suit.innerText='♣️'
        }

        if (dealDealersCard2.includes('Diamonds')){
        dealerCard2Suit.innerText='♦️'
        } 

        if (dealDealersCard2.includes('Hearts')){
            dealerCard2Suit.innerText='♥️'
        } 

        if (dealDealersCard2.includes('Spades')){
            dealerCard2Suit.innerText='♠️'
        }
        } else if (dealDealersCard2.startsWith("Jack")){
        mrHouse.dealerHand += 10
        dealerCard2TopNumber.innerText = 'J'        
        dealerCard2BottomNumber.innerText = 'J'   
        dealerCard2Style.backgroundColor='white'
        
        if (dealDealersCard2.includes('Clubs')){
            dealerCard2Suit.innerText='♣️'
        }

        if (dealDealersCard2.includes('Diamonds')){
        dealerCard2Suit.innerText='♦️'
        } 

        if (dealDealersCard2.includes('Hearts')){
            dealerCard2Suit.innerText='♥️'
        } 

        if (dealDealersCard2.includes('Spades')){
            dealerCard2Suit.innerText='♠️'
        }
        }else if (dealDealersCard2.startsWith("Queen")){
        mrHouse.dealerHand += 10
        dealerCard2TopNumber.innerText = 'Q'        
        dealerCard2BottomNumber.innerText = 'Q'   
        dealerCard2Style.backgroundColor='white'
        
        if (dealDealersCard2.includes('Clubs')){
            dealerCard2Suit.innerText='♣️'
        }

        if (dealDealersCard2.includes('Diamonds')){
        dealerCard2Suit.innerText='♦️'
        } 

        if (dealDealersCard2.includes('Hearts')){
            dealerCard2Suit.innerText='♥️'
        } 

        if (dealDealersCard2.includes('Spades')){
            dealerCard2Suit.innerText='♠️'
        }
        } else if (dealDealersCard2.startsWith("King")){
        mrHouse.dealerHand += 10
        dealerCard2TopNumber.innerText = 'K'        
        dealerCard2BottomNumber.innerText = 'K'   
        dealerCard2Style.backgroundColor='white'
        
        if (dealDealersCard2.includes('Clubs')){
            dealerCard2Suit.innerText='♣️'
        }

        if (dealDealersCard2.includes('Diamonds')){
        dealerCard2Suit.innerText='♦️'
        } 

        if (dealDealersCard2.includes('Hearts')){
            dealerCard2Suit.innerText='♥️'
        } 

        if (dealDealersCard2.includes('Spades')){
            dealerCard2Suit.innerText='♠️'
        }
        }
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
    // return tableDeck.deck
        //since user.playerhnad and mrhouse.dealer are global scope, I don't need to return them.
        //QUESTION 1: The values that I was having the cards assign to the variable that stored the players total card values were not matching their respective card. For example, a Jack of Spades face cards was showing a value of 9 instead of 10. After I commented out line 245, this resolved the issue. Why did this fix the card value  problem that I was having?
        // dealerBlackjack(dealersHits)  
        playerBlackjack(hitClickCount)
            //the set timeout method is supposed to delay my alert from displaying by half a second. My intent is to have the alert display after the card is dealt. Instead, my game result alerts (stating who wins the game) are displaying before the last card is dealt.
        dealerBlackjack(dealersHits)
        setTimeout(function(){
            user.playerBetAction();}, 200)
       setTimeout(function(){playerMoneyMethod();}, 200)
            //For 7/23/22: if i console log the above playerMoneyMethod, I get 'undefined' in chrome.
        
        //QUESTION 2 FOR 7/22/22: Why are my cards not displaying before my game result alerts when I have a timeout function to delay the alerts?
    }


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
        if (dealPlayersCard3.startsWith("A")){
            user.playerHand += 1
            playerCard3TopNumber.innerText = 'A'
            playerCard3BottomNumber.innerText = 'A'
            playerCard3Style.backgroundColor='white'

            if (dealPlayersCard3.includes('Clubs')){
                playerCard3Suit.innerText='♣️'
            }
    
            if (dealPlayersCard3.includes('Diamonds')){
                playerCard3Suit.innerText='♦️'
            } 
    
            if (dealPlayersCard3.includes('Hearts')){
                playerCard3Suit.innerText='♥️'
            } 
    
            if (dealPlayersCard3.includes('Spades')){
                playerCard3Suit.innerText='♠️'
            }
            } else if (dealPlayersCard3.startsWith("2")){
                user.playerHand += 2
                playerCard3TopNumber.innerText = '2'
                playerCard3BottomNumber.innerText = '2'
                playerCard3Style.backgroundColor='white'
        
                if (dealPlayersCard3.includes('Clubs')){
                    playerCard3Suit.innerText='♣️'
                }
        
                if (dealPlayersCard3.includes('Diamonds')){
                    playerCard3Suit.innerText='♦️'
                } 
        
                if (dealPlayersCard3.includes('Hearts')){
                    playerCard3Suit.innerText='♥️'
                } 
        
                if (dealPlayersCard3.includes('Spades')){
                    playerCard3Suit.innerText='♠️'
                }
                } else if (dealPlayersCard3.startsWith("3")){
                user.playerHand +=3
                playerCard3TopNumber.innerText = '3'
                playerCard3BottomNumber.innerText = '3'
                playerCard3Style.backgroundColor='white'
        
                if (dealPlayersCard3.includes('Clubs')){
                    playerCard3Suit.innerText='♣️'
                }
        
                if (dealPlayersCard3.includes('Diamonds')){
                    playerCard3Suit.innerText='♦️'
                } 
        
                if (dealPlayersCard3.includes('Hearts')){
                    playerCard3Suit.innerText='♥️'
                } 
        
                if (dealPlayersCard3.includes('Spades')){
                    playerCard3Suit.innerText='♠️'
                }
                } else if (dealPlayersCard3.startsWith("4")){
                user.playerHand += 4
                playerCard3TopNumber.innerText = '4'
                playerCard3BottomNumber.innerText = '4'
                playerCard3Style.backgroundColor='white'
        
                if (dealPlayersCard3.includes('Clubs')){
                    playerCard3Suit.innerText='♣️'
                }
        
                if (dealPlayersCard3.includes('Diamonds')){
                    playerCard3Suit.innerText='♦️'
                } 
        
                if (dealPlayersCard3.includes('Hearts')){
                    playerCard3Suit.innerText='♥️'
                } 
        
                if (dealPlayersCard3.includes('Spades')){
                    playerCard3Suit.innerText='♠️'
                }
                } else if (dealPlayersCard3.startsWith("5")){
                user.playerHand += 5
                playerCard3TopNumber.innerText = '5'
                playerCard3BottomNumber.innerText = '5'
                playerCard3Style.backgroundColor='white'
        
                if (dealPlayersCard3.includes('Clubs')){
                    playerCard3Suit.innerText='♣️'
                }
        
                if (dealPlayersCard3.includes('Diamonds')){
                    playerCard3Suit.innerText='♦️'
                } 
        
                if (dealPlayersCard3.includes('Hearts')){
                    playerCard3Suit.innerText='♥️'
                } 
        
                if (dealPlayersCard3.includes('Spades')){
                    playerCard3Suit.innerText='♠️'
                }
                } else if (dealPlayersCard3.startsWith("6")){
                user.playerHand += 6
                playerCard3TopNumber.innerText = '6'
                playerCard3BottomNumber.innerText = '6'
                playerCard3Style.backgroundColor='white'
        
                if (dealPlayersCard3.includes('Clubs')){
                    playerCard3Suit.innerText='♣️'
                }
        
                if (dealPlayersCard3.includes('Diamonds')){
                    playerCard3Suit.innerText='♦️'
                } 
        
                if (dealPlayersCard3.includes('Hearts')){
                    playerCard3Suit.innerText='♥️'
                } 
        
                if (dealPlayersCard3.includes('Spades')){
                    playerCard3Suit.innerText='♠️'
                }
                } else if (dealPlayersCard3.startsWith("7")){
                user.playerHand += 7
                playerCard3TopNumber.innerText = '7'
                playerCard3BottomNumber.innerText = '7'
                playerCard3Style.backgroundColor='white'
        
                if (dealPlayersCard3.includes('Clubs')){
                    playerCard3Suit.innerText='♣️'
                }
        
                if (dealPlayersCard3.includes('Diamonds')){
                    playerCard3Suit.innerText='♦️'
                } 
        
                if (dealPlayersCard3.includes('Hearts')){
                    playerCard3Suit.innerText='♥️'
                } 
        
                if (dealPlayersCard3.includes('Spades')){
                    playerCard3Suit.innerText='♠️'
                }
                } else if (dealPlayersCard3.startsWith("8")){
                user.playerHand += 8
                playerCard3TopNumber.innerText = '8'
                playerCard3BottomNumber.innerText = '8'
                playerCard3Style.backgroundColor='white'
        
                if (dealPlayersCard3.includes('Clubs')){
                    playerCard3Suit.innerText='♣️'
                }
        
                if (dealPlayersCard3.includes('Diamonds')){
                    playerCard3Suit.innerText='♦️'
                } 
        
                if (dealPlayersCard3.includes('Hearts')){
                    playerCard3Suit.innerText='♥️'
                } 
        
                if (dealPlayersCard3.includes('Spades')){
                    playerCard3Suit.innerText='♠️'
                }
                } else if (dealPlayersCard3.startsWith("9")){
                user.playerHand += 9
                playerCard3TopNumber.innerText = '9'
                playerCard3BottomNumber.innerText = '9'
                playerCard3Style.backgroundColor='white'
        
                if (dealPlayersCard3.includes('Clubs')){
                    playerCard3Suit.innerText='♣️'
                }
        
                if (dealPlayersCard3.includes('Diamonds')){
                    playerCard3Suit.innerText='♦️'
                } 
        
                if (dealPlayersCard3.includes('Hearts')){
                    playerCard3Suit.innerText='♥️'
                } 
        
                if (dealPlayersCard3.includes('Spades')){
                    playerCard3Suit.innerText='♠️'
                }
                } else if (dealPlayersCard3.startsWith("10")){   
                    user.playerHand += 10
                    playerCard3TopNumber.innerText = '10'
                    playerCard3BottomNumber.innerText = '10'
                    playerCard3Style.backgroundColor='white'
            
                    if (dealPlayersCard3.includes('Clubs')){
                        playerCard3Suit.innerText='♣️'
                    }
            
                    if (dealPlayersCard3.includes('Diamonds')){
                        playerCard3Suit.innerText='♦️'
                    } 
            
                    if (dealPlayersCard3.includes('Hearts')){
                        playerCard3Suit.innerText='♥️'
                    } 
            
                    if (dealPlayersCard3.includes('Spades')){
                        playerCard3Suit.innerText='♠️'
                    }
                } else if (dealPlayersCard3.startsWith("Jack")){
                    user.playerHand += 10
                playerCard3TopNumber.innerText = 'J'
                playerCard3BottomNumber.innerText = 'J'
                playerCard3Style.backgroundColor='white'
        
                if (dealPlayersCard3.includes('Clubs')){
                    playerCard3Suit.innerText='♣️'
                }
        
                if (dealPlayersCard3.includes('Diamonds')){
                    playerCard3Suit.innerText='♦️'
                } 
        
                if (dealPlayersCard3.includes('Hearts')){
                    playerCard3Suit.innerText='♥️'
                } 
        
                if (dealPlayersCard3.includes('Spades')){
                    playerCard3Suit.innerText='♠️'
                }
                } else if (dealPlayersCard3.startsWith("Queen")){
                user.playerHand += 10
                playerCard3TopNumber.innerText = 'Q'
                playerCard3BottomNumber.innerText = 'Q'
                playerCard3Style.backgroundColor='white'
        
                if (dealPlayersCard3.includes('Clubs')){
                    playerCard3Suit.innerText='♣️'
                }
        
                if (dealPlayersCard3.includes('Diamonds')){
                    playerCard3Suit.innerText='♦️'
                } 
        
                if (dealPlayersCard3.includes('Hearts')){
                    playerCard3Suit.innerText='♥️'
                } 
        
                if (dealPlayersCard3.includes('Spades')){
                    playerCard3Suit.innerText='♠️'
                }
                } else if (dealPlayersCard3.startsWith("King")){
                    user.playerHand += 10
                    playerCard3TopNumber.innerText = 'K'
                    playerCard3BottomNumber.innerText = 'K'
                    playerCard3Style.backgroundColor='white'
            
                    if (dealPlayersCard3.includes('Clubs')){
                        playerCard3Suit.innerText='♣️'
                    }
            
                    if (dealPlayersCard3.includes('Diamonds')){
                        playerCard3Suit.innerText='♦️'
                    } 
            
                    if (dealPlayersCard3.includes('Hearts')){
                        playerCard3Suit.innerText='♥️'
                    } 
            
                    if (dealPlayersCard3.includes('Spades')){
                        playerCard3Suit.innerText='♠️'
                    }
                }
        
        //QUESTION 1: is the above returning to the system as well as logging to the console? Just curious about whether it's doing both. I researched this but only found stack overflow articles.
            //answer: delete them. console logs should be removed by final product.
        //codecademy definition: console log = print to the console
            //return - is a call to pass some value back up to where the call was made.

    }
    else if(hitClickCount === 2){
        dealPlayersCard4 = arr[Math.floor(Math.random() * tableDeck.deck.length)]
        extract4thPlayersCard = arr.indexOf(dealPlayersCard4)
        tableDeck.deck.splice(extract4thPlayersCard, 1)
        if (dealPlayersCard4.startsWith("A")){
            user.playerHand += 1
            playerCard4TopNumber.innerText = 'A'
            playerCard4BottomNumber.innerText = 'A'
            playerCard4Style.backgroundColor='white'

            if (dealPlayersCard4.includes('Clubs')){
                playerCard4Suit.innerText='♣️'
            }
    
            if (dealPlayersCard4.includes('Diamonds')){
                playerCard4Suit.innerText='♦️'
            } 
    
            if (dealPlayersCard4.includes('Hearts')){
                playerCard4Suit.innerText='♥️'
            } 
    
            if (dealPlayersCard4.includes('Spades')){
                playerCard4Suit.innerText='♠️'
            }
            } else if (dealPlayersCard4.startsWith("2")){
                user.playerHand += 2
                playerCard4TopNumber.innerText = '2'
                playerCard4BottomNumber.innerText = '2'
                playerCard4Style.backgroundColor='white'
        
                if (dealPlayersCard4.includes('Clubs')){
                    playerCard4Suit.innerText='♣️'
                }
        
                if (dealPlayersCard4.includes('Diamonds')){
                    playerCard4Suit.innerText='♦️'
                } 
        
                if (dealPlayersCard4.includes('Hearts')){
                    playerCard4Suit.innerText='♥️'
                } 
        
                if (dealPlayersCard4.includes('Spades')){
                    playerCard4Suit.innerText='♠️'
                }
                } else if (dealPlayersCard4.startsWith("3")){
                user.playerHand +=3
                playerCard4TopNumber.innerText = '3'
                playerCard4BottomNumber.innerText = '3'
                playerCard4Style.backgroundColor='white'
        
                if (dealPlayersCard4.includes('Clubs')){
                    playerCard4Suit.innerText='♣️'
                }
        
                if (dealPlayersCard4.includes('Diamonds')){
                    playerCard4Suit.innerText='♦️'
                } 
        
                if (dealPlayersCard4.includes('Hearts')){
                    playerCard4Suit.innerText='♥️'
                } 
        
                if (dealPlayersCard4.includes('Spades')){
                    playerCard4Suit.innerText='♠️'
                }
                } else if (dealPlayersCard4.startsWith("4")){
                user.playerHand += 4
                playerCard4TopNumber.innerText = '4'
                playerCard4BottomNumber.innerText = '4'
                playerCard4Style.backgroundColor='white'
        
                if (dealPlayersCard4.includes('Clubs')){
                    playerCard4Suit.innerText='♣️'
                }
        
                if (dealPlayersCard4.includes('Diamonds')){
                    playerCard4Suit.innerText='♦️'
                } 
        
                if (dealPlayersCard4.includes('Hearts')){
                    playerCard4Suit.innerText='♥️'
                } 
        
                if (dealPlayersCard4.includes('Spades')){
                    playerCard4Suit.innerText='♠️'
                }
                } else if (dealPlayersCard4.startsWith("5")){
                user.playerHand += 5
                playerCard4TopNumber.innerText = '5'
                playerCard4BottomNumber.innerText = '5'
                playerCard4Style.backgroundColor='white'
        
                if (dealPlayersCard4.includes('Clubs')){
                    playerCard4Suit.innerText='♣️'
                }
        
                if (dealPlayersCard4.includes('Diamonds')){
                    playerCard4Suit.innerText='♦️'
                } 
        
                if (dealPlayersCard4.includes('Hearts')){
                    playerCard4Suit.innerText='♥️'
                } 
        
                if (dealPlayersCard4.includes('Spades')){
                    playerCard4Suit.innerText='♠️'
                }
                } else if (dealPlayersCard4.startsWith("6")){
                user.playerHand += 6
                playerCard4TopNumber.innerText = '6'
                playerCard4BottomNumber.innerText = '6'
                playerCard4Style.backgroundColor='white'
        
                if (dealPlayersCard4.includes('Clubs')){
                    playerCard4Suit.innerText='♣️'
                }
        
                if (dealPlayersCard4.includes('Diamonds')){
                    playerCard4Suit.innerText='♦️'
                } 
        
                if (dealPlayersCard4.includes('Hearts')){
                    playerCard4Suit.innerText='♥️'
                } 
        
                if (dealPlayersCard4.includes('Spades')){
                    playerCard4Suit.innerText='♠️'
                }
                } else if (dealPlayersCard4.startsWith("7")){
                user.playerHand += 7
                playerCard4TopNumber.innerText = '7'
                playerCard4BottomNumber.innerText = '7'
                playerCard4Style.backgroundColor='white'
        
                if (dealPlayersCard4.includes('Clubs')){
                    playerCard4Suit.innerText='♣️'
                }
        
                if (dealPlayersCard4.includes('Diamonds')){
                    playerCard4Suit.innerText='♦️'
                } 
        
                if (dealPlayersCard4.includes('Hearts')){
                    playerCard4Suit.innerText='♥️'
                } 
        
                if (dealPlayersCard4.includes('Spades')){
                    playerCard4Suit.innerText='♠️'
                }
                } else if (dealPlayersCard4.startsWith("8")){
                user.playerHand += 8
                playerCard4TopNumber.innerText = '8'
                playerCard4BottomNumber.innerText = '8'
                playerCard4Style.backgroundColor='white'
        
                if (dealPlayersCard4.includes('Clubs')){
                    playerCard4Suit.innerText='♣️'
                }
        
                if (dealPlayersCard4.includes('Diamonds')){
                    playerCard4Suit.innerText='♦️'
                } 
        
                if (dealPlayersCard4.includes('Hearts')){
                    playerCard4Suit.innerText='♥️'
                } 
        
                if (dealPlayersCard4.includes('Spades')){
                    playerCard4Suit.innerText='♠️'
                }
                } else if (dealPlayersCard4.startsWith("9")){
                user.playerHand += 9
                playerCard4TopNumber.innerText = '9'
                playerCard4BottomNumber.innerText = '9'
                playerCard4Style.backgroundColor='white'
        
                if (dealPlayersCard4.includes('Clubs')){
                    playerCard4Suit.innerText='♣️'
                }
        
                if (dealPlayersCard4.includes('Diamonds')){
                    playerCard4Suit.innerText='♦️'
                } 
        
                if (dealPlayersCard4.includes('Hearts')){
                    playerCard4Suit.innerText='♥️'
                } 
        
                if (dealPlayersCard4.includes('Spades')){
                    playerCard4Suit.innerText='♠️'
                }
                } else if (dealPlayersCard4.startsWith("10")){   
                    user.playerHand += 10
                    playerCard4TopNumber.innerText = '10'
                    playerCard4BottomNumber.innerText = '10'
                    playerCard4Style.backgroundColor='white'
            
                    if (dealPlayersCard4.includes('Clubs')){
                        playerCard4Suit.innerText='♣️'
                    }
            
                    if (dealPlayersCard4.includes('Diamonds')){
                        playerCard4Suit.innerText='♦️'
                    } 
            
                    if (dealPlayersCard4.includes('Hearts')){
                        playerCard4Suit.innerText='♥️'
                    } 
            
                    if (dealPlayersCard4.includes('Spades')){
                        playerCard4Suit.innerText='♠️'
                    }
                } else if (dealPlayersCard4.startsWith("Jack")){
                    user.playerHand += 10
                playerCard4TopNumber.innerText = 'J'
                playerCard4BottomNumber.innerText = 'J'
                playerCard4Style.backgroundColor='white'
        
                if (dealPlayersCard4.includes('Clubs')){
                    playerCard4Suit.innerText='♣️'
                }
        
                if (dealPlayersCard4.includes('Diamonds')){
                    playerCard4Suit.innerText='♦️'
                } 
        
                if (dealPlayersCard4.includes('Hearts')){
                    playerCard4Suit.innerText='♥️'
                } 
        
                if (dealPlayersCard4.includes('Spades')){
                    playerCard4Suit.innerText='♠️'
                }
                } else if (dealPlayersCard4.startsWith("Queen")){
                user.playerHand += 10
                playerCard4TopNumber.innerText = 'Q'
                playerCard4BottomNumber.innerText = 'Q'
                playerCard4Style.backgroundColor='white'
        
                if (dealPlayersCard4.includes('Clubs')){
                    playerCard4Suit.innerText='♣️'
                }
        
                if (dealPlayersCard4.includes('Diamonds')){
                    playerCard4Suit.innerText='♦️'
                } 
        
                if (dealPlayersCard4.includes('Hearts')){
                    playerCard4Suit.innerText='♥️'
                } 
        
                if (dealPlayersCard4.includes('Spades')){
                    playerCard4Suit.innerText='♠️'
                }
                } else if (dealPlayersCard4.startsWith("King")){
                    user.playerHand += 10
                    playerCard4TopNumber.innerText = 'K'
                    playerCard4BottomNumber.innerText = 'K'
                    playerCard4Style.backgroundColor='white'
            
                    if (dealPlayersCard4.includes('Clubs')){
                        playerCard4Suit.innerText='♣️'
                    }
            
                    if (dealPlayersCard4.includes('Diamonds')){
                        playerCard4Suit.innerText='♦️'
                    } 
            
                    if (dealPlayersCard4.includes('Hearts')){
                        playerCard4Suit.innerText='♥️'
                    } 
            
                    if (dealPlayersCard4.includes('Spades')){
                        playerCard4Suit.innerText='♠️'
                    }
                }
                //when the player or dealer reaches 21, i want the game to grant a blackjack to that person. so it's just as simple as adding an if function here (after all of the else if functions have run) with a condition that, e.g., if user.playerhand = 21, then call the method to display a blackjack alert.
                    //do so
                    //try a check winner function (global scope)
                        //invoke that function here.
    } 

    else if(hitClickCount === 3){
        dealPlayersCard5 = arr[Math.floor(Math.random() * tableDeck.deck.length)]
        extract5thPlayersCard = arr.indexOf(dealPlayersCard5)
        tableDeck.deck.splice(extract5thPlayersCard, 1)
        
        if (dealPlayersCard5.startsWith("A")){
            user.playerHand += 1
            playerCard5TopNumber.innerText = 'A'
            playerCard5BottomNumber.innerText = 'A'
            playerCard5Style.backgroundColor='white'

            if (dealPlayersCard5.includes('Clubs')){
                playerCard5Suit.innerText='♣️'
            }
    
            if (dealPlayersCard5.includes('Diamonds')){
                playerCard5Suit.innerText='♦️'
            } 
    
            if (dealPlayersCard5.includes('Hearts')){
                playerCard5Suit.innerText='♥️'
            } 
    
            if (dealPlayersCard5.includes('Spades')){
                playerCard5Suit.innerText='♠️'
            }
        }
            else if (dealPlayersCard5.startsWith("2")){
                user.playerHand += 2
                playerCard5TopNumber.innerText = '2'
                playerCard5BottomNumber.innerText = '2'
                playerCard5Style.backgroundColor='white'
        
                if (dealPlayersCard5.includes('Clubs')){
                    playerCard5Suit.innerText='♣️'
                }
        
                if (dealPlayersCard5.includes('Diamonds')){
                    playerCard5Suit.innerText='♦️'
                } 
        
                if (dealPlayersCard5.includes('Hearts')){
                    playerCard5Suit.innerText='♥️'
                } 
        
                if (dealPlayersCard5.includes('Spades')){
                    playerCard5Suit.innerText='♠️'
                }
                } else if (dealPlayersCard5.startsWith("3")){
                user.playerHand +=3
                playerCard5TopNumber.innerText = '3'
                playerCard5BottomNumber.innerText = '3'
                playerCard5Style.backgroundColor='white'
        
                if (dealPlayersCard5.includes('Clubs')){
                    playerCard5Suit.innerText='♣️'
                }
        
                if (dealPlayersCard5.includes('Diamonds')){
                    playerCard5Suit.innerText='♦️'
                } 
        
                if (dealPlayersCard5.includes('Hearts')){
                    playerCard5Suit.innerText='♥️'
                } 
        
                if (dealPlayersCard5.includes('Spades')){
                    playerCard5Suit.innerText='♠️'
                }
                } else if (dealPlayersCard5.startsWith("4")){
                user.playerHand += 4
                playerCard5TopNumber.innerText = '4'
                playerCard5BottomNumber.innerText = '4'
                playerCard5Style.backgroundColor='white'
        
                if (dealPlayersCard5.includes('Clubs')){
                    playerCard5Suit.innerText='♣️'
                }
        
                if (dealPlayersCard5.includes('Diamonds')){
                    playerCard5Suit.innerText='♦️'
                } 
        
                if (dealPlayersCard5.includes('Hearts')){
                    playerCard5Suit.innerText='♥️'
                } 
        
                if (dealPlayersCard5.includes('Spades')){
                    playerCard5Suit.innerText='♠️'
                }
                } else if (dealPlayersCard5.startsWith("5")){
                user.playerHand += 5
                playerCard5TopNumber.innerText = '5'
                playerCard5BottomNumber.innerText = '5'
                playerCard5Style.backgroundColor='white'
        
                if (dealPlayersCard5.includes('Clubs')){
                    playerCard5Suit.innerText='♣️'
                }
        
                if (dealPlayersCard5.includes('Diamonds')){
                    playerCard5Suit.innerText='♦️'
                } 
        
                if (dealPlayersCard5.includes('Hearts')){
                    playerCard5Suit.innerText='♥️'
                } 
        
                if (dealPlayersCard5.includes('Spades')){
                    playerCard5Suit.innerText='♠️'
                }
                } else if (dealPlayersCard5.startsWith("6")){
                user.playerHand += 6
                playerCard5TopNumber.innerText = '6'
                playerCard5BottomNumber.innerText = '6'
                playerCard5Style.backgroundColor='white'
        
                if (dealPlayersCard5.includes('Clubs')){
                    playerCard5Suit.innerText='♣️'
                }
        
                if (dealPlayersCard5.includes('Diamonds')){
                    playerCard5Suit.innerText='♦️'
                } 
        
                if (dealPlayersCard5.includes('Hearts')){
                    playerCard5Suit.innerText='♥️'
                } 
        
                if (dealPlayersCard5.includes('Spades')){
                    playerCard5Suit.innerText='♠️'
                }
                } else if (dealPlayersCard5.startsWith("7")){
                user.playerHand += 7
                playerCard5TopNumber.innerText = '7'
                playerCard5BottomNumber.innerText = '7'
                playerCard5Style.backgroundColor='white'
        
                if (dealPlayersCard5.includes('Clubs')){
                    playerCard5Suit.innerText='♣️'
                }
        
                if (dealPlayersCard5.includes('Diamonds')){
                    playerCard5Suit.innerText='♦️'
                } 
        
                if (dealPlayersCard5.includes('Hearts')){
                    playerCard5Suit.innerText='♥️'
                } 
        
                if (dealPlayersCard5.includes('Spades')){
                    playerCard5Suit.innerText='♠️'
                }
                } else if (dealPlayersCard5.startsWith("8")){
                user.playerHand += 8
                playerCard5TopNumber.innerText = '8'
                playerCard5BottomNumber.innerText = '8'
                playerCard5Style.backgroundColor='white'
        
                if (dealPlayersCard5.includes('Clubs')){
                    playerCard5Suit.innerText='♣️'
                }
        
                if (dealPlayersCard5.includes('Diamonds')){
                    playerCard5Suit.innerText='♦️'
                } 
        
                if (dealPlayersCard5.includes('Hearts')){
                    playerCard5Suit.innerText='♥️'
                } 
        
                if (dealPlayersCard5.includes('Spades')){
                    playerCard5Suit.innerText='♠️'
                }
                } else if (dealPlayersCard5.startsWith("9")){
                user.playerHand += 9
                playerCard5TopNumber.innerText = '9'
                playerCard5BottomNumber.innerText = '9'
                playerCard5Style.backgroundColor='white'
        
                if (dealPlayersCard5.includes('Clubs')){
                    playerCard5Suit.innerText='♣️'
                }
        
                if (dealPlayersCard5.includes('Diamonds')){
                    playerCard5Suit.innerText='♦️'
                } 
        
                if (dealPlayersCard5.includes('Hearts')){
                    playerCard5Suit.innerText='♥️'
                } 
        
                if (dealPlayersCard5.includes('Spades')){
                    playerCard5Suit.innerText='♠️'
                }
                } else if (dealPlayersCard5.startsWith("10")){   
                    user.playerHand += 10
                    playerCard5TopNumber.innerText = '10'
                    playerCard5BottomNumber.innerText = '10'
                    playerCard5Style.backgroundColor='white'
            
                    if (dealPlayersCard5.includes('Clubs')){
                        playerCard5Suit.innerText='♣️'
                    }
            
                    if (dealPlayersCard5.includes('Diamonds')){
                        playerCard5Suit.innerText='♦️'
                    } 
            
                    if (dealPlayersCard5.includes('Hearts')){
                        playerCard5Suit.innerText='♥️'
                    } 
            
                    if (dealPlayersCard5.includes('Spades')){
                        playerCard5Suit.innerText='♠️'
                    }
                } else if (dealPlayersCard5.startsWith("Jack")){
                user.playerHand += 10
                playerCard5TopNumber.innerText = 'J'
                playerCard5BottomNumber.innerText = 'J'
                playerCard5Style.backgroundColor='white'
        
                if (dealPlayersCard5.includes('Clubs')){
                    playerCard5Suit.innerText='♣️'
                }
        
                if (dealPlayersCard5.includes('Diamonds')){
                    playerCard5Suit.innerText='♦️'
                } 
        
                if (dealPlayersCard5.includes('Hearts')){
                    playerCard5Suit.innerText='♥️'
                } 
        
                if (dealPlayersCard5.includes('Spades')){
                    playerCard5Suit.innerText='♠️'
                }
                } else if (dealPlayersCard5.startsWith("Queen")){
                user.playerHand += 10
                playerCard5TopNumber.innerText = 'Q'
                playerCard5BottomNumber.innerText = 'Q'
                playerCard5Style.backgroundColor='white'
        
                if (dealPlayersCard5.includes('Clubs')){
                    playerCard5Suit.innerText='♣️'
                }
        
                if (dealPlayersCard5.includes('Diamonds')){
                    playerCard5Suit.innerText='♦️'
                } 
        
                if (dealPlayersCard5.includes('Hearts')){
                    playerCard5Suit.innerText='♥️'
                } 
        
                if (dealPlayersCard5.includes('Spades')){
                    playerCard5Suit.innerText='♠️'
                }
                } else if (dealPlayersCard5.startsWith("King")){
                    user.playerHand += 10
                    playerCard5TopNumber.innerText = 'K'
                    playerCard5BottomNumber.innerText = 'K'
                    playerCard5Style.backgroundColor='white'
            
                    if (dealPlayersCard5.includes('Clubs')){
                        playerCard5Suit.innerText='♣️'
                    }
            
                    if (dealPlayersCard5.includes('Diamonds')){
                        playerCard5Suit.innerText='♦️'
                    } 
            
                    if (dealPlayersCard5.includes('Hearts')){
                        playerCard5Suit.innerText='♥️'
                    } 
            
                    if (dealPlayersCard5.includes('Spades')){
                        playerCard5Suit.innerText='♠️'
                    } 
                }
                // if either the dealer or the player hit 21 OR are dealt 5 cards without busting, i'm going to assign them a blackjack.
            } 
            playerBlackjack(hitClickCount)
            //QUESTION 2 FOR 7/22/22: Why are my cards not displaying before my game result alerts when I have a timeout function to delay the alerts? 
        }  



function dealDealersHitCards (arr) {
    //need to add functions or conditionals here
    while (mrHouse.dealerHand < 17){//this is the closing bracket for the while loop at the start of the dealDealersHit cards function
        dealersHits += 1
        console.log(dealersHits)
    if (dealersHits === 1){
    dealDealersCard3 = arr[Math.floor(Math.random() * tableDeck.deck.length)]
    extract3rdDealersCard = arr.indexOf(dealDealersCard3)
    tableDeck.deck.splice(extract3rdDealersCard, 1)
    if (dealDealersCard3.startsWith("A")){
        mrHouse.dealerHand += 1
        dealerCard3TopNumber.innerText = 'A'
        dealerCard3BottomNumber.innerText = 'A'
        dealerCard3Style.backgroundColor='white'

        if (dealDealersCard3.includes('Clubs')){
            dealerCard3Suit.innerText='♣️'
        }

        if (dealDealersCard3.includes('Diamonds')){
            dealerCard3Suit.innerText='♦️'
        } 

        if (dealDealersCard3.includes('Hearts')){
            dealerCard3Suit.innerText='♥️'
        } 

        if (dealDealersCard3.includes('Spades')){
            dealerCard3Suit.innerText='♠️'
        }
    } else if (dealDealersCard3.startsWith("2")){
        mrHouse.dealerHand += 2
        dealerCard3TopNumber.innerText = '2'
        dealerCard3BottomNumber.innerText = '2'
        dealerCard3Style.backgroundColor='white'

        if (dealDealersCard3.includes('Clubs')){
            dealerCard3Suit.innerText='♣️'
        }

        if (dealDealersCard3.includes('Diamonds')){
            dealerCard3Suit.innerText='♦️'
        } 

        if (dealDealersCard3.includes('Hearts')){
            dealerCard3Suit.innerText='♥️'
        } 

        if (dealDealersCard3.includes('Spades')){
            dealerCard3Suit.innerText='♠️'
        }
    } else if (dealDealersCard3.startsWith("3")){
        mrHouse.dealerHand += 3
        dealerCard3TopNumber.innerText = '3'
        dealerCard3BottomNumber.innerText = '3'
        dealerCard3Style.backgroundColor='white'

        if (dealDealersCard3.includes('Clubs')){
            dealerCard3Suit.innerText='♣️'
        }

        if (dealDealersCard3.includes('Diamonds')){
            dealerCard3Suit.innerText='♦️'
        } 

        if (dealDealersCard3.includes('Hearts')){
            dealerCard3Suit.innerText='♥️'
        } 

        if (dealDealersCard3.includes('Spades')){
            dealerCard3Suit.innerText='♠️'
        }
    } else if (dealDealersCard3.startsWith("4")){
        mrHouse.dealerHand += 4
        dealerCard3TopNumber.innerText = '4'
        dealerCard3BottomNumber.innerText = '4'
        dealerCard3Style.backgroundColor='white'

        if (dealDealersCard3.includes('Clubs')){
            dealerCard3Suit.innerText='♣️'
        }

        if (dealDealersCard3.includes('Diamonds')){
            dealerCard3Suit.innerText='♦️'
        } 

        if (dealDealersCard3.includes('Hearts')){
            dealerCard3Suit.innerText='♥️'
        } 

        if (dealDealersCard3.includes('Spades')){
            dealerCard3Suit.innerText='♠️'
        }
    } else if (dealDealersCard3.startsWith("5")){
        mrHouse.dealerHand += 5
        dealerCard3TopNumber.innerText = '5'
        dealerCard3BottomNumber.innerText = '5'
        dealerCard3Style.backgroundColor='white'

        if (dealDealersCard3.includes('Clubs')){
            dealerCard3Suit.innerText='♣️'
        }

        if (dealDealersCard3.includes('Diamonds')){
            dealerCard3Suit.innerText='♦️'
        } 

        if (dealDealersCard3.includes('Hearts')){
            dealerCard3Suit.innerText='♥️'
        } 

        if (dealDealersCard3.includes('Spades')){
            dealerCard3Suit.innerText='♠️'
        }
    } else if (dealDealersCard3.startsWith("6")){
        mrHouse.dealerHand += 6
        dealerCard3TopNumber.innerText = '6'
        dealerCard3BottomNumber.innerText = '6'
        dealerCard3Style.backgroundColor='white'

        if (dealDealersCard3.includes('Clubs')){
            dealerCard3Suit.innerText='♣️'
        }

        if (dealDealersCard3.includes('Diamonds')){
            dealerCard3Suit.innerText='♦️'
        } 

        if (dealDealersCard3.includes('Hearts')){
            dealerCard3Suit.innerText='♥️'
        } 

        if (dealDealersCard3.includes('Spades')){
            dealerCard3Suit.innerText='♠️'
        }
    } else if (dealDealersCard3.startsWith("7")){
        mrHouse.dealerHand += 7
        dealerCard3TopNumber.innerText = '7'
        dealerCard3BottomNumber.innerText = '7'
        dealerCard3Style.backgroundColor='white'

        if (dealDealersCard3.includes('Clubs')){
            dealerCard3Suit.innerText='♣️'
        }

        if (dealDealersCard3.includes('Diamonds')){
            dealerCard3Suit.innerText='♦️'
        } 

        if (dealDealersCard3.includes('Hearts')){
            dealerCard3Suit.innerText='♥️'
        } 

        if (dealDealersCard3.includes('Spades')){
            dealerCard3Suit.innerText='♠️'
        }
    } else if (dealDealersCard3.startsWith("8")){
        mrHouse.dealerHand += 8
        dealerCard3TopNumber.innerText = '8'
        dealerCard3BottomNumber.innerText = '8'
        dealerCard3Style.backgroundColor='white'

        if (dealDealersCard3.includes('Clubs')){
            dealerCard3Suit.innerText='♣️'
        }

        if (dealDealersCard3.includes('Diamonds')){
            dealerCard3Suit.innerText='♦️'
        } 

        if (dealDealersCard3.includes('Hearts')){
            dealerCard3Suit.innerText='♥️'
        } 

        if (dealDealersCard3.includes('Spades')){
            dealerCard3Suit.innerText='♠️'
        }
    } else if (dealDealersCard3.startsWith("9")){
        mrHouse.dealerHand += 9
        dealerCard3TopNumber.innerText = '9'
        dealerCard3BottomNumber.innerText = '9'
        dealerCard3Style.backgroundColor='white'

        if (dealDealersCard3.includes('Clubs')){
            dealerCard3Suit.innerText='♣️'
        }

        if (dealDealersCard3.includes('Diamonds')){
            dealerCard3Suit.innerText='♦️'
        } 

        if (dealDealersCard3.includes('Hearts')){
            dealerCard3Suit.innerText='♥️'
        } 

        if (dealDealersCard3.includes('Spades')){
            dealerCard3Suit.innerText='♠️'
        }
    } else if (dealDealersCard3.startsWith("10")){
        mrHouse.dealerHand += 10
        dealerCard3TopNumber.innerText = '10'
        dealerCard3BottomNumber.innerText = '10'
        dealerCard3Style.backgroundColor='white'

        if (dealDealersCard3.includes('Clubs')){
            dealerCard3Suit.innerText='♣️'
        }

        if (dealDealersCard3.includes('Diamonds')){
            dealerCard3Suit.innerText='♦️'
        } 

        if (dealDealersCard3.includes('Hearts')){
            dealerCard3Suit.innerText='♥️'
        } 

        if (dealDealersCard3.includes('Spades')){
            dealerCard3Suit.innerText='♠️'
        }
    } else if (dealDealersCard3.startsWith("Jack")){
        mrHouse.dealerHand += 10
        dealerCard3TopNumber.innerText = 'J'
        dealerCard3BottomNumber.innerText = 'J'
        dealerCard3Style.backgroundColor='white'

        if (dealDealersCard3.includes('Clubs')){
            dealerCard3Suit.innerText='♣️'
        }

        if (dealDealersCard3.includes('Diamonds')){
            dealerCard3Suit.innerText='♦️'
        } 

        if (dealDealersCard3.includes('Hearts')){
            dealerCard3Suit.innerText='♥️'
        } 

        if (dealDealersCard3.includes('Spades')){
            dealerCard3Suit.innerText='♠️'
        }
    } else if (dealDealersCard3.startsWith("Queen")){
        mrHouse.dealerHand += 10
        dealerCard3TopNumber.innerText = 'Q'
        dealerCard3BottomNumber.innerText = 'Q'
        dealerCard3Style.backgroundColor='white'

        if (dealDealersCard3.includes('Clubs')){
            dealerCard3Suit.innerText='♣️'
        }

        if (dealDealersCard3.includes('Diamonds')){
            dealerCard3Suit.innerText='♦️'
        } 

        if (dealDealersCard3.includes('Hearts')){
            dealerCard3Suit.innerText='♥️'
        } 

        if (dealDealersCard3.includes('Spades')){
            dealerCard3Suit.innerText='♠️'
        }
    } else if (dealDealersCard3.startsWith("King")){
        mrHouse.dealerHand += 10
        dealerCard3TopNumber.innerText = 'K'
        dealerCard3BottomNumber.innerText = 'K'
        dealerCard3Style.backgroundColor='white'

        if (dealDealersCard3.includes('Clubs')){
            dealerCard3Suit.innerText='♣️'
        }

        if (dealDealersCard3.includes('Diamonds')){
            dealerCard3Suit.innerText='♦️'
        } 

        if (dealDealersCard3.includes('Hearts')){
            dealerCard3Suit.innerText='♥️'
        } 

        if (dealDealersCard3.includes('Spades')){
            dealerCard3Suit.innerText='♠️'
        }
    }
    }
    if (dealersHits === 2){
    dealDealersCard4 = arr[Math.floor(Math.random() * tableDeck.deck.length)]
    extract4thDealersCard = arr.indexOf(dealDealersCard4)
    tableDeck.deck.splice(extract4thDealersCard, 1)
    if (dealDealersCard4.startsWith("A")){
        mrHouse.dealerHand += 1
        dealerCard4TopNumber.innerText = 'A'
        dealerCard4BottomNumber.innerText = 'A'
        dealerCard4Style.backgroundColor='white'

        if (dealDealersCard4.includes('Clubs')){
            dealerCard4Suit.innerText='♣️'
        }

        if (dealDealersCard3.includes('Diamonds')){
            dealerCard4Suit.innerText='♦️'
        } 

        if (dealDealersCard4.includes('Hearts')){
            dealerCard4Suit.innerText='♥️'
        } 

        if (dealDealersCard4.includes('Spades')){
            dealerCard4Suit.innerText='♠️'
        }
    } else if (dealDealersCard4.startsWith("2")){
        mrHouse.dealerHand += 2
        dealerCard4TopNumber.innerText = '2'
        dealerCard4BottomNumber.innerText = '2'
        dealerCard4Style.backgroundColor='white'

        if (dealDealersCard4.includes('Clubs')){
            dealerCard4Suit.innerText='♣️'
        }

        if (dealDealersCard4.includes('Diamonds')){
            dealerCard4Suit.innerText='♦️'
        } 

        if (dealDealersCard4.includes('Hearts')){
            dealerCard4Suit.innerText='♥️'
        } 

        if (dealDealersCard4.includes('Spades')){
            dealerCard4Suit.innerText='♠️'
        }
    } else if (dealDealersCard4.startsWith("3")){
        mrHouse.dealerHand += 3
        dealerCard4TopNumber.innerText = '3'
        dealerCard4BottomNumber.innerText = '3'
        dealerCard4Style.backgroundColor='white'

        if (dealDealersCard4.includes('Clubs')){
            dealerCard4Suit.innerText='♣️'
        }

        if (dealDealersCard4.includes('Diamonds')){
            dealerCard4Suit.innerText='♦️'
        } 

        if (dealDealersCard4.includes('Hearts')){
            dealerCard4Suit.innerText='♥️'
        } 

        if (dealDealersCard4.includes('Spades')){
            dealerCard4Suit.innerText='♠️'
        }
    } else if (dealDealersCard4.startsWith("4")){
        mrHouse.dealerHand += 4
        dealerCard4TopNumber.innerText = '4'
        dealerCard4BottomNumber.innerText = '4'
        dealerCard4Style.backgroundColor='white'

        if (dealDealersCard4.includes('Clubs')){
            dealerCard4Suit.innerText='♣️'
        }

        if (dealDealersCard4.includes('Diamonds')){
            dealerCard4Suit.innerText='♦️'
        } 

        if (dealDealersCard4.includes('Hearts')){
            dealerCard4Suit.innerText='♥️'
        } 

        if (dealDealersCard4.includes('Spades')){
            dealerCard4Suit.innerText='♠️'
        }
    } else if (dealDealersCard4.startsWith("5")){
        mrHouse.dealerHand += 5
        dealerCard4TopNumber.innerText = '5'
        dealerCard4BottomNumber.innerText = '5'
        dealerCard4Style.backgroundColor='white'

        if (dealDealersCard4.includes('Clubs')){
            dealerCard4Suit.innerText='♣️'
        }

        if (dealDealersCard4.includes('Diamonds')){
            dealerCard4Suit.innerText='♦️'
        } 

        if (dealDealersCard4.includes('Hearts')){
            dealerCard4Suit.innerText='♥️'
        } 

        if (dealDealersCard4.includes('Spades')){
            dealerCard4Suit.innerText='♠️'
        }
    } else if (dealDealersCard4.startsWith("6")){
        mrHouse.dealerHand += 6
        dealerCard4TopNumber.innerText = '6'
        dealerCard4BottomNumber.innerText = '6'
        dealerCard4Style.backgroundColor='white'

        if (dealDealersCard4.includes('Clubs')){
            dealerCard4Suit.innerText='♣️'
        }

        if (dealDealersCard4.includes('Diamonds')){
            dealerCard4Suit.innerText='♦️'
        } 

        if (dealDealersCard4.includes('Hearts')){
            dealerCard4Suit.innerText='♥️'
        } 

        if (dealDealersCard4.includes('Spades')){
            dealerCard4Suit.innerText='♠️'
        }
    } else if (dealDealersCard4.startsWith("7")){
        mrHouse.dealerHand += 7
        dealerCard4TopNumber.innerText = '7'
        dealerCard4BottomNumber.innerText = '7'
        dealerCard4Style.backgroundColor='white'

        if (dealDealersCard4.includes('Clubs')){
            dealerCard4Suit.innerText='♣️'
        }

        if (dealDealersCard4.includes('Diamonds')){
            dealerCard4Suit.innerText='♦️'
        } 

        if (dealDealersCard4.includes('Hearts')){
            dealerCard4Suit.innerText='♥️'
        } 

        if (dealDealersCard4.includes('Spades')){
            dealerCard4Suit.innerText='♠️'
        }
    } else if (dealDealersCard4.startsWith("8")){
        mrHouse.dealerHand += 8
        dealerCard4TopNumber.innerText = '8'
        dealerCard4BottomNumber.innerText = '8'
        dealerCard4Style.backgroundColor='white'

        if (dealDealersCard4.includes('Clubs')){
            dealerCard4Suit.innerText='♣️'
        }

        if (dealDealersCard4.includes('Diamonds')){
            dealerCard4Suit.innerText='♦️'
        } 

        if (dealDealersCard4.includes('Hearts')){
            dealerCard4Suit.innerText='♥️'
        } 

        if (dealDealersCard4.includes('Spades')){
            dealerCard4Suit.innerText='♠️'
        }
    } else if (dealDealersCard4.startsWith("9")){
        mrHouse.dealerHand += 9
        dealerCard4TopNumber.innerText = '9'
        dealerCard4BottomNumber.innerText = '9'
        dealerCard4Style.backgroundColor='white'

        if (dealDealersCard4.includes('Clubs')){
            dealerCard4Suit.innerText='♣️'
        }

        if (dealDealersCard4.includes('Diamonds')){
            dealerCard4Suit.innerText='♦️'
        } 

        if (dealDealersCard4.includes('Hearts')){
            dealerCard4Suit.innerText='♥️'
        } 

        if (dealDealersCard4.includes('Spades')){
            dealerCard4Suit.innerText='♠️'
        }
    } else if (dealDealersCard4.startsWith("10")){
        mrHouse.dealerHand += 10
        dealerCard4TopNumber.innerText = '10'
        dealerCard4BottomNumber.innerText = '10'
        dealerCard4Style.backgroundColor='white'

        if (dealDealersCard4.includes('Clubs')){
            dealerCard4Suit.innerText='♣️'
        }

        if (dealDealersCard4.includes('Diamonds')){
            dealerCard4Suit.innerText='♦️'
        } 

        if (dealDealersCard4.includes('Hearts')){
            dealerCard4Suit.innerText='♥️'
        } 

        if (dealDealersCard4.includes('Spades')){
            dealerCard4Suit.innerText='♠️'
        }
    } else if (dealDealersCard4.startsWith("Jack")){
        mrHouse.dealerHand += 10
        dealerCard4TopNumber.innerText = 'J'
        dealerCard4BottomNumber.innerText = 'J'
        dealerCard4Style.backgroundColor='white'

        if (dealDealersCard4.includes('Clubs')){
            dealerCard4Suit.innerText='♣️'
        }

        if (dealDealersCard4.includes('Diamonds')){
            dealerCard4Suit.innerText='♦️'
        } 

        if (dealDealersCard4.includes('Hearts')){
            dealerCard4Suit.innerText='♥️'
        } 

        if (dealDealersCard4.includes('Spades')){
            dealerCard4Suit.innerText='♠️'
        }
    } else if (dealDealersCard4.startsWith("Queen")){
        mrHouse.dealerHand += 10
        dealerCard4TopNumber.innerText = 'Q'
        dealerCard4BottomNumber.innerText = 'Q'
        dealerCard4Style.backgroundColor='white'

        if (dealDealersCard4.includes('Clubs')){
            dealerCard4Suit.innerText='♣️'
        }

        if (dealDealersCard4.includes('Diamonds')){
            dealerCard4Suit.innerText='♦️'
        } 

        if (dealDealersCard4.includes('Hearts')){
            dealerCard4Suit.innerText='♥️'
        } 

        if (dealDealersCard4.includes('Spades')){
            dealerCard4Suit.innerText='♠️'
        }
    } else if (dealDealersCard4.startsWith("King")){
        mrHouse.dealerHand += 10
        dealerCard4TopNumber.innerText = 'K'
        dealerCard4BottomNumber.innerText = 'K'
        dealerCard4Style.backgroundColor='white'

        if (dealDealersCard4.includes('Clubs')){
            dealerCard4Suit.innerText='♣️'
        }

        if (dealDealersCard4.includes('Diamonds')){
            dealerCard4Suit.innerText='♦️'
        } 

        if (dealDealersCard4.includes('Hearts')){
            dealerCard4Suit.innerText='♥️'
        } 

        if (dealDealersCard4.includes('Spades')){
            dealerCard4Suit.innerText='♠️'
        }
    }
    }
    if (dealersHits === 3){
    dealDealersCard5 = arr[Math.floor(Math.random() * tableDeck.deck.length)]
    extract5thDealersCard = arr.indexOf(dealDealersCard5)
    tableDeck.deck.splice(extract5thDealersCard, 1)
    if (dealDealersCard5.startsWith("A")){
        mrHouse.dealerHand += 1
        dealerCard5TopNumber.innerText = 'A'
        dealerCard5BottomNumber.innerText = 'A'
        dealerCard5Style.backgroundColor='white'

        if (dealDealersCard5.includes('Clubs')){
            dealerCard5Suit.innerText='♣️'
        }

        if (dealDealersCard5.includes('Diamonds')){
            dealerCard5Suit.innerText='♦️'
        } 

        if (dealDealersCard5.includes('Hearts')){
            dealerCard5Suit.innerText='♥️'
        } 

        if (dealDealersCard5.includes('Spades')){
            dealerCard5Suit.innerText='♠️'
        }
    } else if (dealDealersCard5.startsWith("2")){
        mrHouse.dealerHand += 2
        dealerCard5TopNumber.innerText = '2'
        dealerCard5BottomNumber.innerText = '2'
        dealerCard5Style.backgroundColor='white'

        if (dealDealersCard5.includes('Clubs')){
            dealerCard5Suit.innerText='♣️'
        }

        if (dealDealersCard5.includes('Diamonds')){
            dealerCard5Suit.innerText='♦️'
        } 

        if (dealDealersCard5.includes('Hearts')){
            dealerCard5Suit.innerText='♥️'
        } 

        if (dealDealersCard5.includes('Spades')){
            dealerCard5Suit.innerText='♠️'
        }
    } else if (dealDealersCard5.startsWith("3")){
        mrHouse.dealerHand += 3
        dealerCard5TopNumber.innerText = '3'
        dealerCard5BottomNumber.innerText = '3'
        dealerCard5Style.backgroundColor='white'

        if (dealDealersCard5.includes('Clubs')){
            dealerCard5Suit.innerText='♣️'
        }

        if (dealDealersCard5.includes('Diamonds')){
            dealerCard5Suit.innerText='♦️'
        } 

        if (dealDealersCard5.includes('Hearts')){
            dealerCard5Suit.innerText='♥️'
        } 

        if (dealDealersCard5.includes('Spades')){
            dealerCard5Suit.innerText='♠️'
        }
    } else if (dealDealersCard5.startsWith("4")){
        mrHouse.dealerHand += 4
        dealerCard5TopNumber.innerText = '4'
        dealerCard5BottomNumber.innerText = '4'
        dealerCard5Style.backgroundColor='white'

        if (dealDealersCard5.includes('Clubs')){
            dealerCard5Suit.innerText='♣️'
        }

        if (dealDealersCard5.includes('Diamonds')){
            dealerCard5Suit.innerText='♦️'
        } 

        if (dealDealersCard5.includes('Hearts')){
            dealerCard5Suit.innerText='♥️'
        } 

        if (dealDealersCard5.includes('Spades')){
            dealerCard5Suit.innerText='♠️'
        }
    } else if (dealDealersCard5.startsWith("5")){
        mrHouse.dealerHand += 5
        dealerCard5TopNumber.innerText = '5'
        dealerCard5BottomNumber.innerText = '5'
        dealerCard5Style.backgroundColor='white'

        if (dealDealersCard5.includes('Clubs')){
            dealerCard5Suit.innerText='♣️'
        }

        if (dealDealersCard5.includes('Diamonds')){
            dealerCard5Suit.innerText='♦️'
        } 

        if (dealDealersCard5.includes('Hearts')){
            dealerCard5Suit.innerText='♥️'
        } 

        if (dealDealersCard5.includes('Spades')){
            dealerCard5Suit.innerText='♠️'
        }
    } else if (dealDealersCard5.startsWith("6")){
        mrHouse.dealerHand += 6
        dealerCard5TopNumber.innerText = '6'
        dealerCard5BottomNumber.innerText = '6'
        dealerCard5Style.backgroundColor='white'

        if (dealDealersCard5.includes('Clubs')){
            dealerCard5Suit.innerText='♣️'
        }

        if (dealDealersCard5.includes('Diamonds')){
            dealerCard5Suit.innerText='♦️'
        } 

        if (dealDealersCard5.includes('Hearts')){
            dealerCard5Suit.innerText='♥️'
        } 

        if (dealDealersCard5.includes('Spades')){
            dealerCard5Suit.innerText='♠️'
        }
    } else if (dealDealersCard5.startsWith("7")){
        mrHouse.dealerHand += 7
        dealerCard5TopNumber.innerText = '7'
        dealerCard5BottomNumber.innerText = '7'
        dealerCard5Style.backgroundColor='white'

        if (dealDealersCard5.includes('Clubs')){
            dealerCard5Suit.innerText='♣️'
        }

        if (dealDealersCard5.includes('Diamonds')){
            dealerCard5Suit.innerText='♦️'
        } 

        if (dealDealersCard5.includes('Hearts')){
            dealerCard5Suit.innerText='♥️'
        } 

        if (dealDealersCard5.includes('Spades')){
            dealerCard5Suit.innerText='♠️'
        }
    } else if (dealDealersCard5.startsWith("8")){
        mrHouse.dealerHand += 8
        dealerCard5TopNumber.innerText = '8'
        dealerCard5BottomNumber.innerText = '8'
        dealerCard5Style.backgroundColor='white'

        if (dealDealersCard5.includes('Clubs')){
            dealerCard5Suit.innerText='♣️'
        }

        if (dealDealersCard5.includes('Diamonds')){
            dealerCard5Suit.innerText='♦️'
        } 

        if (dealDealersCard5.includes('Hearts')){
            dealerCard5Suit.innerText='♥️'
        } 

        if (dealDealersCard5.includes('Spades')){
            dealerCard5Suit.innerText='♠️'
        }
    } else if (dealDealersCard5.startsWith("9")){
        mrHouse.dealerHand += 9
        dealerCard5TopNumber.innerText = '9'
        dealerCard5BottomNumber.innerText = '9'
        dealerCard5Style.backgroundColor='white'

        if (dealDealersCard5.includes('Clubs')){
            dealerCard5Suit.innerText='♣️'
        }

        if (dealDealersCard5.includes('Diamonds')){
            dealerCard5Suit.innerText='♦️'
        } 

        if (dealDealersCard5.includes('Hearts')){
            dealerCard5Suit.innerText='♥️'
        } 

        if (dealDealersCard5.includes('Spades')){
            dealerCard5Suit.innerText='♠️'
        }
    } else if (dealDealersCard5.startsWith("10")){
        mrHouse.dealerHand += 10
        dealerCard5TopNumber.innerText = '10'
        dealerCard5BottomNumber.innerText = '10'
        dealerCard5Style.backgroundColor='white'

        if (dealDealersCard5.includes('Clubs')){
            dealerCard5Suit.innerText='♣️'
        }

        if (dealDealersCard5.includes('Diamonds')){
            dealerCard5Suit.innerText='♦️'
        } 

        if (dealDealersCard5.includes('Hearts')){
            dealerCard5Suit.innerText='♥️'
        } 

        if (dealDealersCard5.includes('Spades')){
            dealerCard5Suit.innerText='♠️'
        }
    } else if (dealDealersCard5.startsWith("Jack")){
        mrHouse.dealerHand += 10
        dealerCard5TopNumber.innerText = 'J'
        dealerCard5BottomNumber.innerText = 'J'
        dealerCard5Style.backgroundColor='white'

        if (dealDealersCard5.includes('Clubs')){
            dealerCard5Suit.innerText='♣️'
        }

        if (dealDealersCard5.includes('Diamonds')){
            dealerCard5Suit.innerText='♦️'
        } 

        if (dealDealersCard5.includes('Hearts')){
            dealerCard5Suit.innerText='♥️'
        } 

        if (dealDealersCard5.includes('Spades')){
            dealerCard5Suit.innerText='♠️'
        }
    } else if (dealDealersCard5.startsWith("Queen")){
        mrHouse.dealerHand += 10
        dealerCard5TopNumber.innerText = 'Q'
        dealerCard5BottomNumber.innerText = 'Q'
        dealerCard5Style.backgroundColor='white'

        if (dealDealersCard5.includes('Clubs')){
            dealerCard5Suit.innerText='♣️'
        }

        if (dealDealersCard5.includes('Diamonds')){
            dealerCard5Suit.innerText='♦️'
        } 

        if (dealDealersCard5.includes('Hearts')){
            dealerCard5Suit.innerText='♥️'
        } 

        if (dealDealersCard5.includes('Spades')){
            dealerCard5Suit.innerText='♠️'
        }
    } else if (dealDealersCard5.startsWith("King")){
        mrHouse.dealerHand += 10
        dealerCard5TopNumber.innerText = 'K'
        dealerCard5BottomNumber.innerText = 'K'
        dealerCard5Style.backgroundColor='white'

        if (dealDealersCard5.includes('Clubs')){
            dealerCard5Suit.innerText='♣️'
        }

        if (dealDealersCard5.includes('Diamonds')){
            dealerCard5Suit.innerText='♦️'
        } 

        if (dealDealersCard5.includes('Hearts')){
            dealerCard5Suit.innerText='♥️'
        } 

        if (dealDealersCard5.includes('Spades')){
            dealerCard5Suit.innerText='♠️'
        }
    }
}
    }
    //setTimeout(function() { alert("my message"); }, time)
    playerBlackjack(hitClickCount)
    dealerBlackjack(dealersHits)
    compareHandsIfNoOneBusts()
    document.getElementById('restartButton').style.pointerEvents = 'auto';
}


//buttons



document.getElementById('startButton').addEventListener('click', () => {
    dealInitialCards(tableDeck.deck)
    getGameplayContainer.style.visibility = 'visible';
    document.getElementById('startButton').style.pointerEvents = 'none';
})
//EXTRA if time allows, add an animation (maybe using keyframes) to fade in the gameplay container.

//a multiplication function to test the below arrow functions containing event listeners

document.getElementById('hit').addEventListener('click', () => {
    dealHitCards(tableDeck.deck)
})

document.getElementById('stay').addEventListener('click', () => {
    document.getElementById('hit').style.pointerEvents = 'none';
    document.getElementById('dealers1stCardTLN').style.visibility = "visible"
    document.getElementById('dealers1stCardSuit').style.visibility = "visible"
    document.getElementById('dealers1stCardBRN').style.visibility = "visible"
    dealDealersHitCards(tableDeck.deck)
})

// document.getElementById('restartButton').addEventListener('click', () => {
//i tried using my restart button here to reset all of my buttons' effects. I add the reset method below, grabbing each button from my DOM.
//It does nothing.
//I spent about 40 minutes on this. I found this reset method on mdn.
//QUESTION 1 FOR 7/22/22: Any ideas on why this is not working?
    //it's necessary for me to get this to work because I need to add a betting function, where the player will win the entire game after reaching $150.00.

// document.getElementById('startButton').reset();
// document.getElementById('hit').reset();
// document.getElementById('stay').reset();
//window.location.reload()
    //reloads the game
// })

//THANOS SNAP EVERYTHING


document.getElementById('restartButton').addEventListener('click', () => {
    winner = 'TBD';
    user.playerHand = 0;
    mrHouse.dealerHand = 0;
    hitClickCount = 0;
    dealersHits = 0;
    getPot.innerText = `$${0}`
    getBetAmount.innerText = `$${0}`
    tableDeck.deck
    enableAgainAllButtons()
    
    playerCard1TopNumber.innerText = ''
    playerCard1Suit.innerText = ''
    playerCard1BottomNumber.innerText = ''
    playerCard1Style.backgroundColor = ''

    playerCard2TopNumber.innerText = ''
    playerCard2Suit.innerText = ''
    playerCard2BottomNumber.innerText = ''
    playerCard2Style.backgroundColor = ''

    playerCard3TopNumber.innerText = ''
    playerCard3BottomNumber.innerText = ''
    playerCard3Style.backgroundColor=''
    playerCard3Suit.innerText=''

    playerCard4TopNumber.innerText = ''
    playerCard4BottomNumber.innerText = ''
    playerCard4Style.backgroundColor=''
    playerCard4Suit.innerText=''

    playerCard5TopNumber.innerText = ''
    playerCard5BottomNumber.innerText = ''
    playerCard5Style.backgroundColor=''
    playerCard5Suit.innerText=''

    dealerCard1TopNumber.innerText = ''
    dealerCard1Suit.innerText = ''
    dealerCard1BottomNumber.innerText = ''
    dealerCard1Style.backgroundColor= ''

    dealerCard2TopNumber.innerText = ''        
    dealerCard2BottomNumber.innerText = ''   
    dealerCard2Style.backgroundColor=''
    dealerCard2Suit.innerText=''

    dealerCard3TopNumber.innerText = ''        
    dealerCard3BottomNumber.innerText = ''   
    dealerCard3Style.backgroundColor=''
    dealerCard3Suit.innerText=''

    dealerCard4TopNumber.innerText = ''        
    dealerCard4BottomNumber.innerText = ''   
    dealerCard4Style.backgroundColor=''
    dealerCard4Suit.innerText=''

    dealerCard5TopNumber.innerText = ''        
    dealerCard5BottomNumber.innerText = ''   
    dealerCard5Style.backgroundColor=''
    dealerCard5Suit.innerText=''

    dealInitialCards(tableDeck.deck)
    getGameplayContainer.style.visibility = 'visible';
    // document.getElementById('startButton').style.pointerEvents = 'none';
    // document.getElementById('restartButton').style.pointerEvents = 'none';

})
