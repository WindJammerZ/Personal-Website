import React, {useEffect, useRef, useState} from 'react'
import styled from 'styled-components'
import gsap from 'gsap'
import {TITLE_COLOR_BLUR, TITLE_COLOR_OUTLINE, TITLE_COLOR} from '../../styles/styles'

const Layout = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    gap: 0.4rem;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Line = styled.div`
    width: 2rem;
    height: 0.35rem;
    background: ${TITLE_COLOR};
    border: 0.1rem solid pink;
    border-radius: .5rem;
    box-shadow: 0 0 0.3rem ${TITLE_COLOR_BLUR}, 0 0 0.75rem ${TITLE_COLOR_BLUR}, -0.1rem 0.05rem 0.5rem ${TITLE_COLOR_OUTLINE},
    0.1rem 0.05rem 0.5rem ${TITLE_COLOR_OUTLINE}, 0 -0.25rem 1rem ${TITLE_COLOR_OUTLINE}, 0 0.25rem 1.5rem ${TITLE_COLOR_OUTLINE};
`

const NavMenuButton = ({ active }) => {

    const tlRef = useRef()
    const topLineRef = useRef()
    const middleLineRef = useRef()
    const bottomLineRef = useRef()

    useEffect(() => {

        tlRef.current = gsap.timeline().pause()
        const totalAnimTime = 0.4    
        
        const tlTop = gsap.timeline()

        tlTop.fromTo(topLineRef.current, {opacity: 1, x: 0, y:0 , rotate: `0deg`, scaleX:1}, {opacity: 0, x:20, y:0, rotate: `0deg`, scaleX:1, duration: totalAnimTime/2})
        tlTop.to(topLineRef.current, {x:70, y:70, rotate: `45deg`, scaleX: 2.0, duration: 0})
        tlTop.to(topLineRef.current, {opacity: 1, x:20, y: 25, duration: totalAnimTime/2})
        tlRef.current.add(tlTop)

        const tlMiddle = gsap.timeline()

        tlMiddle.fromTo(middleLineRef.current, {opacity: 1}, {opacity: 0, duration: totalAnimTime/2})
        tlRef.current.add(tlMiddle, `-=${totalAnimTime}`)

        const tlBottom = gsap.timeline()

        tlBottom.fromTo(bottomLineRef.current, {opacity: 1, x: 0, y:0 , rotate: `0deg`, scaleX: 1}, {opacity: 0, x:-20, y:0, rotate: `0deg`, scaleX: 1, duration: totalAnimTime/2})
        tlBottom.to(bottomLineRef.current, {x:-70, y:70, rotate: `-45deg`, duration: 0})
        tlBottom.to(bottomLineRef.current, {opacity: 1, x:20, y: -0, scaleX: 2.0, duration: totalAnimTime/2})
        tlRef.current.add(tlBottom, `-=${totalAnimTime}`)

    })

    useEffect(() => {

        if(active){

            tlRef.current.play()

        }else{

            tlRef.current.reverse(0)

        }

    }, [active])

    return (
        <Layout>
            <Line ref={topLineRef} />
            <Line ref={middleLineRef} />
            <Line ref={bottomLineRef} />
        </Layout>
    )
}

export default NavMenuButton
