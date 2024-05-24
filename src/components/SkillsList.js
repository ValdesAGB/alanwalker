import React from 'react'
import styled from 'styled-components'

const ProgressBarContainer = styled.div`
  margin-bottom: 27px;
`

const DescriptionContainer = styled.div`
  margin: 0px 0px 7px 0px;
  font-family: 'Poppins';
  font-weight: 500;
  color: #000;
  padding: 0;

  div {
    padding: 0;
  }

  .level {
    text-align: right;
  }
`

const Progress = styled.div`
  height: 8px;
  border-radius: 5px;
`

function SkillsList({ id, skill, level }) {
  const ProgressBar = styled.div`
    width: ${level}%;
    background: #e54b4b;
  `
  return (
    <React.Fragment>
      <ProgressBarContainer key={id}>
        <DescriptionContainer className="row">
          <div className="col-8 col-lg">
            <h6>{skill}</h6>
          </div>

          <div className="col level">
            <h6>{level}%</h6>
          </div>
        </DescriptionContainer>
        <div>
          <Progress
            className="progress"
            role="progressbar"
            aria-label="Basic example"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <ProgressBar className="progress-bar" />
          </Progress>
        </div>
      </ProgressBarContainer>
    </React.Fragment>
  )
}

export default SkillsList
