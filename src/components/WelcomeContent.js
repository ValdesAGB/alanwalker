import React from 'react'
import styled from 'styled-components'
import WelcomeBottomAnimation from './WelcomeBottomAnimation'

const DetailsContainer = styled.div`
  padding: 0;

  @media (max-width: 1040px) {
    padding: 0 20px;
  }
`

const Details = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 5;
`

const Name = styled.h3`
  opacity: 1;
  font-size: 72px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 11px;
  line-height: 1.4;
  font-family: 'Poppins';

  @media (max-width: 480px) {
    font-size: 30px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 45px;
    margin-bottom: 5px;
  }

  @media (min-width: 769px) and (max-width: 1040px) {
    font-size: 55px;
  }
`

const Skills = styled.span`
  opacity: 1;
  color: #ddd;
  letter-spacing: 1.5px;
  font-family: 'Poppins';
  font-size: 17px;
  font-weight: 500;
  margin-bottom: 40px;
  max-width: 400px;
  font-style: italic;
  line-height: 1.4;
  font-family: 'Poppins';

  @media (max-width: 480px) {
    font-size: 15px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 17px;
  }
`

function WelcomeContent() {
  return (
    <React.Fragment>
      <DetailsContainer className="container">
        <Details>
          <Name>Alan Walker</Name>
          <Skills>Web & Mobile App Developer</Skills>
        </Details>

        <WelcomeBottomAnimation />
      </DetailsContainer>
    </React.Fragment>
  )
}

export default WelcomeContent
