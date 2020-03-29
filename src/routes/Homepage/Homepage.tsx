import * as React from 'react'
import styled from 'styled-components'
import TeaserImage from './TeaserImage'
import Layout from 'containers/Layout'

export default function Homepage () {
  return (
    <Layout as={Wrapper}>
      <TeaserImage>
        Homepage
      </TeaserImage>
    </Layout>
  )
}

const Wrapper = styled.div``