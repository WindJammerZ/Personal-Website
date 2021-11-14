import React from "react"
import styled, { keyframes } from "styled-components"

import CallToActionButton from '../../components/Buttons/CallToActionButton'

import { Layout, StyledName } from "../../styles/styles"

const subtitleFadeIn = keyframes`
    from{
        opacity: 0;
        transform: translateY(70%);
    }
    to{
        opacity: 1;
        transform: translateY(0%);
    }
`

const MainLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
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

const StyledCallToActionButton = styled(CallToActionButton)`
  opacity: 0;
  animation-name: ${subtitleFadeIn};
  animation-delay: 3.5s;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  transition: box-shadow 300ms linear, background 300ms linear,
    color 300ms linear, text-shadow 300ms linear;
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
      <StyledCallToActionButton
        clicked={() => callToActionHandler(`projects`)}
      >
        View My Work
      </StyledCallToActionButton>
    </MainLayout>
  )
}

export default Main
