import { graphql, Link as GLink, useStaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"
import { default as GImg } from "gatsby-image"

const Navbar = styled.header`
  margin-bottom: 1.45rem;
  padding: 1.45rem 1rem 0 1rem;
`

const Link = styled(GLink)`
  color: white;
  text-decoration: none;
`

const Title = styled.h2`
  margin: 0;
  text-align: center;
  line-height: 75px;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
`

const Img = styled(GImg)`
  border-radius: 100%;
  max-width: 8rem;
  margin: 0 auto;
  @media (min-width: 1200px) {
    transition: transform 0.2s;
    &:hover {
      transform: scale(1.05);
    }
  }
`

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
    <Navbar>
      <Title>
        <Link to="/">
          <Img fluid={data.placeholderImage.childImageSharp.fluid} />
          {siteTitle}
        </Link>
      </Title>
    </Navbar>
  )
}

export default Header
