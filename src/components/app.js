import React from 'react'
import { RecoilRoot } from 'recoil'
import Layout from './layout'
import PropTypes from 'prop-types'

const App = ({ children }) => {
  return <RecoilRoot>
    <Layout>
      {children}
    </Layout>
  </RecoilRoot>
}

App.propTypes = {
  children: PropTypes.node
}

export default App