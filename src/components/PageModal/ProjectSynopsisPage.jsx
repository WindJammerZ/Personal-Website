import React from "react"
import styled from "styled-components"

import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle } from '@fortawesome/free-solid-svg-icons'

import WebLinks from "../WebLinks/WebLinks"

const Layout = styled.div`
  position: relative;
  text-decoration: none;
  width: 90%;
  height: 90%;
  max-width: 50rem;
  padding: 1rem 0.5rem 0.2rem;
  background: rgba(0, 0, 0, 0.75);
  color: white;
  border: 0.5rem solid white;
  border-radius: 5px;
  box-shadow: 0rem 0rem 0.5rem 0.5rem cyan;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
`

const BackgroundImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  border: 0.5rem solid transparent;
  border-radius: 5px;
  object-fit: contain;
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
  height: 50%;
  background: rgba(255, 255, 255, 0);
  display: flex;
  border-radius: 5px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 300ms all ease;
`

const TechTagSection = styled.div`
  margin-top: auto;
  min-width: 100%;
  overflow-y: hidden;
  padding: 1.0rem 0.5rem 0.25rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
`

const TechTag = styled.a`
  background: black;
  padding: 0.1rem 0.5rem;
  color: white;
  border: 0.25rem solid white;
  box-shadow: inset 0rem 0rem 0.4rem 0.1rem cyan;
  border-radius: 0.75rem;
  border-top-left-radius: 5%;
  border-bottom-right-radius: 0.25rem;
  text-decoration: none;
`

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  margin-right: 0.5rem;
`

const DescriptionLayer = styled.div`
  padding: 0.2rem 0.75rem;
  height: 50%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
`

const TitleSection = styled.div`
  text-align: center;
  border-bottom: 0.35rem solid white;
`

const IconSection = styled.div`
  position: absolute;
  width: 100%;
  top: 0%;
  left: 0%;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  background: rgba(0,0,0,0.7);
  overflow: hidden;
`

const Description = styled.p`
  text-align: center;
  max-width: 60ch;
  font-family: "Arimo";
  overflow-y: auto;
  overscroll-behavior: contain;
`

const CloseButton = styled.button`
  cursor: pointer;
  border-radius: 5px;
  border: 0.25rem solid white;
  margin-left: auto;
  padding: 0.25rem;
  background: black;
  color: white;
  font-weight: bolder;

  &:hover{
    background: white;
    color: black;
    }  
`

const ProjectSynopsisPage = ({ description, link, github, thumbnail, title, status, tech, closeClicked }) => {

  let imageStatusOverlay = null

  if (status === "development") {
    imageStatusOverlay = <BackgroundImageOverlay>Coming soon...</BackgroundImageOverlay>
  }

  let iconsDisplay = null

  if (status === "active") {
    iconsDisplay =
      <>
        <WebLinks
          icon={faExternalLinkAlt} link={link} />
        <WebLinks
          icon={faGithub} link={github} />
      </>
  }

  return (
    <Layout>
      <ImageLayer>
        <BackgroundImage src={thumbnail} />
        {imageStatusOverlay}
      </ImageLayer>
      <DescriptionLayer>
        <TitleSection>
          <h2>{title}</h2>
        </TitleSection>

        <Description>{description}</Description>
        <TechTagSection>Built with:
          {tech.map((item, index) => {
            return (
              <TechTag
                href={item.link}
                target="_blank"
                key={`${item.name}${index}`}
                ><StyledFontAwesomeIcon
                  icon={faCircle}
                  transform="shrink-5"
                />{item.name}</TechTag>)
          })}
        </TechTagSection>
      </DescriptionLayer>

      <IconSection>
        {iconsDisplay}
        <CloseButton onClick={() => closeClicked(false)}>
          <span>CLOSE</span>
        </CloseButton>
      </IconSection>
    </Layout>
  )
}

export default ProjectSynopsisPage
