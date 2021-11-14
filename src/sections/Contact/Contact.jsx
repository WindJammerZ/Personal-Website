import React, {useEffect, useRef} from "react"
import gsap from 'gsap'
import styled from "styled-components"
import { useInView } from "react-intersection-observer"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

import { Info, Layout, Title } from "../../styles/styles"

import EmailForm from "../../components/Forms/EmailForm"

const InfoWrapper = styled.div`
`

const ContactLayout = styled(Layout)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 2rem;
`

const ContactList = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
`

const ContactListLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

const ContactLink = styled.a`
`

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  background: var(--calltoactionbtn-bgcolor);
  color: var(--calltoactionbtn-color);
  border-radius: 50%;
  margin: 0rem 0.5rem;
  box-shadow: none;
  transition: background 300ms linear, color 300ms linear,
    box-shadow 300ms linear;

  &:hover {
    background: var(--calltoactionbtn-color);
    color: #ffe6ff;
    text-shadow: 0 0 0.6rem #ffe6ff, 0 0 1.5rem #ff65bd,
      -0.2rem 0.1rem 1rem #ff65bd, 0.2rem 0.1rem 1rem #ff65bd,
      0 -0.5rem 2rem #ff2483, 0 0.5rem 3rem #ff2483;
    box-shadow: 0rem 0rem 1rem 0.5rem #aaaaaa;
  }
`

const Contact = () => {
  
  const tlDuration = 1.0

  const formsTL = useRef()
  const formsSectionRef = useRef()

  const linksTL = useRef()
  const linksSectionRef = useRef()

  const [formsRef, formsInView] = useInView({
    threshold: 0.25,
    triggerOnce: true
  })

  const [linksRef, linksInView] = useInView({
    threshold: 0.25,
    triggerOnce: true
  })
  
  useEffect(() => {

    formsTL.current = gsap.timeline().pause()
    formsTL.current.fromTo(formsSectionRef.current,
      {opacity:0, x:-100},
      {opacity: 1, x: 0, duration: tlDuration})

    linksTL.current = gsap.timeline().pause()
    linksTL.current.fromTo(linksSectionRef.current,
      {opacity: 0, x: 100},
      {opacity: 1, x: 0, duration: tlDuration})

  }, [])

  useEffect(() => {

    if(!formsInView) return
    formsTL.current.play()

  }, [formsInView])

  useEffect(() => {

    if(!linksInView) return
    linksTL.current.play()

  }, [linksInView])

  return (
    <ContactLayout id={"contact"}>
      <Title>Contact</Title>
      <InfoWrapper ref={formsRef}>
        <Info ref={formsSectionRef}>
          <EmailForm/>
        </Info>
      </InfoWrapper>
      <InfoWrapper ref={linksRef}>
        <Info ref={linksSectionRef}>
          <ContactListLayout>
            <h4>Visit me at:</h4>
            <ContactList>
              <ContactLink href="https://github.com/WindJammerZ" target="_blank" rel="noreferrer">
                <StyledFontAwesomeIcon
                  icon={faGithub}
                  color="black"
                  transform="shrink-6"
                />
              </ContactLink>
            </ContactList>
          </ContactListLayout>
        </Info>
      </InfoWrapper>
    </ContactLayout>
  )
}

export default Contact
