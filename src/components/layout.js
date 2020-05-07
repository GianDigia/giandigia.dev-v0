/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider } from "styled-components"
import Header from "./header"
import "./layout.css"
import "./global.css"
import { palette as lightPalette } from "../config/palette/light"
import { palette as darkPalette } from "../config/palette/dark"
import ThemeToggle from "./ThemeToggle"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [darkMode, setDarkMode] = useState(true)

  return (
    <ThemeProvider theme={darkMode ? darkPalette : lightPalette}>
      <InnerBody>
        <ThemeToggle
          darkMode={darkMode}
          handleClick={() => setDarkMode(!darkMode)}
        />
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <Footer>
          <h6>
            Made with
            <Heart role="img" aria-label="heart">
              ❤️
            </Heart>
            by GianDigia
          </h6>
        </Footer>
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

const Heart = styled.span`
  margin: 0 -1px 0 5px;
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
