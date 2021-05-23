import './layout.css'

import React from 'react'

import Footer from './Footer'
import Header from './Header'

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props): JSX.Element => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
)

export default Layout
