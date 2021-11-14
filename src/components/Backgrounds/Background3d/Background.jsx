import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import styled from "styled-components"
import Sun from './Backdrop/Sun/Sun'
import Plain from './Foreground/Plain/Plain'
import { Stars } from '@react-three/drei'
import PostEffects from './PostEffects'

const StyledLayout = styled.div`
  position: fixed;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100vh;
  background: black;
  overflow: hidden;
`
const Background = () => {
 
    return (
        <StyledLayout>
            <Canvas
                camera={{
                        near: 1.0,
                        far: 1000.0,
                        position:[0, 5.0, -28]
                }}
                dpr={[1,2]}
                onCreated={({ gl }) => {
                    gl.toneMapping = THREE.ACESFilmicToneMapping
                    gl.setClearColor(new THREE.Color(
                        '#24011c'
                        ), 0.45)
                  }}
            >
                <Suspense fallback={null}>
                    <Stars/>
                    <Sun/>
                    <Plain/>
                </Suspense>
                <PostEffects />                
            </Canvas>
        </StyledLayout>
    )
}

export default Background
