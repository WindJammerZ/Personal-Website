import React from "react"
import styled from "styled-components"

import { Layout, Info, Title } from "../../styles/styles"
import ProjectCard from "./ProjectCard/ProjectCard"

import { BREAK_POINTS, PROJECT_PAGE_PROOF_OF_CONCEPT_INFORMATION } from "../../consts/consts"

const PortfolioLayout = styled(Layout)`
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

const Portfolio = ({ modalShow }) => {
  return (
    <PortfolioLayout id={"portfolio"}>
      <Title>Portfolio</Title>
      <ContentLayout>

        <Info>Below is some of my work:</Info>
        <ProjectSection>
          Updating soon...
        </ProjectSection>

        <Info>Below are some of my proof of concept projects:</Info>
        <ProjectSection>
          {PROJECT_PAGE_PROOF_OF_CONCEPT_INFORMATION.map(project =>
            <ProjectCard
              key={project.name}
              modalShow={modalShow}
              title={project.title}
              thumbnail={project.thumbnail}
              link={project.link}
              description={project.description}
            />
          )}
        </ProjectSection>
      </ContentLayout>
    </PortfolioLayout>
  )
}

export default Portfolio