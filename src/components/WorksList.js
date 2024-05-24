import React from 'react'
import { subCoverWorksElements } from '../data'
import styled from 'styled-components'

const List = styled.li`
  margin: 0px 0px 50px 0px;
`

const Content = styled.div`
  width: 100%;
  height: auto;
  clear: both;
  float: left;
  position: relative;
  border-radius: 5px;
  overflow: hidden;
`

const CoverContainer = styled.div`
  position: relative;
`

const Cover = styled.img`
  opacity: 0;
  width: 100%;
`

const ContainerBetween = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  z-index: 1;
  background-color: #f9f9f9;
  border-radius: 5px;
  opacity: 0;

  transition: opacity 0.5s ease;

  ${Content}:hover & {
    opacity: 0.8;
  }
`

const DetailsContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 30px;
  z-index: 2;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.5s ease;

  ${Content}:hover & {
    opacity: 1;
    transform: translateY(0px);
  }

  span {
    font-family: 'Poppins';
  }

  h3 {
    font-size: 18px;
    font-weight: 600;
    line-height: 1.4;
    font-family: 'Poppins';
    color: #000;
  }
`

const Link = styled.a`
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  z-index: 4;
`

function WorksList({ id, cover, title, categorie, video }) {
  const BgCoverContainer = styled.div`
    background-image: url(${cover});
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 5px;
  `

  return (
    <React.Fragment>
      <List key={id}>
        <Content>
          <CoverContainer>
            <Cover src={subCoverWorksElements} alt={title} />
            <BgCoverContainer></BgCoverContainer>
          </CoverContainer>
          <ContainerBetween />
          <DetailsContainer>
            <span> {categorie} </span>
            <h3> {title} </h3>
          </DetailsContainer>

          <Link href={video ? video : cover} target="_blank" />
        </Content>
      </List>
    </React.Fragment>
  )
}

export default WorksList
