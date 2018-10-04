// src/components/square/index.js

import React from 'react'
import styled from 'styled-components'
import { isUndefined } from 'ramda-adjunct'

const StyledSquare = styled.div`
  border-color: hsla(0, 0%, 0%, 0.2);
  border-style: solid;
  border-width: 0 ${({ index }) => (index % 3 === 2 ? 0 : '2px')}
    ${({ index }) => (index < 6 ? '2px' : 0)} 0;
  
  cursor: ${({ onClick }) => (isUndefined(onClick) ? 'default' : 'pointer')}
  font-size: 16vh;
  font-weight: bold;
  line-height: 20vh;
  text-align: center;
  text-transform: uppercase;
`

StyledSquare.displayName = 'StyledSquare'

const SquarePlayed = StyledSquare.extend`
  color: ${({ player }) => (player === 'x' ? 'blue' : 'gold')};
`

const SquareLost = StyledSquare.extend`
  color: hsla(0, 0%, 90%, 1);
`
const SquarePlayable = StyledSquare.extend`
  cursor: pointer;
`

SquareLost.displayName = 'SquareLost'
SquarePlayed.displayName = 'SquarePlayed'
SquarePlayable.displayName = 'SquarePlayable'

export default function Square ({
  handleClick,
  index,
  isWinningSquare,
  player
}) {
  if (isUndefined(isWinningSquare)) {
    return isUndefined(player) ? (
      <SquarePlayable index={index} onClick={handleClick} />
    ) : (
      <SquarePlayed index={index} player={player}>
        {player}
      </SquarePlayed>
    )
  }

  if (isUndefined(player)) {
    // Not winning and not played
    return <StyledSquare index={index} />
  }

  return isWinningSquare ? (
    <SquarePlayed index={index} player={player}>
      {player}
    </SquarePlayed> // played and winning
  ) : (
    <SquareLost index={index} player={player}>
      {player}
    </SquareLost>
  ) // played and not winning (lost?)
}
