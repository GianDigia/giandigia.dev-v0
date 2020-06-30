/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import styled, { ThemeProvider } from 'styled-components'
import Header from './header'
import './layout.css'
import './global.css'
import { palette as lightPalette } from '../config/palette/light'
import { palette as darkPalette } from '../config/palette/dark'
import Img from 'gatsby-image'
import Navbar from './navbar'
import { useRecoilState } from 'recoil/dist'
import { darkModeState } from '../recoil/atoms'
import Container from './styled/container'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
		query {
      site {
        siteMetadata {
          title
				}
			}
			gatsbyLogo: file(relativePath: { eq: "gatsbyLogo.png" }) {
				childImageSharp {
					fluid(maxWidth: 300) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`)

  const [darkMode] = useRecoilState(darkModeState)

  return (
    <ThemeProvider theme={darkMode ? darkPalette : lightPalette}>
      <InnerBody>
        <Container>
        <Navbar />
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <Footer>
          <InlineWrapper>
						Made in
            <Italy role="img" aria-label="Italy">
							🇮🇹
            </Italy>
						with
            <GatsbyLogo fluid={data.gatsbyLogo.childImageSharp.fluid} />
						atsby
          </InlineWrapper>
        </Footer>
        </Container>
      </InnerBody>
    </ThemeProvider>
  )
}

const InnerBody = styled.div`
	background-color: ${({ theme }) => theme.background};
	height: 100%;
`

const Footer = styled.footer`
	position: absolute;
	right: 0;
	bottom: 0;
	left: 0;
	padding: 1rem;
	text-align: center;
	color: ${({ theme }) => theme.text};
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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
