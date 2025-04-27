import { expect, test } from 'vitest';
import Deck from '../src/game/deck.js';

test('Deck initializes with 52 cards after creation', () => {
  const deck = new Deck();
  deck.createDeck();
  expect(deck.cards.length).toBe(52);
});