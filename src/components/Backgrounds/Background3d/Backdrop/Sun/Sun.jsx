import React, {useMemo,useRef} from 'react'
import * as THREE from "three";
import {useFrame, useThree} from '@react-three/fiber'

import fs from './shaders/fragment.glsl?raw'
import vs from './shaders/vertex.glsl?raw'

const Sun = () => {
    
    const mesh = useRef()

    const uniforms = useMemo(() => ({

        uResolution: { value: new THREE.Vector2(1.0, 1.0)},
        uTime: { value: 0.0 }

    }), []);

    const {clock, size} = useThree()

    useFrame(() => {

        uniforms.uTime.value = clock.getElapsedTime()

    })
    
    const sunScaleDivisor = 80

    let scale = size.width/sunScaleDivisor <= 15 ? 15   :
                size.width/sunScaleDivisor > 20 ? 20    :
                size.width/sunScaleDivisor

    return (
        <mesh
            ref={mesh}
            scale={[scale, scale, scale]}
            position={[0, 8, 25]}
        >
            <sphereBufferGeometry
                args={[1, 50, 50]}
                attach="geometry"
            />
            <shaderMaterial
                attach="material"
                args={[{
                    fragmentShader: fs,
                    vertexShader: vs,
                    transparent: true,
                    uniforms: uniforms
                }]}
            />

        </mesh>
    )
}

export default Sun
