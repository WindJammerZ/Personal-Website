import React, { useState, useEffect } from "react"
import styled from "styled-components"

import ProjectSynopsisPage from "./ProjectSynopsisPage"

const Layout = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0%;
  left: 0%;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  display: flex;
  transform: ${props => (props.active ? `scaleY(1)` : `scaleY(0)`)};
  align-items: center;
  justify-content: center;
  overscroll-behavior-y: contain;
  transition: all 200ms linear;
  z-index: 1000;
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
        status={pageDetails.status}
        link={pageDetails.link}
        github={pageDetails.github}
        thumbnail={pageDetails.thumbnail}
        closeClicked={clicked}
      />
    )
  }

  return (
    <Layout
      active={active}
    >
      {display}
    </Layout>
  )
}

export default PageModal
