import React, {useEffect, useRef} from "react"
import styled, {keyframes} from "styled-components"
import gsap from 'gsap'

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

  /* this fixes Firefox backface-visibility issue */
  transform: rotateX(0deg);
  
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
  index,
  techicon,
  techiconcolor,
  techiconbgcolor = "transparent",
  techtext,
  animate
}) => {

  const tl = useRef()
  const tlDuration = 0.5

  const techRef = useRef()

  useEffect(() => {

    tl.current = gsap.timeline().pause()
    tl.current.fromTo(techRef.current,
      {opacity: 0},
      {opacity: 1, duration: tlDuration, delay: index/5 })

  }, [])

  useEffect(() => {

    if(!animate) return

    tl.current.play()

  }, [animate])

  return (
    <Layout ref={techRef}>
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
