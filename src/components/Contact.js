import React from 'react'
import { coordonneesElements } from '../data'
import Coordonnees from './Coordonnees'
import Formulaire from './Formulaire'
import styled from 'styled-components'

const Section = styled.section`
  position: relative;
  margin-bottom: 110px;
  padding-top: 140px;

  .container {
    padding: 0;

    @media (max-width: 1040px) {
      padding: 0 20px;
    }
  }
`

const Title = styled.h3`
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 10px;
  font-size: 30px;
  line-height: 1.4;
  font-family: 'Poppins';
  color: #000;

  span {
    color: #e54b4b;
  }

  @media (max-width: 768px) {
    letter-spacing: 3px;
  }
`

const Content = styled.div`
  padding-top: 77px;

  .col {
    padding: 0;
  }
`

const TextAndCoordonneesContainer = styled.div`
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`

const TextContainer = styled.div`
  margin-bottom: 40px;
`

function Contact() {
  return (
    <React.Fragment>
      <Section id="contact">
        <div className="container">
          <div>
            <Title>
              GET IN <span>TOUCH</span>
            </Title>
          </div>

          <Content className="row">
            <TextAndCoordonneesContainer className="col-lg">
              <TextContainer>
                <p>
                  Please fill out the form on this section to contact with me.
                  Or call between 9:00 a.m. and 8:00 p.m. ET, Monday through
                  Friday
                </p>
              </TextContainer>

              <div>
                {coordonneesElements.map(({ id, icone, title, data }) => (
                  <Coordonnees
                    id={id}
                    icone={icone}
                    title={title}
                    data={data}
                  />
                ))}
              </div>
            </TextAndCoordonneesContainer>
            <div className="col">
              <Formulaire />
            </div>
          </Content>
        </div>
      </Section>
    </React.Fragment>
  )
}

export default Contact
