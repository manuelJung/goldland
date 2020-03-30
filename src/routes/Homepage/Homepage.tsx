import * as React from 'react'
import styled from 'styled-components'
import TeaserImage from './TeaserImage'
import Layout from 'containers/Layout'
import {AiOutlineArrowDown} from 'react-icons/ai'

export default function Homepage () {
  return (
    <Layout as={Wrapper}>
      <TeaserImage as={Teaser}>
        <h1>Everything starts <br/>from the land</h1>
        <div className='scroll-down'>
          <AiOutlineArrowDown/>
        </div>
      </TeaserImage>
    </Layout>
  )
}

const Wrapper = styled.div`
  margin-bottom: 100vh;
`

const Teaser = styled.div`
  text-align: center;
  > h1 {
    font-family: Cinzel;
    font-size: 30px;
    text-transform: uppercase;
    line-height: 40px;
    padding: 15px;
    @media (min-width:800px){
      font-size: 50px;
      line-height: 60px;
    }
  }

  > .scroll-down {
    position: absolute;
    bottom: 15px;
    left: calc((100vw - 50px) / 2);
    margin: 0 auto;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0,0.5);
    border-radius: 50px;
    font-size: 30px;
    cursor: pointer;
    color: #9e9e9e;
    &:hover {color: lightgrey;}
  }
`