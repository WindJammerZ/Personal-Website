import React from "react"
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
  border: 0.5rem solid purple;
  color: white;
  border-radius: 0.5rem;
  box-shadow: inset 0rem 0rem 1rem rgba(255, 0, 255, 0.8),
    0rem 0rem 1rem 0.5rem rgba(255, 0, 255, 0.8);
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
    bottom: 0%;
    left: 0%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h3`
  text-align: center;
`

const ProjectCard = ({ modalShow, title, thumbnail, link, description }) => {
  return (
    <Layout
      onClick={() => modalShow(true, { title, thumbnail, link, description })}
    >
      <ProjectImg src={thumbnail} />
      <DescriptionSection>
        <Title>{title}</Title>
      </DescriptionSection>
    </Layout>
  )
}

export default ProjectCard
