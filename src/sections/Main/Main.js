import React from "react"
import styled, { keyframes } from "styled-components"

import CallToActionButton from '../../components/Buttons/CallToActionButton'

import { Layout, StyledName } from "../../styles/styles"

const MainLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const mainAnimation = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`

const HeadLayout = styled.div`
  user-select: none;
  padding: 0.1rem 0.2rem;
  margin-bottom: 0.2rem;
  display: flex;
  text-align: center;
  z-index: 10;
  animation: ${mainAnimation} 1s ease 1 forwards;
`

const Main = () => {
  const callToActionHandler = clickedID => {
    const elementToScroll = document.getElementById(clickedID)
    elementToScroll.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <MainLayout id={"main"}>
      <HeadLayout>
        <h1>
          Hi, I'm{" "}
          <StyledName onClick={() => callToActionHandler(`about`)}>
            Jonathan Kent
          </StyledName>
          . I like creating User Experiences.
        </h1>
      </HeadLayout>
      <CallToActionButton
        clicked={() => callToActionHandler(`projects`)}
      >
        View My Work
      </CallToActionButton>
    </MainLayout>
  )
}

export default Main
