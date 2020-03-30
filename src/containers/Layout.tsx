import * as React from 'react'
import styled from 'styled-components'

type Props = {
  children: any,
  as?: any
}

export default function Layout (props:Props) {
  return (
    <Wrapper>
      <div className='header'></div>
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