import React from "react"
import styled from "styled-components"

const Layout = styled.a`
  position: relative;
  text-decoration: none;
  width: 95%;
  height: 95%;
  padding: 1rem 0.5rem;
  background: rgba(0, 0, 0, 0.75);
  color: white;
  border: 0.5rem solid white;
  box-shadow: 0rem 0rem 0.5rem 0.5rem cyan;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  &:link,
  &:visited,
  &:hover,
  &:active {
    color: none;
  }
`

const DescriptionLayer = styled.div`
  padding: 0.1rem 0.75rem;
`

const Title = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
  border-bottom: 0.35rem solid white;
`

const Description = styled.p``

const BackgroundImage = styled.img`
  width: 100%;
  max-height: 50%;
  object-fit: contain;
`

const ProjectSynopsisPage = ({ description, link, thumbnail, title }) => {

  return (
    <Layout href={link} target="_blank" rel="noopener noreferrer">
      <BackgroundImage src={thumbnail} />
      <DescriptionLayer>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </DescriptionLayer>
    </Layout>
  )
}

export default ProjectSynopsisPage
