import React, { forwardRef, Suspense, useMemo, useEffect, useRef } from "react"
import { useLoader, useThree, useFrame } from "@react-three/fiber"
import * as THREE from 'three'
import {
    SMAAImageLoader,
    BlendFunction,
    DepthOfFieldEffect,
    // EffectComposer,
    EffectPass,
    RenderPass,
    SMAAEffect,
    SSAOEffect,
    NormalPass,
    BloomEffect,
    VignetteEffect,
    BlurPass, Resizer, KernelSize
} from "postprocessing"
import {Bloom, Sepia} from '@react-three/postprocessing'
import {UnrealBloomPass} from 'three/examples/jsm/postprocessing/UnrealBloomPass'
import {EffectComposer} from 'three/examples/jsm/postprocessing/EffectComposer'
import { useControls } from "leva"

function PostEffectsAlt() {

    const { gl, scene, camera, size } = useThree()
    
    gl.toneMapping = THREE.ReinhardToneMapping;
    
    const smaa = useLoader(SMAAImageLoader)
    
    const unrealBloomPass = new UnrealBloomPass(
        new THREE.Vector2(size.width, size.height),
        0.7,
        0.0,
        0.0 )

    const composer = useMemo(() => {
    
        const composer = new EffectComposer(gl)

        const renderPass = new RenderPass(scene, camera)

        const SMAA = new SMAAEffect(...smaa)
        SMAA.colorEdgesMaterial.setEdgeDetectionThreshold(0.1)

        const normalPass = new NormalPass(scene, camera)

        // const aOconfig = {
        //     blendFunction: BlendFunction.MULTIPLY,
        //     samples: 3, // May get away with less samples
        //     rings: 4, // Just make sure this isn't a multiple of samples
        //     distanceThreshold: 0.4,
        //     distanceFalloff: 0.5,
        //     rangeThreshold: 0.5, // Controls sensitivity based on camera view distance **
        //     rangeFalloff: 0.01,
        //     luminanceInfluence: 0.6,
        //     radius: 2, // Spread range
        //     intensity: 5,
        //     bias: 0.5
        // };
        // const AO = new SSAOEffect(
        //     camera,
        //     normalPass.renderTarget.texture,
        //     aOconfig
        // )
        const BLOOM = new BloomEffect({
            opacity: 1,
            blendFunction: BlendFunction.SCREEN,
            height: 300,
            luminanceThreshold: 0.7,
            luminanceSmoothing: 0.5
        })

        const DEPTHOFFIELD = new DepthOfFieldEffect(camera,{
            focusDistance: 0.0,
			focalLength: 0.048,
			bokehScale: 2.0,
			height: 480
        })

        const VIGNETTE = new VignetteEffect({
            eskil: false,
			offset: 0.35,
			darkness: 0.5
        })

        const effectPass = new EffectPass(camera, SMAA,
            //  AO, 
            //  BLOOM,
            //  DEPTHOFFIELD,
            // VIGNETTE
             )
        effectPass.renderToScreen = true
        // unrealBloomPass.renderToScreen = true
        // console.log(unrealBloomPass)
        // console.log(composer)
        composer.addPass(renderPass)
        composer.addPass(normalPass)
        composer.addPass(effectPass)
        composer.addPass(unrealBloomPass)

        return composer
    }, [])

    useEffect(() => void composer.setSize(size.width, size.height), [size]);
    
    return useFrame((_, delta) => composer.render(delta), 1);
}

export default function Effect() {
    return (
        <Suspense fallback={null}>
            <PostEffectsAlt/>
        </Suspense>
    );
}