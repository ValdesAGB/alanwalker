import React from 'react'
import styled, { keyframes } from 'styled-components'

const animation = keyframes`
0% {
    height: 0;
}

50% {
    height: 100%;
}
70% {
    height: 100%;
    transform: scaleY(0.5);
    transform-origin: bottom;
}
100% {
    height: 100%;
    transform: scaleY(0);
    transform-origin: bottom;
}`

const Container = styled.div`
  display: block;
  position: absolute;
  z-index: 7;
  bottom: 5%;
`

const Line = styled.div`
  width: 1px;
  height: 50px;
  background: none;
  display: block;
  left: 0;
  right: 50%;
  margin: 0px auto;
  opacity: 1;
  position: absolute;
  transition: all 0.7s;

  &::before {
    background-color: #fff;

    content: '';
    width: 1px;
    height: 50%;
    display: block;
    animation: ${animation} 2s ease-in-out infinite;
  }
`

function WelcomeBottomAnimation() {
  return (
    <React.Fragment>
      <Container>
        <Line>
          <div></div>
        </Line>
      </Container>
    </React.Fragment>
  )
}

export default WelcomeBottomAnimation
