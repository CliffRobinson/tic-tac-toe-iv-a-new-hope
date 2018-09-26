import React from 'react'
import styled from 'styled-components'
import { times } from 'ramda'

import { Board, Square } from '..'

const makeSquares = n =>
  times(
    idx => <Square key={idx} index={idx} player={idx % 2 === 0 ? 'x' : 'o'} />,
    n
  )

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
      <Board>{makeSquares(9)}</Board>
    </StyledApp>
  )
}

// import React, { Component } from 'react'
// import logo from './logo.svg'
// import './App.css'

// class App extends Component {
//   render () {
//     return (
//       <div className='App'>
//         <header className='App-header'>
//           <img src={logo} className='App-logo' alt='logo' />
//           <h1 className='App-title'>Welcome to React</h1>
//         </header>
//         <p className='App-intro'>
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     )
//   }
// }

// export default App
