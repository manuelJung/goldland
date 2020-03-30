import * as React from 'react'
import styled from 'styled-components'
import TeaserImage from './TeaserImage'
import Layout from 'containers/Layout'

export default function Homepage () {
  return (
    <Layout as={Wrapper}>
      <TeaserImage as={Teaser}>
        <h1>Everything starts <br/>from the land</h1>
        {/* <p>"Everything starts from the land"</p> */}
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
    font-size: 40px;
    text-transform: uppercase;
    line-height: 60px;
  }

  > p {
    font-family: Dosis;
    font-size: 24px;
  }
`