import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import styled, { css } from 'styled-components'
import { default as GImg } from 'gatsby-image'
import { isBrowser } from 'react-device-detect'

const PersonalData = () => {
  return (
    <Wrapper>
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
	margin-bottom: 1.45rem;
	padding: 1.45rem 1rem 0 1rem;
`

const Img = styled(GImg)`
	border-radius: 100%;
	max-width: 8rem;
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

export default PersonalData
