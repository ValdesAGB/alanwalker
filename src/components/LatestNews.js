import React from 'react'
import { latestNewsElements } from '../data'
import LatestNewsList from './LatestNewsList'
import styled from 'styled-components'

const Section = styled.section`
  background-color: #f9f9f9;
  padding: 140px 0px 90px 0px;

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
    letter-spacing: 5px;
  }
`

const LatestNewsContainer = styled.div`
  padding-top: 90px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 50px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    gap: 0;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    grid-template-columns: 1fr 1fr;
    gap: 25px;
  }
`

function LatestNews() {
  return (
    <React.Fragment>
      <Section id="news">
        <div className="container">
          <div>
            <Title>
              LATEST <span>NEWS</span>
            </Title>
          </div>
          <div>
            <LatestNewsContainer>
              {latestNewsElements.map(({ id, cover, title, by, date }) => (
                <LatestNewsList
                  id={id}
                  cover={cover}
                  title={title}
                  by={by}
                  date={date}
                />
              ))}
            </LatestNewsContainer>
          </div>
        </div>
      </Section>
    </React.Fragment>
  )
}

export default LatestNews
