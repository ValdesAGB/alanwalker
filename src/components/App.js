import React from 'react'
import AboutsMe from './AboutsMe'
import { createGlobalStyle } from 'styled-components'
import Works from './Works'
import Skills from './Skills'
import Available from './Available'
import LatestNews from './LatestNews'
import Contact from './Contact'
import Footer from './Footer'
import Welcome from './Welcome'
import Header from './Header'

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

*{
  transition : all 0.5s ease
}
`

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
      <main
        className="row scrollspy-example"
        data-bs-spy="scroll"
        data-bs-target="#navbar-example2"
        data-bs-root-margin="0px 0px -40%"
        data-bs-smooth-scroll="false"
        tabIndex="0"
      >
        <Welcome />
        <AboutsMe />
        <Works />
        <Skills />
        <Available />
        <LatestNews />
        <Contact />
      </main>

      <Footer />
    </React.Fragment>
  )
}

export default App
