import React from 'react'
import styled from 'styled-components'
import { welcomeBgCover } from '../data'
import WelcomeContent from './WelcomeContent'

const Section = styled.section`
  width: 100%;
  height: 100vh;
  clear: both;
  float: left;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 25% 100%, 0 100%);
  overflow: hidden;
  transition: all 0.7s;
`

const BgCoverContainer = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
`

const BgCover = styled.div`
  background-image: url(${welcomeBgCover});
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

const Overlay = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.2);
`
const Content = styled.div`
  width: 100%;
  height: 100%;
  float: left;
  position: relative;
  z-index: 2;
`

function Welcome() {
  return (
    <React.Fragment>
      <Section>
        <BgCoverContainer>
          <BgCover />
          <Overlay />
        </BgCoverContainer>
        <Content>
          <WelcomeContent />
        </Content>
      </Section>
    </React.Fragment>
  )
}

export default Welcome
