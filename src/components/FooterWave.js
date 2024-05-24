import React from 'react'
import styled, { keyframes } from 'styled-components'

const animateWave = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(50%);
  }

`

const VagueContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  svg {
    overflow: hidden;
    vertical-align: middle;
    height: 180px;
    width: 100%;
  }
`

const WavePath = styled.path`
  animaton: ${animateWave} 1s linear infinite;
  fill: #fff;
`

function FooterWave() {
  return (
    <React.Fragment>
      <VagueContainer>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
          <WavePath
            id="wave_img"
            data-color="#fff"
            d="M 0 31.47125164534245 C 426.66666666666663 66.1153099650983 426.66666666666663 66.1153099650983 853.3333333333333 48.79328080522037 C 1280 31.47125164534245 1280 31.47125164534245 1706.6666666666665 51.135342733092884 C 2133.333333333333 70.79943382084332 2133.333333333333 70.79943382084332 2560 52.40047720585663 L 2560 0 L 0 0 Z"
          ></WavePath>
        </svg>
      </VagueContainer>
    </React.Fragment>
  )
}

export default FooterWave
