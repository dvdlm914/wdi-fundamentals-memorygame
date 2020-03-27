console.log("Up and running!");
const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];
const cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User Flipped " + cardOne);
const cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User Flipped " + cardTwo);
if (cardsInPlay.length === 2) {

	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("you found a match");
	}
	else { 
		alert("Sorry try again");
	}
}

