import React, { useState } from "react"
import styled from "styled-components"

import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { BREAK_POINTS } from '../../consts/consts'


const Layout = styled.div`
  position: relative;
  text-decoration: none;
  width: 90%;
  height: 90%;
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
  max-width: 100%;
  max-height: 100%;
  border: 0.5rem solid transparent;
  border-radius: 5px;
  object-fit: contain;
  /* transition: 300ms all ease;

  &:hover{
    box-shadow: 1rem 1rem 1rem black;
    border-color: white;
    box-shadow: 0rem 0rem 0.5rem 0.5rem pink;
  } */

`

const BackgroundImageOverlay = styled.div`
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  color: white;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`

const NotAvailableOverlay = styled(BackgroundImageOverlay)`
  background: rgba(0, 0, 0, 0.75);
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

const DescriptionLayer = styled.div`
  padding: 0.1rem 0.75rem;
  height: 50%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`

const TitleSection = styled.div`
  margin-bottom: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`

const Title = styled.h2`
  width: 100%;
  text-align: center;
  margin-bottom: 1rem;
  border-bottom: 0.35rem solid white;

`

const IconSection = styled.div`
  position: absolute;
  bottom: 0%;
  left: 50%;
  transform: translate(-50%, 0%);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  background: rgba(0,0,0,0.7);
  border: 0.25rem solid white;
  box-shadow: 0rem 0rem 1rem cyan;
`

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  pointer-events: none;

  &:hover{
    color: cyan;
    background: white;
    box-shadow: 1rem 5rem 10rem cyan;
  }
`

const IconLayer = styled.div`
  cursor: ${props => props.hoverAffect ? `pointer` : `initial`};
  border-radius: 5px;
  border: 0.25rem solid transparent;
  margin: 0rem 0.5rem;
  padding: 0.25rem;
  background: black;
  color: ${props => props.hoverAffect ? `white` : `grey`};

  &:hover{
    background: ${props => props.hoverAffect ? `white` : `black`};
    border-color: ${props => props.hoverAffect ? `white` : `transparent`};

    &>${StyledFontAwesomeIcon}{
      color: ${props => props.hoverAffect ? `black` : `grey`};
    }
  }
`

const Description = styled.p`
  width: 100%;
  overflow-y: auto;
  overscroll-behavior: contain;
`

const CloseButton = styled.button`
  position: absolute;
  cursor: pointer;
  top: 0%;
  right: 0%;
  width: 2rem;
  height: 2rem;
  font-weight: 900;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: pink;
  color: rgba(0, 0, 0, 0.7);
  transition: all 200ms linear;

  &:hover {
    color: pink;
    background: rgba(0, 0, 0, 0.7);
    border: 0.2rem solid pink;
    box-shadow: 0rem 0rem 0.5rem 0.5rem pink;
  }
`

const ProjectSynopsisPage = ({ description, link, github, thumbnail, title, status, closeClicked }) => {

  const [hasLink, setHasLink] = useState(link ? true : false)
  const [hasGithub, setHasGithub] = useState(github ? true : false)

  const linkClickHandler = (link) => {

    if (!link) return

    window.open(link);
  }

  let imageStatusOverlay = null

  if (status === "development") {
    imageStatusOverlay = <NotAvailableOverlay>Coming soon...</NotAvailableOverlay>
  }

  let linkStatusOverlay = null

  if (hasLink) {
    linkStatusOverlay =
      <IconLayer
        onClick={() => linkClickHandler(link)}
        hoverAffect={hasLink}>
        <StyledFontAwesomeIcon
          icon={faExternalLinkAlt}
          transform="grow-5"
        />
      </IconLayer>
  } else {
    linkStatusOverlay =
      <IconLayer
        hoverAffect={hasLink}
      >
        <StyledFontAwesomeIcon
          icon={faExternalLinkAlt}
          transform="grow-5"
        />
      </IconLayer>
  }

  let gitStatusOverlay = null

  if (hasGithub) {
    gitStatusOverlay =
      <IconLayer
        hoverAffect={hasGithub}
        onClick={() => linkClickHandler(github)}>
        <StyledFontAwesomeIcon
          icon={faGithub}
          transform="grow-5"
        />
      </IconLayer>
  } else {
    gitStatusOverlay =
      <IconLayer

        hoverAffect={hasGithub}>
        <StyledFontAwesomeIcon
          icon={faGithub}
          transform="grow-5"
        />
      </IconLayer>
  }

  let iconSectionDisplay = null

  if (status === "active") {
    iconSectionDisplay =
      <IconSection
        status={status}>
        {linkStatusOverlay}
        {gitStatusOverlay}
      </IconSection>
  }

  return (
    <Layout>
      <ImageLayer>
        <BackgroundImage src={thumbnail} />
        {iconSectionDisplay}
        {imageStatusOverlay}
      </ImageLayer>
      <DescriptionLayer>
        <TitleSection>
          <Title>{title}</Title>
        </TitleSection>
        <Description>{description}</Description>
      </DescriptionLayer>
      <CloseButton onClick={() => closeClicked(false)}>
        <span>X</span>
      </CloseButton>
    </Layout>
  )
}

export default ProjectSynopsisPage
