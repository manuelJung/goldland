import * as React from 'react'
import styled from 'styled-components'
import Header from './Header'

type Props = {
  children: any,
  as?: any
}

export default function Layout (props:Props) {
  return (
    <Wrapper>
      <Header/>
      <Content as={props.as}>
        {props.children}
      </Content>
    </Wrapper>
  )
}

const Content = styled.div``

const Wrapper = styled.div`
  .header {
    height: 60px;
    background: rgb(55,55,55);
  }
`