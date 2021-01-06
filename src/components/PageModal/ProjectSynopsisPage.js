import React, { useState } from "react"
import styled from "styled-components"

const Layout = styled.div`
  position: relative;
  text-decoration: none;
  width: 95%;
  height: 95%;
  padding: 1rem 0.5rem;
  background: rgba(0, 0, 0, 0.75);
  color: white;
  border: 0.5rem solid white;
  border-radius: 5px;
  box-shadow: 0rem 0rem 0.5rem 0.5rem cyan;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

`

const BackgroundImage = styled.img`
    cursor: pointer;

  max-width: 100%;
  max-height: 100%;
  border: 0.5rem solid transparent;
  border-radius: 5px;
  object-fit: contain;
  transition: 300ms all ease;

  &:hover{
    box-shadow: 1rem 1rem 1rem black;
    border-color: white;
    box-shadow: 0rem 0rem 0.5rem 0.5rem pink;
  }

`

const BackgroundImageOverlay = styled.div`
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
  color: white;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ImageLayer = styled.div`
  position: relative;
  width: 100%;
  max-height: 70%;
  background: rgba(255, 255, 255, 0);
  display: flex;
  border-radius: 5px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  transition: 300ms all ease;
`

const DescriptionLayer = styled.div`
  padding: 0.1rem 0.75rem;
  width: 100%;
`

const Title = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
  border-bottom: 0.35rem solid white;
`

const Description = styled.p``



const ProjectSynopsisPage = ({ description, link, thumbnail, title }) => {

  const [hasLink, setHasLink] = useState(link ? true : false)

  const imgClickHandler = (link) => {

    if (!link) return

    window.open(link);
  }

  let imageStatusOverlay = null

  if (!hasLink) {
    imageStatusOverlay = <BackgroundImageOverlay>Coming soon...</BackgroundImageOverlay>
  }

  return (
    <Layout >
      <ImageLayer>
        {/* <ImageLink > */}
        <BackgroundImage src={thumbnail} onClick={() => imgClickHandler(link)} />
        {imageStatusOverlay}
      </ImageLayer>
      <DescriptionLayer>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </DescriptionLayer>
    </Layout>
  )
}

export default ProjectSynopsisPage
