import React from 'react'
import styled from 'styled-components'
import Section from './base/section'
import Text from './base/text'
import TooSerious from './images/tooSerious'

const PersonalData = () => {
  return (
    <Wrapper>
      <TooSerious />
      <Info>
        <Text>Gianmarco Digiacomo</Text>
        <Text>digiacomogianmarco@gmail.com</Text>
      </Info>
    </Wrapper>
  )
}

const Wrapper = styled(Section)` 
  display: flex;
  flex-direction: column;
 
  @media only screen and (min-width: 426px) {
    flex-direction: row;
  }
  
`

const Info = styled.div`
  display: flex;
  flex-flow: column;
  
  ${Text} {
    text-align: center;
  }
  
  & > * {
    margin: .5rem;
  }
`

export default PersonalData
