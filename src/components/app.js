import React from 'react'
import { RecoilRoot } from 'recoil'
import Layout from './layout'

const App = ({ children }) => {
  return <RecoilRoot>
    <Layout>
      {children}
    </Layout>
  </RecoilRoot>
}

export default App