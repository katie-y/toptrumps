class Cards {
    constructor(name){
        this.name = name;
    }
}

class Country extends Cards {
    constructor(name, population){
    super (name);
    this.population = population;
    }
}

// create cards

let china = new Country("China", 1401.43);
let england = new Country("England", 55.98);
let india = new Country("India", 1358.90);
let unitedStates = new Country("United States", 329.32);

let countryCards = [china, england, india, unitedStates]; // all cards in one array


// players cards start empty
let cardsPlayer1 = [];
let cardsPlayer2 = [];

// place cards into arrays at random

const shuffle = () => {
    let dealNum = 1;
    for (let i = 0; i < 4; i++) {
        if (i == 4) {
            cardsPlayer2.push(countryCards[0]); // push last card into player 2 hand
        }
        else {
            let num = Math.floor(Math.random() * countryCards.length); // generate random num less than the amount of cards left
            if (dealNum % 2 != 0) { // alternate which player the card goes to with even and odd numbers
                cardsPlayer1.push(countryCards[num]); 
            } else {
                cardsPlayer2.push(countryCards[num]);
            }
            countryCards.splice(num, 1); // remove card from original array
        }
        dealNum++;
    }
}

shuffle();
console.log(cardsPlayer1);
console.log(cardsPlayer2);


const play = () => {
    if (cardsPlayer1[0].population > cardsPlayer2[0].population){
        console.log("player 1 wins this round");
        cardsPlayer1.push(cardsPlayer1.splice(0,1)[0]);  // put first card to last 
        cardsPlayer1.push(cardsPlayer2[0]); // take card from other player
        cardsPlayer2.splice(0, 1); // remove from the other players array
    }
    else { // same for other player
        console.log("player 2 wins this round");
        cardsPlayer2.push(cardsPlayer2.splice(0,1)[0]); 
        cardsPlayer2.push(cardsPlayer1[0]);
        cardsPlayer1.splice(0, 1);
    }
    if (cardsPlayer1 == 0){
        console.log("player 2 has won the game")
    }
    else if (cardsPlayer2 == 0){
        console.log("player 1 has won the game")
    }
}

play();
console.log(cardsPlayer1);
console.log(cardsPlayer2);
play();
console.log(cardsPlayer1);
console.log(cardsPlayer2);