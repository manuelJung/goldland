import * as React from 'react'
import styled from 'styled-components'
import createWidget from './utils/createWidget'

// type Value = {
//   de: string
// }

// type Props = {
//   value?: Value,
//   onChange: (value:Value) => void
// }

export default createWidget(function String (props) {

  return (
    <Wrapper>
      <input 
        value={props.value} 
        placeholder='foo' 
        onChange={e => props.onChange(e.target.value)}
        onFocus={props.setActiveStyle}
        onBlur={props.setInactiveStyle}
      />
    </Wrapper>
  )
},'')

const Wrapper = styled.div`
  > input {
    line-height: 40px;
    display: inline-block;
    width: 100%;
    padding-left: 10px;
  }
`