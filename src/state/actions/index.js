// src/state/actions/index.js

import { GAME_OVER, SQUARE_CLICKED } from '../constants'

function squareClicked (square) {
  return {
    type: SQUARE_CLICKED,
    payload: {
      square
    }
  }
}

function gameOver (squares, player) {
  return {
    type: GAME_OVER,
    payload: {
      winners: {
        squares,
        player
      }
    }
  }
}

export { gameOver, squareClicked }
