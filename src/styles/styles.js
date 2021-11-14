import styled, { keyframes } from 'styled-components'

export const Layout = styled.section.attrs(props => ({
  id: props.id,
}))`
    position: relative;
    width: 100%;
    min-height: 100vh;
    padding: 0.5rem 2.5rem;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  `
export const TITLE_COLOR_BLUR = `#FF6EC7`
export const TITLE_COLOR_OUTLINE = `#FC9FD8`
export const TITLE_COLOR = `#FFE6FF`

export const Title = styled.h2`
  width: 100%;
  text-align: center;
  border-bottom: 0.5rem solid white;
  box-shadow: inset 0rem 0rem 0.3em pink;
  border-radius: 0.5rem;
  padding: 1rem 1rem;
  margin-bottom: 1rem;
  color: white;
  text-shadow: 0 0 0.6rem ${TITLE_COLOR_BLUR}, 0 0 1.5rem ${TITLE_COLOR_BLUR}, -0.2rem 0.1rem 1rem ${TITLE_COLOR_OUTLINE},
    0.2rem 0.1rem 1rem ${TITLE_COLOR_OUTLINE}, 0 -0.5rem 2rem ${TITLE_COLOR_OUTLINE}, 0 0.5rem 3rem ${TITLE_COLOR_OUTLINE};
`

const nameGlowAnim = keyframes`

0% {
    text-shadow:  0 0 1.0rem rgba(255, 255, 255, 1.0);
  }
  
  15% {
    text-shadow: 0.2rem 0.2rem 1.0rem rgba(255, 255, 255, 1),
                 -0.2rem -0.2rem 1.0rem rgba(255, 255, 255, 1);
  }
  30% {
    text-shadow: 0.2rem 0.2rem 0.4rem rgba(255, 255, 255, .7),
                 -0.2rem -0.2rem 0.4rem rgba(255, 255, 255, .7);
  }
  50% {
    text-shadow: 2.0rem 2.0rem 5.0rem rgba(255, 255, 255, .5),
                 -2.0rem -2.0rem 5.0rem rgba(255, 255, 255, .5);
  }
  100%{
    text-shadow: 0 0 0.6rem ${TITLE_COLOR_BLUR}, 0 0 1.5rem ${TITLE_COLOR_BLUR}, -0.2rem 0.1rem 1rem ${TITLE_COLOR_OUTLINE},
                  0.2rem 0.1rem 1rem ${TITLE_COLOR_OUTLINE}, 0 -0.5rem 2rem ${TITLE_COLOR_OUTLINE}, 0 0.5rem 3rem ${TITLE_COLOR_OUTLINE};
}
`

export const StyledName = styled.span`
  cursor: pointer;
  transition: color linear 300ms;
  animation-name: ${nameGlowAnim};
  animation-delay: 1s;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  color: ${TITLE_COLOR};

  &:hover {
    color: purple;
  }
`

export const Info = styled.div`
  text-align: center;
  font-family: "Arimo";
  padding: 1rem 1rem;
  max-width: 60ch;
  border: 0.5rem solid white;
  border-radius: 0.5rem;
  box-shadow: inset 0rem 0rem 0.1rem cyan, 0rem 0rem 1rem 0rem cyan;
  background: rgba(0, 0, 0, 0.5);
`