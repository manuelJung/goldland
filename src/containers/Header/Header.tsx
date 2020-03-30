import * as React from 'react'
import styled from 'styled-components'

export default function Header () {
  return (
    <Wrapper>
      Goldland
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 60px;
  background: rgb(55,55,55);
  text-align: center;
  color: white;
  line-height: 60px;
  font-size: 30px;
  font-family: Cinzel;
`