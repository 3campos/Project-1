## Project Choice (Tell us which project you're doing!)
> Emilio's Blackjack

## Project Description
> A short description of your game.

//My app is my own version of blackjack, the card game, created with javascript. It's an online game app.
//The user plays against each the dealer (the computer) using cards for a round at a time. The player, either the user or the computer, whose cards equal the closest value to 21, or whoever reaches 21 first, wins.
//The rules of the game will be slightly different from standard blackjack:
    //1. Splitting hands and doubling down are not allowed. 
    //2. Aces will always have a value of 1.
//The cards will deal automatically at the beginning of the game, one card to the user and the dealer, until 2 cards for each player are on the table.
//The dealer's first card will not be visible to the user. The dealer's first card will be revealed after both sides have exhausted play.
//The user will go first each round. The user can 'hit' or ask for another card, which the computer will provide. The user can also 'stay' (i.e., 'stand') or ask for no additional cards. If the user busts (goes over 21) or stays, then the dealer begins their turn. The dealer can decide to hit or stay.
//The user and the dealer can bet money during each turn. A minimum bet is required by the user and the dealer each turn.
//The deck will reshuffle after each round.
//The game consists of multiple rounds. The user will win the game when either the dealer or the user runs out of money.
//If there's a draw, then the user receives the amount that they originally betted for that round.

Wire Frames
-Starting Screen Frame
![Starting-Gameplay-WireFrame](https://media.git.generalassemb.ly/user/43169/files/0b158f69-eba3-4f81-8779-4cac930bc286)

-Mid-Gameplay Frame
![Mid-Gameplay-WireFrame](https://media.git.generalassemb.ly/user/43169/files/eb2ef50c-58e2-415c-a37d-0748106c4388)

Victory/Loss Frame
![Victory:Loss-WireFrame](https://media.git.generalassemb.ly/user/43169/files/66f910d4-9161-4ae6-af90-58c1bae0a6a2)


User Stories
-MVP (minimum viable product) Goals
-MVP is the absolute bare minimum functionality for the game.
-format: As a [type of user], I want [what the user wants], so that [what it helps accomplish]_ format.

As a player, I would like the game to:
0. Include instructions so I know how to play.
1. Recognize that reaching 21 automatically wins the round for the holder of that hand.
2. Recognize that whoever is closest to 21 after the playing phase (both sides have exhausted their requests to hit or stay) wins the round.
3. Recognize that if I bust (i.e., go over 21), then I lose my bet amount.
4. Force a minimum bet (amount TBD) from me each round to progress the game and keep things entertaining.
5. Include the following buttons for the me to click:
    a. A "Hit" button to request another card.
    b. A "Stay" button to not request another card.
    c. A button to restart the game at any point.
    d. A start button to start the game.
    e. A bet button to bet money and grow my winnings.
6. As a player, when either the Dealer or I have obtained 5 cards, the cards' holder automatically receives a value of 21, regardless of the cards' values they have obtained.
7. I want Aces to have a value of just 1 to make the rules easier for me to remember.
9. As a player, I want something displaying the pot (pool of money that has been bet by me) and, if I win, I want to have that added to my winnings.
10. As a player, if there's a draw, then I should receive the amount that I originally betted for that round to my winnings because that is fair.
11. As a player, I do not want to see the face of the dealer's first card to make the game more challenging.
12. As a player, I want to see the dealer's first card revealed after play has been exhausted for a round of play, regardless of the round's outcome to see what the dealer had with my own eyes.
13. As a player, I want to win when I have made 1.5 times my starting amount.
14. As a player, I want displayed that I've lost when I've lost all of my money because the game has to end, win or lose.
15. As a player, I want displayed who wins each round and why, e.g., the dealer busted, player 1 wins the round, because it makes it easier to understand what happened.

Stretch Goals (in no particular order)

1. As a player, I'd like to see a shuffle animation after each round of play because that would look cool.
2. As a player, I'd like to see a victory animation if I win a round because that's exciting.
3. As a player, I'd like to play with a full set of 52 cards because that feels like a classic card game.
4. As a player, I'd like to see (1) an image representing the deck; and (2) an animation whereby the computer draws a card from the deck when dealing and places it on the my or the dealer's hand area.
5. As a player, I'd like the instructions text to be opaque when the mouse is hovering over said text but translucent when the mouse leaves said text.

Personal Super-stretch Goals:
1. Add double-down and split options for the user.
2. Modify the reshuffle function to work only after 52 cards have been played.
3. Create (1) an image representing the discard pile; and (2) after each round, create an animation that moves the cards on the field to the discard pile.
4. If a discard pile is created, then create a function that removes the played cards from being used again until the full deck of 52 cards have been played.

Personal notes: reviewer should ignore
**suggestion: for objects, include the suit, #, and a link to the image of a card.
**suggestion: name this game something else since rules will be altered.
    ** can be 1 or 2 players but 1 is fine.
    **can start with 52 but can decrease