import React, { useEffect, useRef, useState } from "react"
import gsap from 'gsap'
import styled from "styled-components"
import { useInView } from "react-intersection-observer"

const LayoutWrapper = styled.div`
  height: 15rem;
  width: 12.5rem;
  margin: 0rem 2rem;
  margin-bottom: 2rem;
  background: transparent;
`

const Layout = styled.div`
  --bg-color: rgb(65, 65, 65);
  --boxshadow-color: rgb(15, 15, 15);
  cursor: pointer;
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: rgba(0, 0, 0, 0.75);
  border: 0.5rem solid rgba(255, 0, 255, 0.5);
  color: rgba(255, 255, 255, 1);
  border-radius: 0.5rem;
  box-shadow: inset 0rem 0rem 1rem rgba(255, 0, 255, 0.8),
    0rem 0rem 1rem 0.5rem rgba(255, 0, 255, 0.8);
  transition: border, transform, box-shadow 200ms ease;

  &:hover{
    border: 0.5rem solid rgba(255, 0, 255, 0.8);
    transform: scale(1.2);
    box-shadow: inset 0rem 0rem 1rem rgba(255, 0, 255, 0.8),
    0rem 0rem 2rem 0.5rem rgba(255, 0, 255, 1);
  }
`

const ProjectImg = styled.img`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 0%;
  transform: translateY(-50%);
`

const DescriptionSection = styled.div`
  position: absolute;
  bottom: ${props => props.hovering ? `50%` : `0%`};
  transform: ${props => props.hovering ? `translateY(50%)` : `translateY(0%)`};
  left: 0%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-shadow: 0rem 0rem ${props => props.hovering ? `2.5rem` : `0rem`} rgba(255, 0, 255, 1);
  transition: all 200ms ease;
  overflow-y: auto;
`

const Title = styled.h3`
  text-align: center;
`

const ProjectCard = ({ modalShow, title, status, thumbnail, link, github, description, tech }) => {

  const [hover, setHover] = useState(false);

  const tlDuration = 1.0

  const tl = useRef()
  const projectCardRef = useRef()

  const { ref, inView } = useInView({
    threshold: 0.75,
    triggerOnce: true
  })

  useEffect(() => {

    tl.current = gsap.timeline().pause()
    tl.current.fromTo(projectCardRef.current,
      {opacity: 0, x: -100},
      {opacity: 1, x: 0, duration: tlDuration})

  },  [])

  useEffect(() => {

    if(!inView) return
    tl.current.play()

  }, [inView])

  const mouseHoverHandler = (hovered) => {
    setHover(hovered)
  }

  return (
    <LayoutWrapper ref={ref}>
      <Layout
        onClick={() => modalShow(true, { title, thumbnail, status, link, github, description, tech })}
        onMouseEnter={() => mouseHoverHandler(true)}
        onMouseLeave={() => mouseHoverHandler(false)}
        ref={projectCardRef}      
      >
        <ProjectImg src={thumbnail} />
        <DescriptionSection hovering={hover}>
          <Title>{title}</Title>
        </DescriptionSection >
      </Layout>   
    </LayoutWrapper> 
  )
}

export default ProjectCard
