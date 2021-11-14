import React, { Suspense } from 'react'
import { Bloom,DepthOfField, EffectComposer } from "@react-three/postprocessing";
import { KernelSize } from 'postprocessing'
// import { useControls } from "leva";

const PostEffectsAlt2 = () => {
    
  const focusDistance = 2
  const focalLength = 0.1
  const bokehScale = 2
  const intensity_1 = 1
  const luminanceThreshold_1 = 0
  const luminanceSmoothing_1 = 0
  const intensity_2 = 1
  const luminanceThreshold_2 = 0
  const luminanceSmoothing_2 = 0
    // const {
    //   focusDistance, focalLength, bokehScale
    // } = useControls(`Post Processing - DOF`,{
    //     focusDistance: {
    //       min: 0,
    //       max: 4,
    //       value: 2
    //     },
    //     focalLength: {
    //       min: 0,
    //       max: 1,
    //       value: 0.1
    //     },
    //     bokehScale: {
    //       min: 0,
    //       max: 10,
    //       value: 2
    //     }
    //   })
    
    // const {
    //   intensity_1,
    //   luminanceThreshold_1,
    //   luminanceSmoothing_1
    // } = useControls(`Post Processing - Bloom1`,{
    //   intensity_1:{
    //     value: 1.0,
    //     min: 0.0,
    //     max: 10.0,
    //     step: 0.1
    //   },
    //   luminanceThreshold_1:{
    //     value: 0.0,
    //     min: 0.0,
    //     max: 1.0,
    //     step: 0.01
    //   },
    //   luminanceSmoothing_1:{
    //     value: 0.0,
    //     min: 0.0,
    //     max: 1.0,
    //     step: 0.01
    //   }
    // })

    // const {
    //   intensity_2,
    //   luminanceThreshold_2,
    //   luminanceSmoothing_2
    // } = useControls(`Post Processing - Bloom2`,{
    //   intensity_2:{
    //     value: 1.0,
    //     min: 0.0,
    //     max: 10.0,
    //     step: 0.1
    //   },
    //   luminanceThreshold_2:{
    //     value: 0.0,
    //     min: 0.0,
    //     max: 1.0,
    //     step: 0.01
    //   },
    //   luminanceSmoothing_2:{
    //     value: 0.0,
    //     min: 0.0,
    //     max: 1.0,
    //     step: 0.01
    //   }
    // })

    return (
        <Suspense fallback={null}>
            <EffectComposer multisampling={16}>
            <DepthOfField
                focusDistance={focusDistance}
                focalLength={focalLength}
                bokehScale={bokehScale}
            />
            <Bloom kernelSize={KernelSize.HUGE} luminanceThreshold={luminanceThreshold_1} luminanceSmoothing={luminanceSmoothing_1} intensity={intensity_1} />
            <Bloom kernelSize={3} luminanceThreshold={luminanceThreshold_2} luminanceSmoothing={luminanceSmoothing_2} intensity={intensity_2} />
            </EffectComposer>
      </Suspense>
    )
}

export default PostEffectsAlt2
