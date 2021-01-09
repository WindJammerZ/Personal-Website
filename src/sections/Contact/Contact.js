import React from "react"
import styled from "styled-components"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"

import { Layout } from "../../styles/styles"

const ContactLayout = styled(Layout)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  & > a {
    color: lightblue;
  }
`

const ContactList = styled.div`
  width: 100%;
  height: 5rem;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
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
  return (
    <ContactLayout id={"contact"}>
      <h2>Interested in collaborating?</h2>
      <ContactList>
        <a href="mailto:jkent355@gmail.com">
          <StyledFontAwesomeIcon
            icon={faEnvelope}
            color="black"
            transform="shrink-6"
          />
        </a>
        <a href="https://github.com/WindJammerZ" target="_blank" rel="noreferrer">
          <StyledFontAwesomeIcon
            icon={faGithub}
            color="black"
            transform="shrink-6"
          />
        </a>
      </ContactList>
    </ContactLayout>
  )
}

export default Contact
