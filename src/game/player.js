import { fisherYatesShuffle as shuffle } from "../../utils/shuffle.js";

class Player {
    constructor() {
        this.hand = []; //starts empty
        this.wonPile = []; // starts empty
    }

    addToHand(card) {
        this.hand.push(card);
    }

    drawFromHand(){
        return this.hand.pop();
    }

    addToWon(cards){
        cards.forEach(card => this.wonPile.push(card));
    }

    transferWonToHand(){
        shuffle(this.wonPile);
        this.wonPile.forEach(card => this.addToHand(card));
        this.wonPile = [];
    }
}

export default Player;