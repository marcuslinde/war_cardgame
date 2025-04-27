import Game from "./game/game.js";
import Player from "./game/player.js";

function main() {
    const game = new Game();
    game.initiateGame();
    console.log(game.deck);
    console.log(game.players[1].hand);
    
    /* do {
        game.playRound();
    } while (true); */
}

main();
