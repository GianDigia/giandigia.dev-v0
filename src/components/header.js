import { Link as GLink } from "gatsby"
import React from "react"
import styled from "styled-components"

const Navbar = styled.header`
  background: #1d1d1d;
  margin-bottom: 1.45rem;
`

const Link = styled(GLink)`
  color: white;
  text-decoration: none;
`

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`

const TextLogo = styled.h1`
  margin: 0;
`

const Header = ({ siteTitle }) => (
  <Navbar>
    <Container>
      <TextLogo>
        <Link to="/">{siteTitle}</Link>
      </TextLogo>
    </Container>
  </Navbar>
)

export default Header
