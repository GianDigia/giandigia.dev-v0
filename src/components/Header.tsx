import { Link } from 'gatsby'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import ThemeToggle from './header/ThemeToggle'

const Header = () => {
  const [theme, setTheme] = useState(window.__theme)
  useEffect(() => {
    window.__onThemeChange = (t) => {
      setTheme(t)
    }
  }, [])

  return (
    <Wrapper>
      <Container>
        <Title>
          <Link to="/">GianDigia</Link>
        </Title>
        <ThemeToggle
          darkMode={theme === 'dark'}
          toggleMode={() => {
            window.__togglePreferredTheme(theme)
          }}
        />
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  background-color: var(--header);
  box-shadow: rgba(0, 0, 0, 0.15) 0 1px 5px 0;
`

const Title = styled.h3`
  margin: 0;
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.1rem;
`

export default Header
