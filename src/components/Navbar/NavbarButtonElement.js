import React from "react"
import styled from "styled-components"

const Layout = styled.li`
  cursor: pointer;
  user-select: none;
  color: white;
  font-size: 1.2em;
  list-style: none;
  padding: 0.5em 0.5em;
  position: absolute;
  top: 50%;
  left: 50%;
  opacity: ${props => props.show ? `1` : `0`};
  transform: rotate(${props => props.index * props.linkDivs}deg)
    translate(${props => (props.show ? `5.5em` : `-5.5em`)});
  transform-origin: left;
  white-space: nowrap;
  transition: 
  transform 500ms ease,
    color 100ms linear, text-shadow 100ms linear, box-shadow 100ms linear;

  &:hover {
    color: #ffe6ff;
    text-shadow: 0 0 0.6rem #ffe6ff, 0 0 1.5rem #ff65bd,
      -0.2rem 0.1rem 1rem #ff65bd, 0.2rem 0.1rem 1rem #ff65bd,
      0 -0.5rem 2rem #ff2483, 0 0.5rem 3rem #ff2483;
    }


  & > label {
    cursor: pointer;
    text-transform: uppercase;
    pointer-events: none;
  }
`

const NavbarButtonElement = ({ name, id, index, show, linkDivs }) => {
  const pointClickHandler = clickedID => {
    const elementToScroll = document.getElementById(clickedID)
    elementToScroll.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <Layout
      onClick={() => {
        pointClickHandler(id)
      }}
      linkDivs={linkDivs}
      show={show}
      index={index}
    >
      <label>{name}</label>
    </Layout>
  )
}

export default NavbarButtonElement
