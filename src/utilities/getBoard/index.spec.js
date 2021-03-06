// src/utilities/getBoard/index.spec.js

import getBoard from '.'

describe('utilities:getBoard', () => {
  it('returns the correct board for a given set of moves', () => {
    const moves = [0, 4, 1, 3, 2]

    expect(getBoard(moves)).toMatchObject([
      'x',
      'x',
      'x',
      'o',
      'o',
      undefined,
      undefined,
      undefined,
      undefined
    ])
  })
})
