import React from 'react'
import AboutsMe from './AboutsMe'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
body{
  font-family: "Mulish";
  font-size: 15px;
  line-height: 30px;
  letter-spacing: 1px;
  word-wrap: break-word;
  font-weight: 400;
  color: #767676;
}
`

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <main>
        <AboutsMe />
      </main>
    </React.Fragment>
  )
}

export default App
