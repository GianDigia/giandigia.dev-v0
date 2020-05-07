import { graphql, Link as GLink, useStaticQuery } from "gatsby"
import React from "react"
import styled, { css } from "styled-components"
import { default as GImg } from "gatsby-image"
import { isBrowser } from "react-device-detect"

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "tooSerious.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <HeaderWrapper>
      <Title>
        <ImageLink to="/">
          <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        </ImageLink>
        <Link to="/">
          <MyName>{siteTitle}</MyName>
        </Link>
      </Title>
      <NavbarWrapper>
        <Navbar></Navbar>
      </NavbarWrapper>
    </HeaderWrapper>
  )
}

const ImageLink = styled(GLink)`
  display: block;
  width: 8rem;
  margin: 0 auto;
`

const ItemsMenu = styled.ul`
  list-style: none;
  text-align: center;
  padding: 0;
  margin: 0;
  display: flex;
`

const Items = styled.li`
  font-family: "Oswald", sans-serif;
  font-size: 1.2em;
  line-height: 40px;
  height: 40px;
  border-bottom: 1px solid #888;
`

const Navbar = styled.div`
  background-color: ${({ theme }) => theme.text};
  padding: 3vw;
  border-radius: 10px;
`

const NavbarWrapper = styled.div`
  width: 100%;
  padding: 0 5vw;
  margin-top: 15px;
`

const NavbarLink = styled(GLink)`
  color: ${({ theme }) => theme.background};
`

const HeaderWrapper = styled.header`
  margin-bottom: 1.45rem;
  padding: 1.45rem 1rem 0 1rem;
`

const Link = styled(GLink)`
  text-decoration: none;
`

const Title = styled.h2`
  margin: 0;
  text-align: center;
  line-height: 75px;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
`

const MyName = styled.h2`
  color: ${({ theme }) => theme.text};
`

const Img = styled(GImg)`
  border-radius: 100%;
  max-width: 8rem;
  margin: 0 auto;

  ${isBrowser
    ? css`
        transition: transform 0.2s;
        &:hover {
          transform: scale(1.05);
        }
      `
    : null}
`

export default Header
