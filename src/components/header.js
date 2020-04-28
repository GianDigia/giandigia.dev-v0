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
`

const Img = styled(GImg)`
  border-radius: 100%;
  max-width: 8rem;
  margin: 0 auto;
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
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      <Title>
        <Link to="/">{siteTitle}</Link>
      </Title>
    </Navbar>
  )
}

export default Header
