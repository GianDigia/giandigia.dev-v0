import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import NameTag from './navbar/nameTag'
import ThemeToggle from './ThemeToggle'
import Container from './styled/container'

const windowScrollY = () => {
  let currentScroll = 0
  if(typeof window !== 'undefined') {
    currentScroll = window.scrollY
  }
  return currentScroll
}

const Navbar = () => {
  const [scrollY, setScrollY] = useState(windowScrollY())
  const handleScroll = () => setScrollY(windowScrollY())

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })


  return <Wrapper scrolled={!!scrollY}>
    <Container>
      <InnerWrapper>
        <NameTag scrolled={!!scrollY} />
        <ThemeToggle />
      </InnerWrapper>
    </Container>
  </Wrapper>
}

const InnerWrapper = styled.div`
  line-height: 26px;
`

const Wrapper = styled.nav`
    padding: 16px;
    position: sticky;
    top: 0;
    z-index: 10;
    transition: background 250ms ease-in-out 0s, 
      box-shadow 250ms ease-in-out 0s;

    background: ${({theme}) => theme.strongBg};
    
    ${({ scrolled }) => scrolled
    ? css`
      box-shadow: rgba(0, 0, 0, 0.15) 0 1px 4px 0;`
    : css``
}
`

export default Navbar