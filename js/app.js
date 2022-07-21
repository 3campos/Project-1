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
let  dealerCard3TopNumber = document.getElementById('dealers3rdCardTLN')
let dealerCard3Suit = document.getElementById('dealers3rdCardSuit')
let dealerCard3BottomNumber = document.getElementById('dealers3rdCardBRN')


let dealerCard4Style = document.getElementById('dealerCard4').style
let  dealerCard4TopNumber = document.getElementById('dealers4thCardTLN')
let dealerCard4Suit = document.getElementById('dealers4thCardSuit')
let dealerCard4BottomNumber = document.getElementById('dealers4thCardBRN')


let dealerCard5Style = document.getElementById('dealerCard5').style
let  dealerCard5TopNumber = document.getElementById('dealers5thCardTLN')
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

//dealing functions to player
let dealPlayersCard1;
let dealPlayersCard2;
let extract1stPlayersCard;
let extract2ndPlayersCard;

//END OF LIBRARY

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

const user = new Player('fill in with playerName variable', 0, `$${0}`)

user.promptForPlayerName()
user.playerHit()
user.playerBetAmount()
user.playerMoneyMethod()

class Dealer {
    constructor(name, dealerHand){
        this.name = name
        this.dealerHand = dealerHand
    }
}

const mrHouse = new Dealer('Mr. House', 0)

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

function dealInitialCards (arr) {
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
    extract2ndDealersCard = tableDeck.deck.indexOf(dealDealersCard1)
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



console.log(dealDealersCard1, dealDealersCard2)

//SOURCE FOR MATCH ARROW FUNCTION USED ABOVE AND BELOW: https://bobbyhadz.com/blog/javascript-check-if-array-contains-substring-match. I REPETITIVELY USE THIS FUNCTION. I EXPLAINED EACH LINE OF CODE THE FIRST TIME I USED THE FUNCTION TO DEAL THE DEALER'S FIRST CARD.

    dealPlayersCard1 = arr[Math.floor(Math.random() * arr.length)]
    //getting a random card for first dealt card using math floor and random methods. this random card is being stored into my above variable.
    extract1stPlayersCard = tableDeck.deck.indexOf(dealPlayersCard1)
     //getting the index of the card randomly dealt.
    tableDeck.deck.splice(extract1stPlayersCard, 1)
    //extracting the randomly dealt card from the array
    if (dealPlayersCard1.startsWith("A")){
        user.playerHand += 1
        playerCard1TopNumber = 'A'
        playerCard1BottomNumber = 'A'
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

        playerCard1TopNumber = '2'
        playerCard1BottomNumber = '2'
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
        } else if (dealPlayersCard1.startsWith("3")){
        user.playerHand +=3
        playerCard1TopNumber = '3'
        playerCard1BottomNumber = '3'
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

        playerCard1TopNumber = '4'
        playerCard1BottomNumber = '4'
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
        playerCard1TopNumber = '5'
        playerCard1BottomNumber = '5'
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
        playerCard1TopNumber = '6'
        playerCard1BottomNumber = '6'
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
        playerCard1TopNumber = '7'
        playerCard1BottomNumber = '7'
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
        playerCard1TopNumber = '8'
        playerCard1BottomNumber = '8'
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
        playerCard1TopNumber = '9'
        playerCard1BottomNumber = '9'
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
        playerCard1TopNumber = '10'
        playerCard1BottomNumber = '10'
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
            playerCard1TopNumber = 'J'
        playerCard1BottomNumber = 'J'
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
            playerCard1TopNumber = 'Q'
        playerCard1BottomNumber = 'Q'
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
            playerCard1TopNumber = 'K'
        playerCard1BottomNumber = 'K'
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
        playerCard2TopNumber = 'A'
        playerCard2BottomNumber = 'A'
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
        playerCard2TopNumber = '2'
        playerCard2BottomNumber = '2'
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
        playerCard2TopNumber = '3'
        playerCard2BottomNumber = '3'
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
        playerCard2TopNumber = '4'
        playerCard2BottomNumber = '4'
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
        playerCard2TopNumber = '5'
        playerCard2BottomNumber = '5'
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
        playerCard2TopNumber = '6'
        playerCard2BottomNumber = '6'
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
        playerCard2TopNumber = '7'
        playerCard2BottomNumber = '7'
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
        playerCard2TopNumber = '8'
        playerCard2BottomNumber = '8'
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
        playerCard2TopNumber = '9'
        playerCard2BottomNumber = '9'
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
            playerCard2TopNumber = '10'
            playerCard2BottomNumber = '10'
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
        playerCard2TopNumber = 'J'
        playerCard2BottomNumber = 'J'
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
        playerCard2TopNumber = 'Q'
        playerCard2BottomNumber = 'Q'
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
            playerCard2TopNumber = 'K'
            playerCard2BottomNumber = 'K'
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
}
// dealInitialCards(tableDeck.deck)
// console.log('dealInitialCards', tableDeck.deck)
// console.log(dealPlayersCard1, dealPlayersCard2)
// console.log('FIRSTDEALRESULTS', user.playerHand)
    //RESOLVED: why won't all of my players' card values add properly based on my if functions above? The cards that don't appear to add to my playerhand variable are 8, 9, and at least some of my face cards? 
//when 8 or 9 is my first card, the addition to my playerHand variable does not work properly:
    //9 of hearts and 8 of spades resulted in '8'.
    //9 of hearts and 6 of hearts resulted in '6'.
    //9 of hearts and jack of clubs resulted in '10'.
    //9 of diamonds and 3 of hearts resulted in '3'.
    //9 of clubs and 3 of diamonds resulted in '3'.
    
    //8 of hearts and 9 of diamonds resulted in 9.
    //8 of hearts and queen of diamonds resulted in '8'
    //8 of diamonds and ace of diamonds resulted in '1'
    //8 of spades and 5 of hearts results in '5'
    //8 of spades and 7 of clubs resulted in 7.
    //8 of spades and ace of diamonds resulted in 1.
    //8 of spades and jack of hearts resulted in 10.
    //8 of hearts and 3 of clubs resulted in 3.

//okay, I figured this out after 1.5 hours of debugging. I had the wrong variable in my above functions.

//BUT: when 8 or 9 is the second card, the addition to my playerHand variable works fine:
    //Ace of hearts and 9 of spades resulted in '10'.
    //10 of hearts and 9 of diamonds resulted in '19'.
    //8 of hearts and 9 of hearts resulted in '9'.
    //10 of hearts and 9 of hearts resulted in '19'.

    //ace of spades and 8 of clubs resulted in 9.
    //4 of spades and 8 of clubs resulted in 12.
    //6 of diamonds and 8 of clubs resulted in 14
//ignore: i resolved this today.

//Sometimes, my face cards add correctly and sometimes they do not like below:
    //queen of spades and jack of hearts resulted in 19.
    //jack of clubs and queen of hearts resulted in 19
    //king of clubs and ace of spades resulted in 10.
    //king of clubs and 9 of diamonds resulted in 17.
        //TESTING, SIMILAR: king of clubs and 7 of clubs resulted in 17.
    //jack of clubs and 7 of diamonds resulted in 16.
        //TESTING, EXACT: I FIXED IT!: JACK OF CLUBS AND 7 OF DIAMONDS RESULTED IN 17.
    //king of spades and jack of spades resulted in 19
    //queen of diamonds and 10 of clubs resulted in 19

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
        if (dealPlayersCard3.startsWith("A")){
            user.playerHand += 1
            playerCard3TopNumber = 'A'
            playerCard3BottomNumber = 'A'
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


//buttons
dealInitialCards(tableDeck.deck)
console.log(tableDeck.deck)

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







//I realized about after spending 30 minutes on this that the reset method only works on forms. Is there a different type of reset function or method that I should use?

//NOTES;
//https://www.w3schools.com/jsref/met_form_reset.asp
//Per w3schools, "The reset() method resets the values of all elements in a form (same as clicking the Reset button)."
//document.getElementById("elementID").reset();



//CODE GRAVEYARD

//tried pushing values into card strings using destructuring
// let heartsSuitCards = tableDeck.deck.indexOf('Ace of Spades', 0)
// let deckWithImages = []

// // for (let i = 0, j = 0; i < heartsSuitCards, j < 12; i++, j++){
// for (let i = 0; i < heartsSuitCards; i++){
//     //console.log(tableDeck.deck[i]) 
//     //this one is successful!    
//         //PLAN:push i value into array representing destructuring assignment
//         (deckWithImages.push(tableDeck.deck[i]))
//         //(this.deck.push(`${this.cards[card]} of ${this.suits[suit]}`))
//     // console.log(i=1); THIS ALMOST MADE CHROME EXPLODE.
//     // console.log([i]=1); //ERROR: ILLEGAL RETURN STATEMENT
//     }

// console.log(deckWithImages)

// // const valuesForCards = []
// // for (let j = 1; j < 13; j++){
// //     (valuesForCards.push(j))
// // }
// // console.log(valuesForCards)

// deckWithImages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10]

// console.log(tableDeck.deck[12])

// let heartsSuitCards = tableDeck.deck.indexOf('Ace of Spades', 0)
// let deckWithImages = []

// for (let i = 0, j = 0; i < heartsSuitCards, j < 12; i++, j++){


// for (let i = 0; i < heartsSuitCards; i++){
//     //console.log(tableDeck.deck[i]) 
//     //this one is successful!    
//         //PLAN:push i value into array representing destructuring assignment
//         (deckWithImages.push(tableDeck.deck[i]))
//         //(this.deck.push(`${this.cards[card]} of ${this.suits[suit]}`))
//     // console.log(i=1); THIS ALMOST MADE CHROME EXPLODE.
//     // console.log([i]=1); //ERROR: ILLEGAL RETURN STATEMENT
//     }

// console.log(deckWithImages)

// // const valuesForCards = []
// // for (let j = 1; j < 13; j++){
// //     (valuesForCards.push(j))
// // }
// // console.log(valuesForCards)

// deckWithImages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10]

// console.log(tableDeck.deck[12], deckWithImages[11])