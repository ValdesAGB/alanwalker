import React from 'react'
import { skillsElements } from '../data'
import SkillsList from './SkillsList'
import styled from 'styled-components'

const Section = styled.section`
  padding: 135px 0px 140px 0px;
`
const Container = styled.div`
  padding: 0;
  @media (max-width: 1040px) {
    padding: 0 20px;
  }
`

const TextContainer = styled.div`
  padding-right: 50px;

  @media (max-width: 768px) {
    padding-right: 0px;
    margin-bottom: 20px;
  }
`

const Title = styled.h3`
  font-weight: 600;
  margin-bottom: 27px;
  line-height: 1.4;
  font-family: 'Poppins';
  color: #000;
  font-size: 30px;
`

const SkillsContainer = styled.div`
  padding-left: 50px;

  @media (max-width: 768px) {
    padding-left: 10px;
  }
`

function Skills() {
  return (
    <React.Fragment>
      <Section>
        <Container className="container">
          <div className="row align-items-center">
            <TextContainer className="col-md">
              <Title>I have high skills in developing and programming</Title>
              <p>
                I was doing everything in my power to provide me with all the
                experiences to provide cost-effective and high quality products
                to satisfy my customers all over the world
              </p>
            </TextContainer>
            <SkillsContainer className="col-md">
              {skillsElements.map(({ id, skill, level }) => (
                <SkillsList id={id} skill={skill} level={level} />
              ))}
            </SkillsContainer>
          </div>
        </Container>
      </Section>
    </React.Fragment>
  )
}

export default Skills
