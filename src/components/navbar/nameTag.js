import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { isMobile } from 'react-device-detect'

const NameTag = ({scrolled}) => {
  const isFullName = !isMobile && !scrolled
  return <Wrapper>
    <Group visible={!isFullName}>&lt;</Group>
    <Group visible={true}>Gian</Group>
    <Group visible={isFullName}>m</Group>
    <Group visible={isFullName}>a</Group>
    <Group visible={isFullName}>r</Group>
    <Group visible={isFullName}>c</Group>
    <Group visible={isFullName}>o</Group>
    <Group visible={true}>Digia</Group>
    <Group visible={isFullName}>c</Group>
    <Group visible={isFullName}>o</Group>
    <Group visible={isFullName}>m</Group>
    <Group visible={isFullName}>o</Group>
    <Group visible={!isFullName}>/&gt;</Group>
  </Wrapper>
}

const Wrapper = styled.div`
  margin-left: 3em;
`

const Group = styled.span`
margin-left: ${({visible}) => visible ? '0' : '-0.6em'};
opacity: ${({visible}) => visible ? 1 : 0}

`

NameTag.propTypes = {
  scrolled: PropTypes.bool,
}

export default NameTag