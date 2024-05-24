import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin: 0px 0px 18px 0px;
`

const Content = styled.div`
  position: relative;
  padding-left: 27px;
`

const Icone = styled.i`
  width: 15px;
  height: 15px;
  position: absolute;
  left: 0px;
  top: 30%;
  transform: translateY(-50%);
  color: #000;
  margin-top: -1px;
`

const InfosContainer = styled.p`
  .title {
    min-width: 100px;
    display: inline-block;
    font-family: 'Poppins';
    font-weight: 600;
    color: #000;

    @media (max-width: 575px) {
      display: none;
    }
  }

  .data {
    font-weight: 400;
    color: inherit;
    font-family: 'Poppins';

    a {
      text-decoration: none;
      color: inherit !important;
      transition: all 0.3s ease;
      display: inline-block;
      position: relative;

      &:hover {
        color: #000;
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
    }
  }
`

function Coordonnees({ id, icone, title, data }) {
  return (
    <React.Fragment>
      <Container key={id}>
        <Content>
          <Icone className={`bi ${icone}`} />

          <InfosContainer>
            <span className="title">{title} </span>: {` `}
            <span className="data">
              {id !== 1 ? <a href="#">{data}</a> : data}
            </span>
          </InfosContainer>
        </Content>
      </Container>
    </React.Fragment>
  )
}

export default Coordonnees
