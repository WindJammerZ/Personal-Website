import React, {useEffect,  useRef, useState} from "react"
import gsap from 'gsap'
import styled, { keyframes } from "styled-components"
import { useInView } from "react-intersection-observer"

import TechCardTech from './TechCardTech'

const LayoutWrapper = styled.div`
    height: 15rem;
    width: 12.5rem;
    background: transparent;
    margin-bottom: 2rem;
`

const Layout = styled.div`
  --bg-color: rgb(65, 65, 65);
  --boxshadow-color: rgb(15, 15, 15);
  height: 100%;
  width: 100%;
  padding: 0.5rem 0.5rem;
  transform: translateX(-10%);
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

const TechCard = ({ name, techs }) => {
  
  const tl = useRef()
  const techCardRef = useRef()

  const tlDuration = 1.0

  const { ref, inView } = useInView({
    threshold: 0.75,
    triggerOnce: true
  })

  const [animOver, setAnimOver] = useState(false)

  useEffect(() => {   

    if (!inView) return

    tl.current.play()

  }, [inView])  

  useEffect(() => {

    tl.current = gsap.timeline().pause()
    tl.current.fromTo(techCardRef.current,
      {opacity: 0, x: 100},
      {opacity: 1, x: 0, duration: tlDuration,
      onComplete: () => {
        setAnimOver(true)
      }
    }
      )

  }, [])

  return (
    <LayoutWrapper ref={ref}>
      <Layout ref={techCardRef}>
        <TitleSection>
          <Title>{name}</Title>
        </TitleSection>
        <TechSection>
          {techs.map((item, index) => {
            return (
              <TechCardTech
                index={index}
                key={index}
                techicon={item.icon}
                techalt={item.icon_alt}
                techiconcolor={item.color}
                techiconbgcolor={item.bgcolor}
                techtext={item.name}
                animate={animOver}
              />
            )
          })}
        </TechSection>
      </Layout>    
    </LayoutWrapper>
  )
}

export default TechCard
