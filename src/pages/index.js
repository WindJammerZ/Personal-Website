import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'intersection-observer';
import React, { useEffect, useState } from "react"
import styled from "styled-components"

import { isIE } from 'react-device-detect';

import Main from "../sections/Main/Main"
import About from "../sections/About/About"
import Resume from "../sections/Resume/Resume"
import Projects from "../sections/Projects/Projects"
import Contact from "../sections/Contact/Contact"
import NavbarButton from "../components/Navbar/NavbarButton"
import TerrainBackground from "../components/Backgrounds/TerrainBackground/TerrainBackground"
import PageModal from '../components/PageModal/PageModal';

const Layout = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
`

const ErrorDisplay = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;
  color: white;
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

const Home = () => {
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

  if (isIE) {
    return (
      <Layout>
        <ErrorDisplay>Unfortunately Internet Explorer is not supported.  Please use a modern browser such as Chrome/Opera/FireFox/MS Edge</ErrorDisplay>
      </Layout>
    )
  }

  return (
    <Layout>
      <TerrainBackground />
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

export default Home