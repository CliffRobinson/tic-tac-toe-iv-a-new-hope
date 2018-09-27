// src/state/index.js

import { SQUARE_CLICKED } from './constants'
import { squareClicked } from './actions'
import { initialState, rootReducer } from './reducers'
import { getMoves } from './selectors'

export { getMoves, initialState, rootReducer, SQUARE_CLICKED, squareClicked }
// test tiems!
