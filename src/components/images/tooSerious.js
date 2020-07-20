import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled, { css } from 'styled-components'
import { default as GImg } from 'gatsby-image'
import { isBrowser } from 'react-device-detect'

const TooSerious = () => {
  const data = useStaticQuery(graphql`
		query {
      placeholderImage: file(relativePath: { eq: "tooSerious.jpg" }) {
        childImageSharp {
          fluid(quality: 50) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

const Img = styled(GImg)`
	border-radius: 100%;
	max-width: 6rem;
	margin: 0 auto;
	display: block;
	width: 8rem;

	${isBrowser
    ? css`
				transition: transform 0.2s;
				&:hover {
					transform: scale(1.05);
				}
		  `
    : null}
`

export default TooSerious