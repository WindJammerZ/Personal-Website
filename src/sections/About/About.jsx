import React, {useEffect, useRef} from "react"
import { useInView } from 'react-intersection-observer';
import styled from "styled-components"
import gsap from 'gsap'

import { NeonSkyBackground } from "../../components/Backgrounds/NeonSkyBackground/NeonSkyBackground"
import { Layout, Info, Title } from "../../styles/styles"
import { BREAK_POINTS } from "../../consts/consts"

import about_me_portrait from "../../imgs/profile/profile_pic.jpg"

const AboutLayout = styled(Layout)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ContentLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.5rem 0.5rem;
  margin-top: auto;
  gap: 2rem;
  flex: 1;

  & > * {
    width: 100%;
    margin-bottom: 2rem;
  }

  @media ${BREAK_POINTS.xl} {
    flex-direction: row;
    justify-content: space-around;

    & > * {
      width: 50%;
    }
  }
`

const PortraitMantle = styled.div`
  height: 20.5rem;
  width: 20.5rem;
  position: relative;
  display: grid;
  place-items: center;
`

const Portrait = styled.img`
  position: absolute;
  top: 13%;
  left: 20.5%;
  width: 11.25rem;
  object-fit: cover;
  border-radius: 50%;
  border: 0.5rem solid cyan;
  box-shadow: 0rem 0rem 1rem blue;
  background: transparent;
  opacity: 0;
  transform: translateY(10%);
`

const PortraitBackground = styled.div`
  --clip-path-background: polygon(0% 0%, 100% 20%, 40% 100%);
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  overflow: hidden;
  clip-path: var(--clip-path-background);
`

const PortraitSubBackground = styled(PortraitBackground)`
  width: 95%;
  height: 95%;
  clip-path: var(--clip-path-background);
`

const StyledInfo = styled(Info)`
`

const InfoLayout = styled.div`
  display: grid;
  place-items: center;
`

const About = () => {

  const picTLRef = useRef()
  const picRef2 = useRef()

  const portraitRef = useRef()

  const infoTLRef = useRef()
  const infoRef2 = useRef()

  const tlDuration = 1.25

  const [picRef, picInView ] = useInView({
    threshold: 0.25,    
    triggerOnce: true
  })

  const [ infoRef, infoInView ] = useInView({
    threshold: 0.25,
    triggerOnce: true
  })

  useEffect(() => {

    picTLRef.current = gsap.timeline().pause()
    picTLRef.current.fromTo(picRef2.current,
        {opacity: 0, x:-100},
        {opacity: 1, x: 0, duration: tlDuration})
    picTLRef.current.fromTo(portraitRef.current,
        {opacity: 0, y: 100},
        {opacity: 1, y: 0, duration: tlDuration},
        `-=${tlDuration/2}`
      )  
    
    infoTLRef.current = gsap.timeline().pause()
    infoTLRef.current.fromTo(infoRef2.current,
        {opacity: 0, x: 100},
        {opacity: 1, x: 0, duration: tlDuration})

  }, [])

  useEffect(() => {

    if(!picInView) return

    picTLRef.current.play()

  }, [picInView])

  useEffect(() => {

    if(!infoInView) return

    infoTLRef.current.play()

  }, [infoInView])

  return (
    <AboutLayout id={"about"}>
      <Title>About Me</Title>
      <ContentLayout>
        <PortraitMantle ref={picRef}>
          <PortraitBackground ref={picRef2}>
            <PortraitSubBackground>
              <NeonSkyBackground />
            </PortraitSubBackground>
          </PortraitBackground>
          <Portrait src={about_me_portrait} ref={portraitRef}/>
        </PortraitMantle>
        <InfoLayout ref={infoRef}>
          <StyledInfo ref={infoRef2}>
            Programming has always been a passion of mine. Since creating "choose
            your own" adventure games in Basic on TI-85 calculators to developing
            dashboards for large construction projects, I've always enjoyed the
            User Experience development aspect of Computer Science.
          </StyledInfo>
        </InfoLayout>
      </ContentLayout>
    </AboutLayout>
  )
}

export default About