import React from "react"
import styled, { keyframes } from "styled-components"

const saberAnimation = keyframes`
    from{
        transform: scaleY(0.9);
    }
    to{
        transform: scaleY(1.07);
    }
`

const Layout = styled.div`
  --saber-width: 4rem;
  --handle-width: 2rem;
  --saber-height: 0.5rem;
  --handle-height: 0.5rem;
  width: 100%;
  height: 100%;
  position: relative;
  transform-origin: calc(var(--handle-width) + 0.5rem) 0.25rem;
  transition: transform 400ms linear;

  &:nth-of-type(1) {
    transform: ${props =>
    props.active ? `rotateZ(-225deg)` : `rotateZ(0deg)`};
  }

  &:nth-of-type(2) {
    transform: ${props =>
    props.active ? `rotateY(-180deg)` : `rotateZ(0deg)`};
  }

  &:nth-of-type(3) {
    transform: ${props => (props.active ? `rotateZ(225deg)` : `rotateZ(0deg)`)};
  }
`

const Handle = styled.div`
  position: relative;
  width: var(--handle-width);
  height: var(--handle-height);
  border-radius: 0.5rem;
  background: linear-gradient(
    to right,
    darkgrey 10%,
    grey 10%,
    grey 90%,
    darkgrey 90%
  );
`

const PowerButton = styled.div`
position: absolute;
top: 10%;
right: 15%;
  width: calc(var(--handle-height)/10);
  height: calc(var(--handle-height)/10);
  border-radius: 50%;
  border: 0.1rem solid darkgray;
`

const HandleGrip = styled.div`
  position: absolute;
  top: 5%;
  left: 10%;
  width: calc(var(--handle-width)/2);
  height: calc(var(--handle-height)/2);
  background: repeating-linear-gradient(to right, transparent 0%, transparent 5%, darkgray 5%, darkgray 10%);

`

const Saber = styled.div`
  position: absolute;
  top: 0rem;
  left: var(--handle-width);
  width: ${props => (props.active ? `var(--saber-width)` : `0rem`)};
  height: var(--saber-height);
  background: white;
  border-color: ${props => props.color};
  border-width: ${props =>
    props.active ? `calc(var(--saber-heigth)/30)` : `0rem`};
  border-style: solid;
  border-radius: 1.5rem;
  border-left: none;
  box-shadow: ${props =>
    props.active
      ? `0rem 0rem calc(var(--saber-height)/10) calc(var(--saber-height)/25) ${props.color}`
      : `0rem 0rem 0rem 0rem ${props.color}`};
  transition: width 100ms ease, box-shadow 100ms ease;
  animation: ${saberAnimation} 10ms linear infinite alternate;
`

const Lightsaber = ({ active, color }) => {
  return (
    <Layout active={active}>
      <Handle>
        <PowerButton />
        <HandleGrip />
      </Handle>
      <Saber color={color} active={active} />
    </Layout>
  )
}

export default Lightsaber
