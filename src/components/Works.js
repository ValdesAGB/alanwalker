import React from 'react'
import { worksElements } from '../data'
import WorksList from './WorksList'
import styled from 'styled-components'

const Section = styled.section`
  padding: 0;
  background-color: #f9f9f9;
`

const Container = styled.div`
  padding: 140px 0px 100px 0px;

  @media (max-width: 1040px) {
    padding: 140px 20px 100px 20px;
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
    letter-spacing: 5px;
  }
`

const PortfolioContainer = styled.div`
  padding-top: 90px;
`

const ListContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  list-style-type: none;
  gap: 40px;
  padding: 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
`

function Works() {
  return (
    <React.Fragment>
      <Section id="portfolio">
        <Container className="container">
          <div>
            <Title>
              SELECTED <span>WORKS</span>
            </Title>
          </div>

          <PortfolioContainer>
            <ListContainer>
              {worksElements.map(({ id, cover, title, categorie, video }) => (
                <WorksList
                  id={id}
                  cover={cover}
                  title={title}
                  categorie={categorie}
                  video={video}
                />
              ))}
            </ListContainer>
          </PortfolioContainer>
        </Container>
      </Section>
    </React.Fragment>
  )
}

export default Works
