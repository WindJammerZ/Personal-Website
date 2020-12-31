import React from "react"
import styled from "styled-components"

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

  @media ${BREAK_POINTS.lg} {
    flex-direction: row;
  }
`

const Resume = () => {
  return (
    <ResumeLayout id={"resume"}>
      <Title>Résumé</Title>
      <Info>
        I am passionate about creating User Experiences that help solve
        problems. My primary focus is Front End Development but I also have
        experience with Back End Development. Below are the technologies I have
        used:
      </Info>
      <TechCardSection>
        {TECH_HIERARCHY.map((item, index) => {
          return (
            <TechCard
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
