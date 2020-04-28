/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Header from "./header"
import "./layout.css"

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

  return (
    <InnerBody>
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
  )
}

const InnerBody = styled.div`
  background-color: #1d1d1d;
  height: 100%;
`

const Footer = styled.footer`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1rem;
  text-align: center;
  color: white;
`

const Heart = styled.span`
  margin: 0 -1px 0 5px;
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
