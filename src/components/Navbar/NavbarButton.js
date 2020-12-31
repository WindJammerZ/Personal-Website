import React, { useEffect, useState } from "react"
import styled, { keyframes } from "styled-components"

import NavbarButtonElement from "./NavbarButtonElement"
import NavMenuButton from "./NavMenuButton"

import { sectionsArray } from "../../consts/consts"

const numLinks = sectionsArray.length - 1
const linkDivs = 90 / numLinks

const pulseAnim = keyframes`
  0%{
    opacity: 1;
    transform: scale(1) translate(0%, 0%);
  }
  100%{
    opacity: 0;
    transform: scale(1.75) translate(0%, 0%);
  }
`

const Layout = styled.div`
  --easing1: cubic-bezier(1, 1.98, 0, 0.82);
  --easing2: cubic-bezier(1, 1.98, 0.48, 0.11);
  --navmenu-easing: cubic-bezier(0.03, 1.75, 0.7, -0.31);
  --navmenu-bgcolor: purple;
  --navmenu-btn-bgcolor: pink;
  position: fixed;
  top: 0%;
  left: 0%;
  transform: translate(-30%, -50%);
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  z-index: 1000;
`

const NavMenuWrapper = styled.div`
  position: absolute;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  width: ${props => (props.active ? `35rem` : `0rem`)};
  height: ${props => (props.active ? `35rem` : `0rem`)};
  opacity: ${props => (props.active ? 1 : 0)};
  transform: translate(-50%, -50%);
  transition: width 300ms linear, height 300ms linear, opacity 300ms linear;
`

const NavMenuLayout2 = styled.ul`
  width: 100%;
  height: 100%;
  border: 0.5rem solid white;
  border-radius: 50%;
  box-shadow: inset 0rem 0rem 0.1rem cyan, 0rem 0rem 1rem 0rem cyan;
  background: rgba(0, 0, 0, 0.7);
`

const OverlayMenuButtonArea = styled.div`
  --overlaymenubutton-width: 8.5rem;
  --overlaymenubuttongrow-width: 11rem;
  --overlaymenubutton-height: 9rem;
  --overlaymenubuttongrow-height: 11rem;
  position: absolute;
  top: 100%;
  left: 100%;
  top: calc(50% - calc(var(--overlaymenubutton-height) / 2));
  left: calc(50% - calc(var(--overlaymenubutton-width) / 1.5));
  width: ${props =>
    props.active
      ? `var(--overlaymenubuttongrow-width)`
      : `var(--overlaymenubutton-width)`};
  height: ${props =>
    props.active
      ? `var(--overlaymenubuttongrow-height)`
      : `var(--overlaymenubutton-height)`};
  color: white;
  border-radius: 50%;
  border: none;

  transition: all 300ms ease;

  &:hover #pulser {
    animation: ${pulseAnim} 500ms linear backwards;
  }
`

const OverlayMenuButtonPulser = styled.div.attrs(props => ({
  id: "pulser",
}))`
  pointer-events: none;
  position: absolute;
  top: calc(50% - calc(var(--overlaymenubutton-height) / 2));
  left: calc(50% - calc(var(--overlaymenubutton-width) / 2));
  user-select: none;
  width: 99%;
  height: 99%;
  border-radius: 50%;
  opacity: 0;
  box-shadow: inset 0rem 0rem 0.1rem cyan, 0rem 0rem 1rem 0rem cyan;
  background: rgba(0, 0, 0, 0.5);
  border: none;
`

const OverlayMenuButton = styled.button`
  cursor: pointer;
  width: 100%;
  height: 100%;
  border: 0.5rem solid white;
  border-radius: 0.5rem;
  box-shadow: inset 0rem 0rem 0.1rem cyan, 0rem 0rem 1rem 0rem cyan;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 50%;

  &:focus {
    outline: none;
  }
`

const MenuIndicator = styled.label`
  position: absolute;
  pointer-events: none;
  cursor: pointer;
  bottom: 5%;
  right: 45%;
  z-index: 10;
`

const NavbarButton = ({ pageTouch, menuClosed }) => {
  const [active, setActive] = useState(false)

  useEffect(() => {
    if (pageTouch) {
      setActive(() => !pageTouch)
      menuClosed(() => !active)
    }

  }, [pageTouch])

  return (
    <Layout>
      <NavMenuWrapper active={active}>
        <NavMenuLayout2 active={active}>
          {sectionsArray.map((section, index) => {
            return (
              <NavbarButtonElement
                key={index}
                name={section.name}
                id={section.id}
                index={index}
                linkDivs={linkDivs}
                show={active}
              />
            )
          })}
        </NavMenuLayout2>
      </NavMenuWrapper>
      <OverlayMenuButtonArea active={active}>
        <OverlayMenuButtonPulser />
        <OverlayMenuButton
          onClick={() => setActive(() => !active)}
          active={active}
        />
      </OverlayMenuButtonArea>
      <MenuIndicator>
        <NavMenuButton active={active} />
      </MenuIndicator>
    </Layout>
  )
}

export default NavbarButton
