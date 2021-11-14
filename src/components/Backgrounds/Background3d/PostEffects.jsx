import React, {Suspense, useEffect, useMemo, useRef} from 'react'
import * as THREE from 'three'
import {extend, useThree, useFrame} from '@react-three/fiber'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass'

extend({ 
    EffectComposer, RenderPass, UnrealBloomPass
})

const PostEffects = () => {

    const exposure = 0.75
    const intensity = 1.25
    const luminanceThreshold = 0.5
    const luminanceSmoothing = 0.02

    const composer = useRef()
    const { scene, gl, size, camera } = useThree()
    const aspect = useMemo(() => new THREE.Vector2(512, 512), [])
    useEffect(() => {
        composer.current.setSize(size.width, size.height)
    }, [size])
    useEffect(() => {
        gl.toneMapping = THREE.ReinhardToneMapping
        gl.toneMappingExposure = Math.pow(exposure,4)
    },[gl])
    useFrame(() => composer.current.render(), 1)

    return (
        <Suspense fallback={null}>

            <effectComposer ref={composer} args={[gl]} multisample={16}>
            <renderPass attachArray="passes" scene={scene} camera={camera} />
            <unrealBloomPass attachArray="passes" args={[aspect, intensity, luminanceThreshold, luminanceSmoothing]} />
            </effectComposer>

        </Suspense>
    )
}

export default PostEffects
