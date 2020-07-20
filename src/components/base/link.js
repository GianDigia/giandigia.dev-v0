import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Link = ({children, to}) => {
  return <Wrapper target="_blank" rel="noopener noreferrer" href={to}>{children}</Wrapper>
}

const Wrapper = styled.a`
  margin: 0;
`

Link.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string
}

export default Link