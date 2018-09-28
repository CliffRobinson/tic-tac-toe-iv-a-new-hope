import React from 'react'
import styled from 'styled-components'
import { times } from 'ramda'
import { connect } from 'react-redux'

import { Board } from '..'
import { Square } from '../../containers'
import { getMoves, squareClicked } from '../../state'

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

export default function App () {
  return (
    <StyledApp>
      <Board>
        {times(squareNum => <Square key={squareNum} index={squareNum} />, 9)}
      </Board>
    </StyledApp>
  )
}
