import React, {useEffect, useRef } from "react"
import styled from "styled-components"
import gsap from 'gsap'
import { useInView } from 'react-intersection-observer';

import { Layout, Info, Title } from "../../styles/styles"

import { TECH_HIERARCHY, BREAK_POINTS } from "../../consts/consts"

import TechCard from "./TechCard/TechCard"

const ResumeLayout = styled(Layout)`
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;

  & > * {
    margin-bottom: 2rem;
  }
`

const TechCardSection = styled.div`
  width: 100%;
  margin-top: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  flex: 1;
  gap: 2rem;

  @media ${BREAK_POINTS.lg} {
    flex-direction: row;
  }
`

const StyledInfo = styled(Info)`
`

const InfoWrapper = styled.div`
  display: grid;
  place-items: center;
`

const Resume = () => {
  
  const infoTL = useRef()
  const infoSectionRef = useRef()

  const tlDuration = 0.5

  const [ infoRef, infoInView ] = useInView({
    threshold: 0.25,
    triggerOnce: true
  })

  useEffect(() => {

    infoTL.current = gsap.timeline().pause()
    infoTL.current.fromTo(infoSectionRef.current,
      {opacity: 0, x: -100},
      {opacity: 1, x: 0, duration: tlDuration})

  }, [])

  useEffect(() => {

    if(!infoInView) return

    infoTL.current.play()

  }, [infoInView])
  
  return (
    <ResumeLayout id={"resume"} >
      <Title>Résumé</Title>
        <InfoWrapper ref={infoRef}>          
          <StyledInfo ref={infoSectionRef}>
            I am passionate about creating User Experiences that help solve
            problems. My primary focus is Front End Development but I also have
            experience with Back End Development. Below are the technologies I have
            used:
          </StyledInfo>
        </InfoWrapper>
      <TechCardSection>
        {TECH_HIERARCHY.map((item, index) => {
          return (
            <TechCard
              index={index}
              key={index}
              section={item.section}
              name={item.section_name}
              icon={item.icon}
              techs={item.techs}
            />
          )
        })}
      </TechCardSection>
    </ResumeLayout>
  )
}

export default Resume
