import Img from 'gatsby-image'
import React from 'react'
import styled from 'styled-components'

import { useGatsbyLogo } from '../hooks/staticQueries/useGatsbyLogo'

const Footer = () => {
  const logo = useGatsbyLogo()

  return (
    <Wrapper>
      <InlineWrapper>
        Made in
        <Italy role="img" aria-label="Italy">
          🇮🇹
        </Italy>
        with
        <GatsbyLogo fluid={logo} />
        atsby
      </InlineWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 1rem;
  text-align: center;
  color: var(--color);
`

const InlineWrapper = styled.h4`
  display: inline-flex;
  font-weight: 300;
`

const Italy = styled.span`
  margin: 0 -1px 0 5px;
`

const GatsbyLogo = styled(Img)`
  width: 1.1em;
  height: 1.1em;
  margin: 0 0 0.2em 0.4em;
`

export default Footer
