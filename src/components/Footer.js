import React from 'react'
import { footerIconeElements, logo } from '../data'
import styled from 'styled-components'
import FooterWave from './FooterWave'

const FooterContent = styled.div`
  background-color: #000;
  padding: 130px 0px 100px 0px;
  position: relative;

  .container {
    padding: 0;

    @media (max-width: 1040px) {
      padding: 0 20px;
    }
  }
`

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: block;
  }

  .logoContainer {
    @media (max-width: 768px) {
      margin-bottom: 17px;
    }
  }
`

const Logo = styled.img`
  max-width: 100px;
`

const SocialContainer = styled.ul`
  margin: 0px;
  list-style-type: none;

  @media (max-width: 768px) {
    margin-bottom: 10px;
    padding: 0;
  }

  li {
    margin: 0px 25px 0px 0px;
    display: inline-block;

    a {
      text-decoration: none;
      color: #fff;
    }
  }
`

const Copyright = styled.p`
  text-transform: uppercase;
  color: #fff;
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 14px;

  @media (max-width: 768px) {
    padding: 0;
  }
`

const date = new Date()

function Footer() {
  return (
    <React.Fragment>
      <footer className="row">
        <FooterContent>
          <FooterWave />
          <div className="container">
            <Content>
              <div className="logoContainer">
                <Logo src={logo.light} alt="logo" />
              </div>
              <div>
                <SocialContainer>
                  {footerIconeElements.map(({ id, icone }) => (
                    <li key={id}>
                      <a href="#">
                        <i className={`bi ${icone}`} />
                      </a>
                    </li>
                  ))}
                </SocialContainer>
              </div>
              <div>
                <Copyright>
                  &copy; COPYRIGHT {date.getFullYear()} BY WEBGROWTH.
                </Copyright>
              </div>
            </Content>
          </div>
        </FooterContent>
      </footer>
    </React.Fragment>
  )
}

export default Footer
