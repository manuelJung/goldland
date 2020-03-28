import * as React from 'react'
import styled from 'styled-components'

// type Props = {
//   children: React.Node
// }


export default (Component, defaultValue) => function Layout(props) {
  const [locale, setLocale] = React.useState('en')
  const btProps = newLocale => ({
    onClick: () => setLocale(newLocale),
    active: newLocale === locale
  })
  const value = props.value ? props.value[locale] || defaultValue : defaultValue
  const handleChange = newVal => {
    props.onChange({
      ...props.value,
      [locale]: newVal
    })
  }
  const optionsIm = props.field.get('options')
  const options = optionsIm ? optionsIm.toJS() : {}
  return (
    <Wrapper active={props.hasActiveStyle}>
      <div className='selection'>
        <Button {...btProps('en')}>en</Button>
        <Button {...btProps('de')}>de</Button>
        <Button {...btProps('mk')}>mk</Button>
        <Button {...btProps('al')}>al</Button>
      </div>
      <Component 
        value={value} 
        onChange={handleChange} 
        options={options}/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  border: 2px solid ${props => props.active ? 'rgb(58, 105, 199)' : 'rgb(223, 223, 227)'};
  border-radius: 0px 0px 3px 3px;

  > .selection {
    position: absolute;
    top: -24px;
    right: -2px;
  }
`

const Button = styled.button`
  line-height: 22px;
  height: 22px;
  padding: 0 8px;
  border:none;
  background: ${props => props.active ? 'rgb(58, 105, 199)' : 'rgb(223, 223, 227)'};
  color: ${props => props.active ? 'white' : 'grey'};
  cursor: pointer;
`