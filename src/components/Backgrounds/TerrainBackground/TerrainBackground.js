import React from "react"
import styled, { keyframes } from "styled-components"

const Layout = styled.div`
  position: fixed;
  top: 0%;
  left: 0%;
  width: 100vw;
  height: 100vh;
  background: black;
  perspective: 180px;
  overflow: hidden;
`

const terrainAnimation = keyframes`
    from {
      transform: rotate3d(1, 0, 0, 65deg) translateY(0%);
    }
    to {
      transform: rotate3d(1, 0, 0, 65deg) translateY(20%);
    }
  `

const TerrainGrid = styled.div`
  position: absolute;
  top: 20%;
  left: -250%;
  width: 600%;
  height: 80%;
  background-color: black;
  display: grid;
  grid-template-rows: repeat(15, 1fr);
  grid-template-columns: repeat(20, 1fr);
  transform-origin: bottom center;
  transform: rotate3d(1, 0, 0.5, 65deg);
  animation: ${terrainAnimation} 10s linear infinite forwards;
  z-index: -1;

  & > div {
    border: 3px solid cyan;
    box-shadow: inset 0px 0px 15px cyan;
  }
`

const BackgroundLayer = styled.div`
  position: relative;
  width: 100%;
  height: 60%;
  background: black;
  z-index: 10;
`

const HazeLayer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle at bottom,
    rgba(167, 9, 167, 0.561) 10%,
    transparent
  );
`

const sunAnimation = keyframes`
  from {
    transform: translate(-50%, 70%);
  }
  to {
    transform: translate(-50%, 20%);
  }
`

const SunLayer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0%;
  left: 0%;
  overflow: hidden;
`

const Sun = styled.div`
  position: absolute;
  bottom: 0%;
  left: 50%;
  width: 25rem;
  height: 25rem;
  border-radius: 50%;
  background: linear-gradient(to top, purple 50%, darkorange, yellow);
  animation: ${sunAnimation} 55s ease 1 forwards;
`

const MountainLayer = styled.div`
  position: absolute;
  width: 100%;
  height: 50%;
  bottom: 0%;
  left: 0%;
  transform-origin: bottom center;
  border: none;
  border-bottom: 1px solid cyan;
  box-shadow: 0px 10px 10px cyan;
`

const Mountain = styled.div`
  position: absolute;
  bottom: 0%;
  transform-origin: bottom center;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
`

const BackMountain = styled(Mountain)`
  &:nth-of-type(1) {
    left: -15%;
    width: 70%;
    height: 5rem;
    background: radial-gradient(circle at top left, cyan, darkcyan);
  }

  &:nth-of-type(2) {
    right: -20%;
    width: 60%;
    height: 3.5rem;
    background: linear-gradient(to bottom right, cyan 40%, darkcyan);
  }

  &:nth-of-type(3) {
    left: 10%;
    width: 60%;
    height: 4.5rem;
    background: radial-gradient(circle at top right, cyan, darkcyan);
  }
`

const FrontMountain = styled(Mountain)`
  background: linear-gradient(to bottom, darkcyan 55%, cyan);

  &:nth-of-type(4) {
    left: 15%;
    width: 10%;
    height: 1.5rem;
  }

  &:nth-of-type(5) {
    left: 40%;
    width: 15%;
    height: 1.25rem;
  }

  &:nth-of-type(6) {
    left: 50%;
    width: 10%;
    height: 2rem;
  }

  &:nth-of-type(7) {
    right: 30%;
    width: 15%;
    height: 2.25rem;
  }

  &:nth-of-type(8) {
    right: 20%;
    width: 5%;
    height: 1.25rem;
  }
`

const TerrainBackground = () => {
  return (
    <Layout>
      <TerrainGrid>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </TerrainGrid>
      <BackgroundLayer>
        <HazeLayer />
        <SunLayer>
          <Sun />
        </SunLayer>
        <MountainLayer>
          <BackMountain />
          <BackMountain />
          <BackMountain />

          <FrontMountain />
          <FrontMountain />
          <FrontMountain />
          <FrontMountain />
          <FrontMountain />
        </MountainLayer>
      </BackgroundLayer>
    </Layout>
  )
}

export default TerrainBackground
