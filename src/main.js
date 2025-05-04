import Game from "./game/game.js";
import { setupUI } from "./ui/ui.js";

function main() {
    const game = new Game();
    setupUI(game);
}

main();