import React, { useState, useEffect } from "react"
import styled from "styled-components"

import ProjectSynopsisPage from "./ProjectSynopsisPage"

const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  overscroll-behavior: contain;
  position: fixed;
  top: 0%;
  right: ${props => (props.active ? `0%` : `-150%`)};
  background: rgba(0, 0, 0, 0.8);
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 300ms linear;
  z-index: 1000;
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

const PageModal = ({ show, clicked, pageDetails }) => {
  const [active, setActive] = useState(show)

  useEffect(() => {
    setActive(show)
  }, [show])

  let display = null

  if (pageDetails) {
    display = (
      <ProjectSynopsisPage
        title={pageDetails.title}
        description={pageDetails.description}
        link={pageDetails.link}
        thumbnail={pageDetails.thumbnail}
      />
    )
  }

  return (
    <Layout
      active={active}
    >
      {display}
      <CloseButton onClick={() => clicked(false)}>
        <span>X</span>
      </CloseButton>
    </Layout>
  )
}

export default PageModal
