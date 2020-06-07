import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import NameTag from './navbar/nameTag'

const Navbar = () => {

  const [scrollY, setScrollY] = useState(window.scrollY)
  const handleScroll = () => setScrollY(window.scrollY)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return <Wrapper scrolled={!!scrollY}>
    <NameTag scrolled={!!scrollY} />
  </Wrapper>
}

const Wrapper = styled.nav`
    padding-top: 16px;
    padding-bottom: 16px;
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    transition: background 250ms ease-in-out 0s, 
      box-shadow 250ms ease-in-out 0s;

    
    ${({ scrolled }) => scrolled
    ? css`
      background: rgb(255, 255, 255);
      box-shadow: rgba(0, 0, 0, 0.15) 0 1px 4px 0;`
    : css`
      background: rgb(246, 247, 248);`
}
`

export default Navbar