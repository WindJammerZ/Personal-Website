import React from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  pointer-events: none;

  &:hover{
    color: cyan;
    background: white;
    box-shadow: 1rem 5rem 10rem cyan;
  }
`

const IconLayer = styled.div`
  cursor: ${props => props.hoverAffect ? `pointer` : `initial`};
  border-radius: 5px;
  border: 0.25rem solid transparent;
  margin: 0rem 0.5rem;
  padding: 0.25rem;
  background: black;
  color: ${props => props.hoverAffect ? `white` : `grey`};

  &:hover{
    background: ${props => props.hoverAffect ? `white` : `black`};
    border-color: ${props => props.hoverAffect ? `white` : `transparent`};

    &>${StyledFontAwesomeIcon}{
      color: ${props => props.hoverAffect ? `black` : `grey`};
    }
  }
`

const WebLinks = ({ icon, link }) => {

  const linkClickHandler = (link) => {

    if (!link) return

    window.open(link);
  }

  if (link) {
    return (
      <IconLayer
        onClick={() => linkClickHandler(link)}
        hoverAffect={true}>
        <StyledFontAwesomeIcon
          icon={icon}
          transform="grow-5"
        />
      </IconLayer>
    )
  }

  return (
    <IconLayer
      hoverAffect={false}>
      <StyledFontAwesomeIcon
        icon={icon}
        transform="grow-5"
      />
    </IconLayer>
  )
}

export default WebLinks