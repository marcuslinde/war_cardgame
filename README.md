# Card Game

A simple browser-based card game built with JavaScript. The project separates game logic from UI for maintainability and scalability.

## Features

- Modular game logic (Game, Player, Deck, Card)
- Web-based UI with DOM manipulation
- Easy to extend or test

## Project Structure

```
public/
  index.html
  styles.css

src/
  main.js
  game/
    game.js
    player.js
    deck.js
    card.js
  ui/
    webUI.js
  utils/
    shuffle.js
```

## Getting Started

1. Clone the repository.
2. Open `public/index.html` in your browser.

## Development

- Game logic is in `src/game/`
- UI logic is in `src/ui/webUI.js`
- Entry point is `src/main.js`

## Running Unit Tests

1. Install dependencies:
    ```sh
    npm install
    ```
2. Run tests:
    ```sh
    npm test
    ```

## License

MIT