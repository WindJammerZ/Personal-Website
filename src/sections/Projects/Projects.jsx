import React, {useEffect, useRef} from "react"
import gsap from 'gsap'
import styled from "styled-components"
import { useInView } from 'react-intersection-observer';

import { Layout, Info, Title } from "../../styles/styles"
import ProjectCard from "./ProjectCard/ProjectCard"

import { BREAK_POINTS, PROJECT_PAGE_PROFESSIONAL_PROJECTS_INFORMATION} from "../../consts/consts"

const ProjectsLayout = styled(Layout)`
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  
  & > * {
    margin-bottom: 2rem;
  }
`

const ContentLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`

const ProjectSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 2rem 2rem;
  align-items: center;
  justify-content: center;
  flex: 1;

  @media ${BREAK_POINTS.lg} {
    flex-direction: row;
  }
`

const StyledInfo = styled(Info)`

`

const InfoWrapper = styled.div`

`

const Projects = ({ modalShow }) => {
  
  const tlDuration = 1.0

  const tl = useRef()
  const infoSectionRef = useRef()
  
  const projectsTL = useRef()

  const { ref, inView } = useInView({
    threshold: 0.25,
    triggerOnce: true
  })
  
  useEffect(() => {

    tl.current = gsap.timeline().pause()
    tl.current.fromTo(infoSectionRef.current,
      {opacity: 0, x: 100},
      {opacity: 1, x: 0, duration: tlDuration}
      )

  }, [])

  useEffect(() => {

    if(!inView) return

    tl.current.play()

  }, [inView])

  return (
    <ProjectsLayout id={"projects"} >
      <Title>Projects</Title>
      <ContentLayout>
        <InfoWrapper ref={ref}>
          <StyledInfo ref={infoSectionRef}>
            Below is some of my professional work:
          </StyledInfo>       
        </InfoWrapper> 
        <ProjectSection>
          {PROJECT_PAGE_PROFESSIONAL_PROJECTS_INFORMATION.map((project, index) =>
            <ProjectCard
              index={index}
              key={project.name}
              modalShow={modalShow}
              title={project.title}
              status={project.status}
              thumbnail={project.thumbnail}
              link={project.link}
              github={project.github}
              description={project.description}
              tech={project.tech}
            />
          )}
        </ProjectSection>
      </ContentLayout>
    </ProjectsLayout>
  )
}

export default Projects