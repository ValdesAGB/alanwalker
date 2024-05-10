import React from 'react'
import { CV, beforeCover, cover, skills } from '../data'
import styled from 'styled-components'

const CoverContainer = styled.div`
  width: 100%;
  padding-right: 50px;

  .coverContent {
    transform: translate3d(0px, 0px, 0px);
    transform-style: preserve-3d;
    backface-visibility: hidden;

    .cover {
      background-image: url(${cover});
      backface-visibility: hidden;
      display: block;
      left: 0px;
      top: 0px;

      position: absolute !important;
      top: 0px;
      bottom: 0px;
      left: 0px;
      right: 0px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      border-radius: 5px;
      box-shadow: 0px 0px 40px rgb(0 0 0 / 20%);
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
`

const ParagraphContainer = styled.div`
  padding-top: 27px;
  padding-bottom: 28px;
`

const SkillsContainer = styled.div`
  width: 100%;
  float: left;
  margin-bottom: 27px;

  ul {
    margin: 0px 0px 0px -20px;
    list-style-type: none;

    li {
      margin: 0px 0px 13px 0px;
      float: left;
      width: 50%;
      position: relative;
      padding-left: 20px;

      i {
        width: 15px;
        height: 15px;
        position: absolute;
        left: 0px;
        color: #000;
        margin-top: -1px;
        font-weight: 900;
      }

      span {
        font-weight: 600;
        font-family: 'Poppins';
        color: #000;
        font-style: italic;
      }
    }
  }
`

const BtnContainer = styled.div`
  a {
    text-decoration: none;
    color: #fff;
    display: inline-block;
    background-color: #e54b4b;
    border: 2px solid #e54b4b;
    padding: 10px 40px;
    border-radius: 5px;
  }
`

function AboutsMe() {
  return (
    <React.Fragment>
      <section className="container">
        <div>
          <div className="row align-items-center">
            <div className="col-5">
              <CoverContainer>
                <div className="coverContent">
                  <img src={beforeCover} alt="Me" className="w-100" />

                  <div className="cover"></div>
                </div>
              </CoverContainer>
            </div>

            <div className="col">
              <div>
                <Title>
                  ABOUT <span>ME</span>
                </Title>
              </div>

              <ParagraphContainer>
                <p>
                  Hello! I'm Alan Walker. I'm a web developer, and I'm very
                  passionate and dedicated to my work. With 20 years experience
                  as a professional web developer, I have acquired the skills
                  and knowledge necessary to make your project a success. I
                  enjoy every step of the design process, from discussion and
                  collaboration.
                </p>
              </ParagraphContainer>

              <SkillsContainer>
                <ul>
                  {skills.map(({ id, skill }) => (
                    <li key={id}>
                      <div>
                        <i className="bi bi-chevron-double-right" />
                        <span>{skill}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </SkillsContainer>

              <BtnContainer>
                <a href={CV}> Download CV</a>
              </BtnContainer>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default AboutsMe
