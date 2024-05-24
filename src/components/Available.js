import React from 'react'
import styled, { keyframes } from 'styled-components'
import { availbleBgCover } from '../data'

const Animation = keyframes`
0%{
    opacity:1;
}

50%{
    opacity:0;
}

100%{
    opacity:1;
}
`

const Section = styled.section`
  background-color: black;
`

const Container = styled.div`
  padding: 102px 20px 105px 20px;
  position: relative;

  &::before {
    position: absolute;
    content: '';
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    background-image: url(${availbleBgCover});
    background-repeat: repeat;
    opacity: 1;
    z-index: 2;
  }
`

const Content = styled.div`
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 3;
`

const AvailableTitleContainer = styled.div`
  @media (max-width: 768px) {
    padding-right: 0px;
    margin-bottom: 30px;
  }
`

const AvailableTitle = styled.h3`
  font-weight: 600;
  color: #fff;
  line-height: 1.4;
  font-family: 'Poppins';
  font-size: 30px;

  span {
    position: relative;

    &::before {
      position: absolute;
      content: '';
      width: 20px;
      height: 4px;
      background-color: #fff;
      bottom: 11px;
      left: 100%;
      opacity: 1;
      animation: ${Animation} 0.9s infinite;
    }
  }
`

const Contact = styled.a`
  color: #fff;
  text-decoration: none;
  font-family: 'Poppins';
  font-weight: 600;
  position: relative;
  display: inline-block;

  &::before {
    content: '';
    width: 100%;
    height: 2px;
    position: absolute;
    left: auto;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.2);
  }

  &::after {
    content: '';
    width: 0;
    height: 1px;
    position: absolute;
    left: auto;
    right: 0;
    bottom: 0;
    transition: width 0.6s cubic-bezier(0.25, 0.8, 0.25, 1) 0s;
    background: currentColor;
  }

  &:hover::after {
    width: 100%;
    left: 0;
  }
`

function Available() {
  return (
    <Section>
      <Container>
        <div className="container">
          <Content className="row">
            <AvailableTitleContainer className="col-lg-7 col-xl">
              <AvailableTitle>
                <span>I'm available for freelance work</span>
              </AvailableTitle>
            </AvailableTitleContainer>
            <div className="col-lg text-lg-end">
              <Contact href="#"> Contact Me</Contact>
            </div>
          </Content>
        </div>
      </Container>
    </Section>
  )
}

export default Available
