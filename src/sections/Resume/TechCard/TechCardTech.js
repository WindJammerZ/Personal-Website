import React from "react"
import styled from "styled-components"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { BREAK_POINTS } from '../../../consts/consts'

const Layout = styled.div`
  height: 3.5rem;
  width: 100%;
  background: transparent;

  @media ${BREAK_POINTS.lg}{
    perspective: 1000px;

    &:hover #techholder {
      transform: rotateX(180deg);
    }
  }
`

const TechHolder = styled.div.attrs(props => ({
  id: `techholder`,
}))`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 300ms cubic-bezier(0.06, 0.06, 0.29, 1.37);
  transform-style: preserve-3d;
`

const TechFront = styled.div`
  height: 100%;
  width: 100%;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;

  @media ${BREAK_POINTS.lg}{
    position: absolute;
  }
`

const TechBack = styled.div`
  height: 100%;
  width: 100%;
  user-select: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;

  @media ${BREAK_POINTS.lg}{
    position: absolute;
    transform: rotateX(180deg);
  }
`

const TechCardTech = ({
  techicon,
  techiconcolor,
  techiconbgcolor = "transparent",
  techtext,
}) => {
  return (
    <Layout>
      <TechHolder id={`techholder`}>
        <TechFront>
          <FontAwesomeIcon
            icon={techicon}
            color={techiconcolor}
            background={techiconbgcolor}
          />
        </TechFront>
        <TechBack>
          <h5>{techtext}</h5>
        </TechBack>
      </TechHolder>
    </Layout>
  )
}

export default TechCardTech
