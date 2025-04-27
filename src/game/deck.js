import Card from "./card.js";
import { fisherYatesShuffle as shuffle } from "../../utils/shuffle.js";

class Deck {
    constructor() {
        this.cards = [];
    }

    /**
     * Opretter 52 spillekort og tilføjer dem til decket
     */
    createDeck() {
        const suits = ["hearts", "diamonds", "clubs", "spades"];
        const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

        this.cards = suits.flatMap(suit => ranks.map(rank => new Card(suit, rank)));
    }

    /**
     * blander en kortbunke
     */
    shuffleDeck() {
        shuffle(this.cards);
    }

    /**
     * Fordeler kortbunke ligeligt ud til to personer
     * @param players spillere som skal have kort tildelt
     */
    dealCards(players) {
        for (let i = 0; i < this.cards.length; i++) {
            if (i % 2 === 0) {
                players[0].addToHand(this.cards[i]);
            } else {
                players[1].addToHand(this.cards[i]);
            }
        }
        this.cards = []; // Tøm bunken efter kortene er delt ud
    }
}

export default Deck;