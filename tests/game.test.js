import { expect, test } from 'vitest';
import Game from '../src/game/game.js';

test('Game initializes with empty players array', () => {
  const game = new Game();
  expect(game.players).toEqual([]);
});