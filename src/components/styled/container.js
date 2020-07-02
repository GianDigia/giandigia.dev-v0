import styled from 'styled-components'

const Container = styled.div`
    max-width: 1100px;
    margin-left: auto;
    margin-right: auto;
    &::after {
      content: "";
      clear: both;
      display: table;
    }
`

export default Container