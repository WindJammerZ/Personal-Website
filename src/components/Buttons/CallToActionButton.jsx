import React from 'react'
import styled, { keyframes } from 'styled-components'

const buttonShineAnim = keyframes`
    0%{
        left: -100%;
    }
    55%{
        left: -100%;
    }
    60%{
        left: 100%;
    }
    100%{
        left: 100%;
    }
`

const StyledButton = styled.button`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  height: 3.0rem;
  font-weight: 900;
  min-width: 1rem;
  padding: 0.5rem 1.5rem;
  border-radius: 15rem;
  border: none;
  background-color: var(--calltoactionbtn-bgcolor);
  color: var(--calltoactionbtn-color);
  font-size: clamp(0.75rem, 2.25vw, 1rem);
  transition: all 400ms ease;

  &:hover{
    background-color: var(--calltoactionbtn-color);
    color: #ffe6ff;
    box-shadow: 0rem 0rem 1rem 0rem #aaaaaa;
    text-shadow: 0 0 0.6rem #ffe6ff, 0 0 1.5rem #ff65bd,
      -0.2rem 0.1rem 1rem #ff65bd, 0.2rem 0.1rem 1rem #ff65bd,
      0 -0.5rem 2rem #ff2483, 0 0.5rem 3rem #ff2483;

  }

  &:after {
    content: "";
    position: absolute;
    user-select: none;
    pointer-events: none;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      transparent 30%,
      #fff 60%,
      transparent 60%
    );
    opacity: 0.8;
    filter: blur(1px);
    animation-name: ${buttonShineAnim};
    animation-delay: 2s;
    animation-duration: 15s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(0.78, 0.46, 0.87, 0.2);
  }
`

const CallToActionButton = ({ clicked, children }) => {
  return (
    <StyledButton
      onClick={clicked}
    >{children}</StyledButton>
  )
}

export default CallToActionButton
