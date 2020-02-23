class Cards {
    constructor(name){
        this.name = name;
    }
}

class Country extends Cards {
    constructor(name, population, areaSqMi, lowestPoint, deathAge, costOfLivingIndex){ // feet for low point
    super (name);
    this.population = population;
    this.areaSqMi = areaSqMi;
    this.lowestPoint = lowestPoint;
    this.deathAge = deathAge;
    this.costOfLivingIndex = costOfLivingIndex;
    this.win = 0;

    }
}

// create cards

let china = new Country("China", 1401.43, 3705407, -505, 76.7, 100);
let unitedKingdom = new Country("United Kingdom", 66.43, 93628, -13, 81.2, 182);
let india = new Country("India", 1358.90, 1269219, -7, 66.9, 64);
let unitedStates = new Country("United States", 329.32, 3677649, -281, 78.9, 176);

let countryCards = [china, unitedKingdom, india, unitedStates]; // all cards in one array


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


// const play = (stat) => {
//     if (cardsPlayer1[0].stat > cardsPlayer2[0].stat) {
//         console.log("player 1 wins this round");
//         cardsPlayer1.push(cardsPlayer1.splice(0,1)[0]);  // put first card to last 
//         cardsPlayer1.push(cardsPlayer2[0]); // take card from other player
//         cardsPlayer2.splice(0, 1); // remove from the other players array
//     }
//     else { // same for other player
//         console.log("player 2 wins this round");
//         cardsPlayer2.push(cardsPlayer2.splice(0,1)[0]); 
//         cardsPlayer2.push(cardsPlayer1[0]);
//         cardsPlayer1.splice(0, 1);
//     }
//     if (cardsPlayer1 == 0){
//         console.log("player 2 has won the game")
//     }
//     else if (cardsPlayer2 == 0){
//         console.log("player 1 has won the game")
//     }
// }

const play = (stat) => {
    if (stat == "population" && cardsPlayer1[0].population > cardsPlayer2[0].population || 
    stat == "areaSqMi" && cardsPlayer1[0].areaSqMi > cardsPlayer2[0].areaSqMi || 
    stat == "lowestPoint" && cardsPlayer1[0].lowestPoint < cardsPlayer2[0].lowestPoint ||
    stat == "deathAge" && cardsPlayer1[0].deathAge > cardsPlayer2[0].deathAge ||
    stat == "costOfLivingIndex" && cardsPlayer1[0].costOfLivingIndex < cardsPlayer2[0].costOfLivingIndex) {
        console.log("player 1 wins this round");
        cardsPlayer1[0].win++;
        cardsPlayer1.push(cardsPlayer1.splice(0,1)[0]);  // put first card to last 
        cardsPlayer1.push(cardsPlayer2[0]); // take card from other player
        cardsPlayer2.splice(0, 1); // remove from the other players array
    }
    else { // same for other player
        console.log("player 2 wins this round");
        cardsPlayer2[0].win++;
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


play("lowestPoint");
console.log(cardsPlayer1);
console.log(cardsPlayer2);
play("areaSqMi");
console.log(cardsPlayer1);
console.log(cardsPlayer2);