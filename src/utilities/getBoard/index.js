// src/utilities/getBoard/index.js

import { identity, map, times } from 'ramda'

import { getPlayer } from '..'

export default function getBoard (moves) {
  return map(squareNum => getPlayer(squareNum, moves), times(identity, 9))
}
