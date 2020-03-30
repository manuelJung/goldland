import * as React from 'react'
import styled from 'styled-components'
import TeaserImage from './TeaserImage'
import Layout from 'containers/Layout'

export default function Homepage () {
  return (
    <Layout as={Wrapper}>
      <TeaserImage as={Teaser}>
        <h1>Goldland</h1>
        <p>Everything starts from the land</p>
      </TeaserImage>
    </Layout>
  )
}

const Wrapper = styled.div``

const Teaser = styled.div`
  text-align: center;
  > h1 {
    font-family: Cinzel;
  }

  > p {
    font-family: Dosis;
  }
`