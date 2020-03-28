import * as React from 'react'
import styled from 'styled-components'
import createWidget from './utils/createWidget'

// type Props = {
//   value?: string,
//   onChange: (value:string) => void
//   options: {
//     placeholder: string
//   }
// }

export default createWidget(function String (props) {

  return (
    <Wrapper>
      <input 
        value={props.value} 
        placeholder={props.options.placeholder}
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