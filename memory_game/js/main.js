console.log("Up and running!");

let cardOne = "queen";
let cardTwo = "queen";
let cardThree = "king";
let cardFour = "king";

//console.log("User flipped " + cardOne);
//console.log("User flipped " + cardFour);

//const cards = ["queen", "queen", "king", "king"]

var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/-king-of-diamonds"
}
];

var cardsInPlay = [];

var checkForMatch = function () {
	if (cardsInPlay.length == 2) {

		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
			} else {
			alert("Sorry, try again.");
			}
	}
};

var flipCard = function (cardId) {	
cardsInPlay.push(cards[cardId].rank);  
console.log("User flipped" + " " + cards[cardId].rank);
console.log(cards[cardId].cardImage);
console.log(cards[cardId].suit);  
	checkForMatch();

};		

//Use console.log() to display the card that the user flipped//

