import React from "react"
import styled, { css } from "styled-components"

interface Props {
  darkMode: boolean
  toggleMode: () => void
}

const ThemeToggle = ({ darkMode, toggleMode }: Props): JSX.Element => (
  <Button onClick={toggleMode}>
    <Circle darkMode={darkMode} />
  </Button>
)

export default ThemeToggle

const Button = styled.button`
  background-color: transparent;
  border: 0;
  outline: none;
  float: right;
`

const Circle = styled.div<{ darkMode: Props["darkMode"] }>`
  background-color: #fbc21b;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  overflow: visible;

  ${({ darkMode }) =>
    darkMode
      ? css`
          transform: scale(0.55);
          transition: all 0.45s ease 0s;
        `
      : css`
          transform: scale(1);
          transition: all 0.45s ease;
        `}

  &:before {
    background-color: var(--header);
    border-radius: 50%;
    content: "";
    width: 24px;
    height: 24px;
    position: absolute;
    right: -9px;
    top: -9px;

    ${({ darkMode }) =>
      darkMode
        ? css`
            opacity: 0;
            transform: translate(14px, -14px);
            transition: transform 0.45s ease 0s;
          `
        : css`
            opacity: 1;
            transform: translate(0, 0);
            transition: transform 0.45s ease;
          `}
  }
  &:after {
    border-radius: 50%;
    content: "";
    width: 8px;
    height: 8px;
    left: 50%;
    margin: -4px 0 0 -4px;
    position: absolute;
    top: 50%;

    ${({ darkMode }) =>
      darkMode
        ? css`
            box-shadow: #ffd96b 0px -23px 0px, #ffd96b 0px 23px 0px,
              #ffd96b 23px 0px 0px, #ffd96b -23px 0px 0px, #ffd96b 15px 15px 0px,
              #ffd96b -15px 15px 0px, #ffd96b 15px -15px 0px,
              #ffd96b -15px -15px 0px;
            transform: scale(1);
            transition: all 0.35s ease 0s;
          `
        : css`
            box-shadow: 0 -23px 0 #ffd96b, 0 23px 0 #ffd96b, 23px 0 0 #ffd96b,
              -23px 0 0 #ffd96b, 15px 15px 0 #ffd96b, -15px 15px 0 #ffd96b,
              15px -15px 0 #ffd96b, -15px -15px 0 #ffd96b;
            transform: scale(0);
            transition: all 0.35s ease;
          `}
  }
`
