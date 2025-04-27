import Deck from "./deck.js";
import Player from "./player.js";

class Game {
    constructor() {
        this.deck = new Deck();
        this.players = [];
    }
    
    /**
     * Initierer et deck af cards, blander decket, 
     * initiere spillere, samt fordeler decket mellem spillerne
     */
    initiateGame() {
        // Opret kortbunken og bland den
        this.deck.createDeck();
        this.deck.shuffleDeck();

        //create players and add to players[]
        const player1 = new Player();
        const player2 = new Player();
        this.players.push(player1, player2);

        // Del kort ud
        this.deck.dealCards(this.players);
    }

    playRound(){
        /* man trækker et kort, og pc trækker et kort
        disse bliver sammenlignet. højeste vinder.
        hvis de er ens erklæres der krig.
        playround returnerer noget, som kan sendes til en
        print funktion, som printer resultaterne */
    }
}

export default Game;