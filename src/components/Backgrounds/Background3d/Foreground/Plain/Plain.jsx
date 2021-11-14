import React, {useMemo, useRef} from 'react'
import * as THREE from 'three'
import {useFrame, useThree} from '@react-three/fiber'

import fs from './shaders/fragment.glsl?raw'
import vs from './shaders/vertex.glsl?raw'

import {COLOR} from '../../../../../consts/consts'

const Plain = () => {

    const mesh = useRef()
    const {r, g, b} = COLOR

    const uniforms = useMemo(() => ({

        uColor: {value: new THREE.Color(r,g,b) },
        uMaxDepth: {value: 1.0},
        uTime: { value: 0.0 }

    }), [])

    const {clock, size} = useThree()

    useFrame(() => {

        uniforms.uTime.value = clock.getElapsedTime()

    })

    return (
        <mesh
            ref={mesh}
            position={[0, -7.5, 0]}
            rotation={[(1.5)*Math.PI, 0, 0]}
            scale={[size.width/4, 33.5, 1]}
        >
            <planeBufferGeometry
                args={[1, 1, 16, 16]}
                />

            <shaderMaterial
                attach="material"
                args={[{
                    fragmentShader: fs,
                    vertexShader: vs,
                    uniforms: uniforms                    
                }]}
            />
        </mesh>
    )
}

export default Plain
