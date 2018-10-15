// src/state/epics/checkForWin/index.spec.js

import configureMockStore from 'redux-mock-store'
import { createEpicMiddleware } from 'redux-observable'

import checkForWinEpic from './'
import { gameOver, squareClicked } from '../../actions'
import { GAME_OVER, SQUARE_CLICKED } from '../../constants'
import { getMoves } from '../../selectors'
import { getBoard, getWins } from '../../../utilities'

jest.mock('../../actions', () => ({
  gameOver: jest.fn().mockReturnValue({ type: GAME_OVER }),
  squareClicked: jest.fn().mockReturnValue({ type: SQUARE_CLICKED })
}))

jest.mock('../../selectors', () => ({
  getMoves: jest
    .fn()
    .mockReturnValueOnce([4])
    .mockReturnValueOnce([4, 6, 0, 7])
    .mockReturnValueOnce([4, 6, 0, 7, 1])
    .mockReturnValueOnce([4, 6, 0, 7, 8])
    .mockReturnValueOnce([0, 1, 2, 3, 4, 5, 6, 7, 8])
    .mockReturnValue([0, 1, 2, 5, 8, 7, 6, 3, 4])
}))

/// //Part you're up to starts with "Next we mock the `getMoves` selector"
