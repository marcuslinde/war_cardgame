# War Card Game

A browser-based implementation of the classic card game "War" built with vanilla JavaScript. This project demonstrates Object-Oriented Programming principles and clean code architecture (focus on maintainability and scalability thru modularisation).

## About the Game

War is a card game where two players each get half a deck of cards. Players simultaneously reveal their top card, and the player with the higher card wins both cards. If cards are equal, a "war" occurs where additional cards are played.

## Technical Highlights

- **Pure JavaScript**: Built without frameworks to demonstrate core JavaScript skills
- **OOP Design**: Utilizes object-oriented principles with clear class responsibilities
  - `Game`: Controls game flow and rules
  - `Player`: Manages player's cards and actions
  - `Deck`: Handles deck creation and card distribution
  - `Card`: Represents individual cards
- **Separation of Concerns**: Clear separation between game logic and UI
- **Modern JS Features**: Uses ES modules for code organization
- **Unit Testing**: Includes Vitest for testing game logic

## Project Structure
```
project/
├── src/
│   ├── game/           # Core game logic
│   │   ├── game.js     # Main game controller
│   │   ├── player.js   # Player management
│   │   ├── deck.js     # Deck operations
│   │   └── card.js     # Card entity
│   ├── ui/             # UI components
│   │   └── webUI.js    # DOM manipulation
│   └── main.js         # Application entry point
├── utils/
│   └── shuffle.js      # Card shuffling algorithm
├── tests/              # Unit tests
├── index.html          # Entry point for the application
└── public/             # Static assets
    └── styles.css
```

## Getting Started

## Getting Started

1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd cardgame
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Run the development server:
    ```bash
    npm run dev
    ```

4. Run tests:
    ```bash
    npm run test
    ```

## Learning Outcomes

- Object-Oriented Programming in JavaScript
- Unit Testing with Vitest
- DOM Manipulation
- Modern JavaScript (ES6+) features
- Clean Code principles

## Future Enhancements

- Animation effects for card movements
- Multiplayer support
- Score tracking
- Sound effects

## License

ISC