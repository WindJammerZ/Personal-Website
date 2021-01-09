import React, { useState } from "react"
import styled from "styled-components"

const Layout = styled.div`
  --bg-color: rgb(65, 65, 65);
  --boxshadow-color: rgb(15, 15, 15);
  cursor: pointer;
  position: relative;
  height: 15rem;
  width: 12.5rem;
  margin: 0rem 2rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: rgba(0, 0, 0, 0.75);
  border: 0.5rem solid rgba(255, 0, 255, 0.5);
  color: rgba(255, 255, 255, 1);
  border-radius: 0.5rem;
  box-shadow: inset 0rem 0rem 1rem rgba(255, 0, 255, 0.8),
    0rem 0rem 1rem 0.5rem rgba(255, 0, 255, 0.8);
  transition: all 200ms ease;

  &:hover{
    border: 0.5rem solid rgba(255, 0, 255, 0.8);
    transform: scale(1.2);
    box-shadow: inset 0rem 0rem 1rem rgba(255, 0, 255, 0.8),
    0rem 0rem 2rem 0.5rem rgba(255, 0, 255, 1);
  }
`

const ProjectImg = styled.img`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 0%;
  transform: translateY(-50%);
`

const DescriptionSection = styled.div`
  position: absolute;
  bottom: ${props => props.hovering ? `50%` : `0%`};
  transform: ${props => props.hovering ? `translateY(50%)` : `translateY(0%)`};
  left: 0%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-shadow: 0rem 0rem ${props => props.hovering ? `2.5rem` : `0rem`} rgba(255, 0, 255, 1);
  transition: all 200ms ease;
  overflow-y: auto;
`

const Title = styled.h3`
  text-align: center;
`

const ProjectCard = ({ modalShow, title, status, thumbnail, link, github, description }) => {

  const [hover, setHover] = useState(false);

  const mouseHoverHandler = (hovered) => {
    setHover(hovered)
  }

  return (
    <Layout
      onClick={() => modalShow(true, { title, thumbnail, status, link, github, description })}
      onMouseEnter={() => mouseHoverHandler(true)}
      onMouseLeave={() => mouseHoverHandler(false)}
    >
      <ProjectImg src={thumbnail} />
      <DescriptionSection hovering={hover}>
        <Title>{title}</Title>
      </DescriptionSection >
    </Layout>
  )
}

export default ProjectCard
