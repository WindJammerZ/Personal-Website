import React from "react"
import styled from "styled-components"

import { Layout, Info, Title } from "../../styles/styles"
import ProjectCard from "./ProjectCard/ProjectCard"

import { BREAK_POINTS, PROJECT_PAGE_PROFESSIONAL_PROJECTS_INFORMATION, PROJECT_PAGE_PROOF_OF_CONCEPT_INFORMATION } from "../../consts/consts"

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

const Projects = ({ modalShow }) => {
  return (
    <ProjectsLayout id={"projects"}>
      <Title>Projects</Title>
      <ContentLayout>

        <Info>Below is some of my professional work:</Info>
        <ProjectSection>
          {PROJECT_PAGE_PROFESSIONAL_PROJECTS_INFORMATION.map(project =>
            <ProjectCard
              key={project.name}
              modalShow={modalShow}
              title={project.title}
              status={project.status}
              thumbnail={project.thumbnail}
              link={project.link}
              github={project.github}
              description={project.description}
            />
          )}
        </ProjectSection>

        <Info>Below are some of my proof of concept projects:</Info>
        <ProjectSection>
          {PROJECT_PAGE_PROOF_OF_CONCEPT_INFORMATION.map(project =>
            <ProjectCard
              key={project.name}
              modalShow={modalShow}
              title={project.title}
              status={project.status}
              thumbnail={project.thumbnail}
              link={project.link}
              github={project.github}
              description={project.description}
            />
          )}
        </ProjectSection>
      </ContentLayout>
    </ProjectsLayout>
  )
}

export default Projects