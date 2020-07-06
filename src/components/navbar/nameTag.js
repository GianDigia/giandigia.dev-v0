import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { isMobile } from 'react-device-detect'
import { Link as GLink } from 'gatsby'

const NameTag = ({scrolled}) => {

  const [isFullName, setIsFullName] = useState(true)

  // This is a workarount for a rehydration problem
  // https://github.com/styled-components/styled-components/issues/2629
  useEffect(() => {
    setTimeout((isFull) => setIsFullName(isFull), 10, (!isMobile && !scrolled))
  })

  return <Link to={'/'}>
    <Group visible={!isFullName}>&lt;</Group>
    <Group visible={true}>Gian</Group>
    <Group visible={isFullName} spacing={2.9}>marco</Group>
    {isFullName && <Group visible={true}>{' '}</Group>}
    <Group visible={true}>Digia</Group>
    <Group visible={isFullName} spacing={2.2}>como</Group>
    <Group visible={!isFullName}>/&gt;</Group>
  </Link>
}

const Link = styled(GLink)`
  text-decoration: none;
  font-weight: 500;
`

const Group = styled.span`
color: ${({theme}) => theme.title};
transition: opacity 150ms ease-out 0s, margin 250ms ease-in-out 0s;
margin-left: ${({visible, spacing}) => visible ? '0' : `-${spacing}em`};
opacity: ${({visible}) => visible ? 1 : 0}

`

NameTag.propTypes = {
  scrolled: PropTypes.bool,
}

export default NameTag