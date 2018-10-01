// src/state/index.js

import { gameOver, squareClicked } from './actions'
import { SQUARE_CLICKED, GAME_OVER } from './constants'
import { initialState, rootReducer } from './reducers'
import { getMoves, getWinningPlayer, getWinningSquares } from './selectors'
import configureStore from './store'

export {
  configureStore,
  GAME_OVER,
  gameOver,
  getMoves,
  getWinningPlayer,
  getWinningSquares,
  initialState,
  rootReducer,
  SQUARE_CLICKED,
  squareClicked
}
