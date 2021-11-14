import React from "react"
import styled, { keyframes } from "styled-components"

const Layout = styled.div`
  width: 100%;
  height: 100%;
`

const backgroundMoveAnimation = keyframes`
  from {
    left: 0%;
  }
  to {
    left: 50%;
  }
`

const StyledBackgroundLayout = styled.div`
  width: 100%;
  height: 100%;
  opacity: 1;
  animation: ${backgroundMoveAnimation} 1s ease forwards;
`

const BackgroundLayout = styled(StyledBackgroundLayout)`
  background: linear-gradient(
    to left,
    rgb(26, 2, 26),
    rgb(4, 4, 59),
    rgb(20, 20, 58)
  );
`

const fadeEffect = keyframes`
    0% {
      opacity: 0;
    }
    30%,
    70% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  `

const Layer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: transparent;
  top: 0%;
  left: 0%;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
`

const frontLayerAnimation = keyframes`
    from {    
      left: -100%;
    }
    to {
      left: 120%;
    }
  `

const FrontLayer = styled(Layer)`
  animation-name: ${frontLayerAnimation}, ${fadeEffect};
  animation-duration: 8s;

  & > .laser {
    width: 35%;
    border-width: 0.25rem;
  }

  & > .laser:nth-child(1) {
    top: 5%;
    left: 10%;
  }

  & > .laser:nth-child(2) {
    top: 35%;
    left: 45%;
  }

  & > .laser:nth-child(3) {
    top: 45%;
    left: 25%;
  }

  & > .laser :nth-child(4) {
    top: 75%;
    left: 80%;
  }

  & > .laser :nth-child(5) {
    top: 85%;
    left: 10%;
  }
`

const midLayerAnimation = keyframes`
    from {
      left: -10%;
    }
    to {
      left: 120%;
    }
  `

const MidLayer = styled(Layer)`
  animation-name: ${midLayerAnimation}, ${fadeEffect};
  animation-duration: 10s;

  & > .laser {
    width: 15%;
    border-width: 0.18rem;
  }

  & > .laser:nth-child(2) {
    top: 15%;
    left: 20%;
  }

  & > .laser:nth-child(5) {
    top: 31%;
    left: 15%;
  }

  & > .laser:nth-child(4) {
    top: 44%;
    left: 35%;
  }

  & > .laser:nth-child(1) {
    top: 62%;
    left: 40%;
  }

  & > .laser:nth-child(3) {
    top: 78%;
    left: 20%;
  }
`

const backLayerAnimation = keyframes`
    from {
      left: -10%;
    }
    to {
      left: 120%;
    }
  `

const BackLayer = styled(Layer)`
  animation-name: ${backLayerAnimation}, ${fadeEffect};
  animation-duration: 25s;

  & > .laser {
    width: 10%;
    border-width: 0.02rem;
  }

  & > .laser:nth-child(4) {
    top: 10%;
    left: 10%;
  }

  & > .laser:nth-child(2) {
    top: 28%;
    left: 12.5%;
  }

  & > .laser:nth-child(5) {
    top: 37.5%;
    left: 5%;
  }

  & > .laser:nth-child(1) {
    top: 55.1%;
    left: 7.8%;
  }

  & > .laser:nth-child(3) {
    top: 81.4%;
    left: 6.1%;
  }
`

const Laser = styled.div.attrs({
  className: `laser`,
})`
  position: absolute;
  height: 0rem;
  border-style: solid;
  border-radius: 1.5rem;
`

const blueLaserColor = `blue`

const BlueLaser = styled(Laser)`
  background-color: ${blueLaserColor};
  border-color: ${blueLaserColor};
  box-shadow: 0rem 0rem 1rem ${blueLaserColor};
`

const yellowLaserColor = `yellow`

const YellowLaser = styled(Laser)`
  background-color: ${yellowLaserColor};
  border-color: ${yellowLaserColor};
  box-shadow: 0rem 0rem 1rem ${yellowLaserColor};
`

const redLaserColor = `red`

const RedLaser = styled(Laser)`
  background-color: ${redLaserColor};
  border-color: ${redLaserColor};
  box-shadow: 0rem 0rem 1rem ${redLaserColor};
`

const purpleLaserColor = `purple`

const PurpleLaser = styled(Laser)`
  background-color: ${purpleLaserColor};
  border-color: ${purpleLaserColor};
  box-shadow: 0rem 0rem 1rem ${purpleLaserColor};
`

const pinkLaserColor = `pink`

const PinkLaser = styled(Laser)`
  background-color: ${pinkLaserColor};
  border-color: ${pinkLaserColor};
  box-shadow: 0rem 0rem 1rem ${pinkLaserColor};
`

export const NeonSkyBackground = () => {
  return (
    <Layout>
      <BackgroundLayout>
        <BackLayer>
          <BlueLaser />
          <PurpleLaser />
          <RedLaser />
          <PinkLaser />
          <YellowLaser />
        </BackLayer>
        <MidLayer>
          <BlueLaser />
          <PurpleLaser />
          <RedLaser />
          <PinkLaser />
          <YellowLaser />
        </MidLayer>
        <FrontLayer>
          <BlueLaser />
          <PurpleLaser />
          <RedLaser />
          <PinkLaser />
          <YellowLaser />
        </FrontLayer>
      </BackgroundLayout>
    </Layout>
  )
}