import React, { useEffect, useState } from "react"
import styled from "styled-components"

import Main from "./sections/Main/Main"
import About from "./sections/About/About"
import Resume from "./sections/Resume/Resume"
import Projects from "./sections/Projects/Projects"
import Contact from "./sections/Contact/Contact"
import NavbarButton from "./components/Navbar/NavbarButton"
import PageModal from './components/PageModal/PageModal';
import Background from "./components/Backgrounds/Background3d/Background"

const Layout = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
`

const ContentLayout = styled.main`
  position: absolute;
  top: 0%;
  right: 0%;
  width: 100%;

  &>section{
    margin-bottom: 1rem;
  }
`

function App() {
  const [pageLoaded, setPageLoaded] = useState(false)
  const [pageTouch, setPageTouch] = useState(false)
  const [modalShow, setModalShow] = useState(false)
  const [projectPageDetails, setProjectPageDetails] = useState(null)

  useEffect(() => {
    setPageLoaded(true)
  }, [])

  const menuClosedHandler = menuClosed => {
    setPageTouch(() => !menuClosed)
  }

  const modalShowHandler = (show, details) => {
    setProjectPageDetails(details)
    setModalShow(show)
  }

  if (!pageLoaded) {
    return null
  }

  return (
    <Layout>
      <Background />
      <ContentLayout onClick={() => setPageTouch(() => true)}>
        <Main />
        <About />
        <Resume />
        <Projects modalShow={modalShowHandler} />
        <Contact />
      </ContentLayout>

      <NavbarButton pageTouch={pageTouch} menuClosed={menuClosedHandler} />
      <PageModal show={modalShow} clicked={modalShowHandler} pageDetails={projectPageDetails} />
    </Layout>
  )
}

export default App
