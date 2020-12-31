import React from "react"
import styled from "styled-components"

import TechCardTech from './TechCardTech'

const Layout = styled.div`
  --bg-color: rgb(65, 65, 65);
  --boxshadow-color: rgb(15, 15, 15);
  height: 15rem;
  width: 12.5rem;
  padding: 0.5rem 0.5rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: rgba(0, 0, 0, 0.75);
  color: white;
  border-radius: 0.5rem;
  box-shadow: inset 0rem 0rem 1rem purple, 0rem 0rem 1rem 0.5rem purple;
`

const TitleSection = styled.div`
  width: 100%;
  border-bottom: 1px solid lightblue;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h3`
  text-align: center;
`

const TechSection = styled.div`
  width: 100%;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`


const TechCard = ({ section, name, icon, techs }) => {
  return (
    <Layout>
      <TitleSection>
        <Title>{name}</Title>
      </TitleSection>
      <TechSection>
        {techs.map((item, index) => {
          return (
            <TechCardTech
              key={index}
              techicon={item.icon}
              techalt={item.icon_alt}
              techiconcolor={item.color}
              techiconbgcolor={item.bgcolor}
              techtext={item.name}
            />
          )
        })}
      </TechSection>
    </Layout>
  )
}

export default TechCard
