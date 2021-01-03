import React from "react"
import { useInView } from 'react-intersection-observer';
import styled, { keyframes } from "styled-components"

import { NeonSkyBackground } from "../../components/Backgrounds/TerrainBackground/NeonSkyBackground"

import { Layout, Info, Title } from "../../styles/styles"

import { BREAK_POINTS } from "../../consts/consts"

import about_me_portrait from "../../imgs/profile_pic.jpg"

const portrait_anim = keyframes`
  0%{
    opacity: 0.5;
    transform: translateY(50%) translateX(-50%) scale(0.5, 1.2);
  }
  50%{
    opacity: 0.8;
    transform: translateY(-100%) translateX(-50%) scale(0.5, 1.2);
  }
  75%{
    opacity: 1;
    transform: translateY(-50%) translateX(-50%) scale(1.2, 0.75);
  }
  85%{
    opacity: 1;
    transform: translateY(-60%) translateX(-50%) scale(0.5, 1.2);
  }

  100%{
    opacity: 1;
    transform: translateY(-50%) translateX(-50%) scale(1, 1);
  }
`

const AboutLayout = styled(Layout)`
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`

const ContentLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  align-items: center;
  margin: 0.5rem 0rem;
  padding: 0.5rem 0.5rem;
  margin-top: auto;
  justify-content: center;
  flex: 1;

  & > * {
    height: 50%;
    margin-bottom: 2rem;
  }

  @media ${BREAK_POINTS.xl} {
    flex-direction: row;

    & > * {
      width: 50%;
    }
  }
`

const PortraitMantle = styled.div`
  height: 22.5rem;
  min-width: 22.5rem;
  max-width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Portrait = styled.img`
  position: absolute;
  top: 40%;
  left: 50%;
  height: 10rem;
  object-fit: cover;
  border-radius: 50%;
  border: 0.5rem solid cyan;
  box-shadow: 0rem 0rem 1rem blue;
  background: transparent;
  opacity: 0;
  animation-name: ${portrait_anim};
  animation-duration: 1s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.02, 1.52, 0.89, 1.34);
`

const PortraitBackground = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
  width: 22.5rem;
  height: 22.5rem;
  background: transparent;
`

const About = () => {

  const { ref, inView } = useInView({
    threshold: 0.75,
    triggerOnce: true
  });

  let background = null
  let portrait = null

  if (inView) {
    background = (
      <PortraitBackground inView={inView}>
        <NeonSkyBackground />
      </PortraitBackground>
    )
    portrait = <Portrait src={about_me_portrait} inView={inView} />

  }

  return (
    <AboutLayout id={"about"}>

      <Title>About Me</Title>
      <ContentLayout>
        <PortraitMantle ref={ref}>
          {background}
          {portrait}
        </PortraitMantle>
        <Info>
          Programming has always been a passion of mine. Since creating "choose
          your own" adventure games in Basic on TI-85 calculators to developing
          dashboards for large construction projects, I've always enjoyed the
          User Experience development aspect of Computer Science.
        </Info>
      </ContentLayout>
    </AboutLayout>
  )
}

export default About
