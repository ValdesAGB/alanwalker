import React from 'react'
import styled from 'styled-components'
import { latestNewsListElements } from '../data'

const LatestNewsContent = styled.div`
  margin: 0px 0px 50px 0px;

  @media (max-width: 768px) {
    margin: 0px 0px 20px 0px;
  }
`

const CoverContainer = styled.div`
  position: relative;
  overflow: hidden;
  cursor: pointer;
`

const Cover = styled.img`
  transform: scale(1) translateZ(0);
  border-radius: 5px;
  transition: all 0.3s ease;

  ${CoverContainer}:hover & {
    transform: scale(1.1) rotate(3deg);
  }
`

const DetailsContainer = styled.div`
  padding-right: 15px;
  padding-top: 32px;

  @media (max-width: 1440px) {
    padding-right: 0px;
  }

  h3 {
    margin-bottom: 10px;

    font-weight: 500;
    line-height: 1.4;
    font-family: 'Poppins';
    color: #000;

    a {
      text-decoration: none;
      color: #000;
      font-size: 18px;
      font-weight: 600;
      display: inline-block;
      transition: all 0.3s ease;

      &:hover {
        color: #e54b4b;
      }
    }
  }

  p {
    text-transform: uppercase;
    font-family: 'Poppins';
    font-size: 12px;
    color: #767676;
    font-style: italic;

    a {
      text-decoration: none;
      color: #767676;
      transition: all 0.3s ease;

      &:hover {
        color: #e54b4b;
      }
    }

    span {
      position: relative;
      margin-left: 11px;

      &::before {
        position: absolute;
        content: '';
        margin-top: 1px;
        top: 50%;
        transform: translateY(-50%) rotate(15deg);
        right: 100%;
        background-color: #939393;
        width: 1px;
        height: 9px;
        margin-right: 7px;

        @media (max-width: 768px) {
          display: none;
        }
      }
    }
  }
`

const ModalContent = styled.div`
  position: relative;
  padding: 50px;
`

const ModalCoverContainer = styled.div`
  position: relative;
  max-height: 450px;
  margin-bottom: 40px;

  img {
    height: 100%;
    width: 100%;
  }
`

const ModalDetailsContainer = styled.div`
  margin-bottom: 30px;

  h3 {
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 5px;
    line-height: 1.4;
    font-family: 'Poppins';
    color: #000;
  }

  p {
    text-transform: uppercase;
    font-family: 'Poppins';
    font-size: 12px;
    color: #767676;
    font-style: italic;

    a {
      text-decoration: none;
      color: #767676;
      transition: all 0.3s ease;

      &:hover {
        color: #e54b4b;
      }
    }

    span {
      position: relative;
      margin-left: 11px;

      &::before {
        position: absolute;
        content: '';
        margin-top: 1px;
        top: 50%;
        transform: translateY(-50%) rotate(15deg);
        right: 100%;
        background-color: #939393;
        width: 1px;
        height: 9px;
        margin-right: 7px;
      }
    }
  }
`

const ModalDescriptionContainer = styled.div`
  p {
    margin-bottom: 15px;
  }

  blockquote {
    font-style: italic;
    color: #000;
    border-left: 2px solid #e54b4b;
    padding-left: 20px;
    margin-bottom: 15px;
    quotes: none;
  }
`

const ModalShareContainer = styled.div`
  display: flex;
  align-items: center;

  span {
    font-family: 'Poppins';
    color: #000;
    font-weight: 600;
    display: inline-block;
    padding-right: 20px;
  }

  ul {
    padding: 0;
    margin: 0px;

    list-style-type: none;

    li {
      margin: 0px 10px 0px 0px;
      display: inline-block;

      a {
        text-decoration: none;
        color: #000;
      }
    }
  }
`

function LatestNewsList({ id, cover, title, by, date }) {
  return (
    <React.Fragment>
      <LatestNewsContent key={id}>
        <div data-bs-toggle="modal" data-bs-target={`#exampleModal${id}`}>
          <CoverContainer>
            <Cover src={cover} className="card-img-top" alt={title} />
          </CoverContainer>

          <DetailsContainer>
            <h3>
              <a href="#">{title}</a>
            </h3>
            <p>
              By <a href="#">{by}</a> <span>{date}</span>
            </p>
          </DetailsContainer>
        </div>

        <div
          className="modal fade"
          id={`exampleModal${id}`}
          tabindex="-1"
          aria-labelledby={`exampleModalLabel${id}`}
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <ModalContent className="modal-content">
              <div>
                <ModalCoverContainer>
                  <img src={cover} alt={title} className="w-100" />
                </ModalCoverContainer>

                <ModalDetailsContainer>
                  <h3>{title}</h3>
                  <p>
                    By <a href="#">{by}</a> <span>{date}</span>
                  </p>
                </ModalDetailsContainer>

                <ModalDescriptionContainer>
                  <p>
                    As Vintage decided to have a closer look into fast-paced New
                    York web design realm in person, we get to acquaint with
                    most diverse and exceptionally captivating personalities. As
                    Vintage decided to have a closer look into fast-paced New
                    York web design realm in person, we get to acquaint with
                    most diverse and exceptionally captivating personalities. As
                    Vintage decided to have a closer look into fast-paced New
                    York web design realm in person, we get to acquaint with
                    most diverse and exceptionally captivating personalities.
                  </p>

                  <blockquote>
                    As Vintage decided to have a closer look into fast-paced New
                    York web design realm in person. As Vintage decided to have
                    a closer look into fast-paced New York web design realm in
                    person, we get to acquaint with most diverse and
                    exceptionally captivating personalities. As Vintage decided
                    to have a closer look into fast-paced New York web design
                    realm in person, we get to acquaint with most diverse and
                    exceptionally captivating personalities.
                  </blockquote>

                  <p>
                    As Vintage decided to have a closer look into fast-paced New
                    York web design realm in person, we get to acquaint with
                    most diverse and exceptionally captivating personalities. We
                    encounter professionals with careers to covet and lives to
                    write books about. As Vintage decided to have a closer look
                    into fast-paced New York web design realm in person, we get
                    to acquaint with most diverse and exceptionally captivating
                    personalities. As Vintage decided to have a closer look into
                    fast-paced New York web design realm in person, we get to
                    acquaint with most diverse and exceptionally captivating
                    personalities. As Vintage decided to have a closer look into
                    fast-paced New York web design realm in person, we get to
                    acquaint with most diverse and exceptionally captivating
                    personalities.
                  </p>

                  <ModalShareContainer>
                    <span>Share:</span>

                    <ul>
                      {latestNewsListElements.map(({ id, icone }) => (
                        <li key={id}>
                          <a href="#">
                            <i className={`bi ${icone}`} />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </ModalShareContainer>
                </ModalDescriptionContainer>
              </div>
            </ModalContent>
          </div>
        </div>
      </LatestNewsContent>
    </React.Fragment>
  )
}

export default LatestNewsList
