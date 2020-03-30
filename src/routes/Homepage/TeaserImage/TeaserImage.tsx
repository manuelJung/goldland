// @flow
import * as React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import ParallaxBackground from './ParallaxBackground'
import styled from 'styled-components'

const HEADER_HEIGHT = 60

type Props = {
  children: any,
  as: any
}

export default function TeaserImage ({children, as}:Props) {
  const {teaser} = useStaticQuery(graphql`
    query {
      teaser: file(relativePath: { eq: "cornfield.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600, fit: FILL, cropFocus: CENTER, toFormat: WEBP) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Wrapper className='TeaserImage'>
      <ParallaxBackground weight={350} fluid={teaser.childImageSharp.fluid} >
        <Content as={as}>
          {children}
        </Content>
      </ParallaxBackground>
    </Wrapper>
  )
}

const Content = styled.div``

const Wrapper = styled.div`
  height: calc(100vh - ${HEADER_HEIGHT}px);

  > .ParallaxBackground {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: bold;
    flex-direction: column;
  }
`