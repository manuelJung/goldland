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
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Wrapper className='TeaserImage'>
      <ParallaxBackground fluid={teaser.childImageSharp.fluid} >
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
  background: rgba(0,0,0,0.4);

  > .ParallaxBackground {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: bold;
    flex-direction: column;
  }
`