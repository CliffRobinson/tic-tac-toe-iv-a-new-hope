import React from 'react'
import styled from 'styled-components'
import { times } from 'ramda'
import { isUndefined } from 'ramda-adjunct'

import { Board, Square } from '..'
import { getPlayer } from '../../utilities'

function makeSquares (moves, n) {
  return times(squareNum => {
    const player = getPlayer(squareNum, moves)

    return isUndefined(player) ? (
      <Square
        key={squareNum}
        index={squareNum}
        handleClick={/* I am stub */ () => console.log(`Butts: ${squareNum}`)}
      />
    ) : (
      <Square key={squareNum} index={squareNum} player={player} />
    )
  }, n)
}

const StyledApp = styled.div`
  display: grid;
  font-family: 'Verdana', sans-serif;
  grid-template-areas: 'board';
  height: 100vh;
  margin: 0;
  padding: 0;
  width: 100vw;
`
StyledApp.displayName = 'StyledApp'

export default function App ({ moves = [] }) {
  return (
    <StyledApp>
      <Board>{makeSquares(moves, 9)}</Board>
    </StyledApp>
  )
}
