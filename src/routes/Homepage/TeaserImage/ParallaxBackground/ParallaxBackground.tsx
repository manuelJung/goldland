// @flow
import * as React from 'react'
import { useInView } from 'react-intersection-observer'
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'

type Props = {
  fluid: any,
  weight?: number,
  children?: any
}

export default function ParallaxBackground ({fluid, weight=150, children}:Props) {
  const [ref, inView] = useInView()
  const image = React.useRef<any>()
  const lastOffset = React.useRef(0)

  React.useEffect(() => {
    if(!inView) return
    const initialOffset = window.pageYOffset - lastOffset.current
    const screenHeight = window.innerHeight
    const speed = weight / screenHeight
    const listener = () => {
      if(!image.current) return
      const offset = window.pageYOffset - initialOffset
      const margin = offset * speed
      image.current.style.marginTop = margin + 'px'
      lastOffset.current = offset
    }
    window.addEventListener('scroll', listener)
    return () => window.removeEventListener('scroll', listener)
  }, [inView, weight])


  return (
    <Wrapper className='ParallaxBackground' ref={ref}>
      <div 
        className='img' 
        ref={image} 
        children={<BackgroundImage Tag="div" fluid={fluid} />}
        style={{
          position: 'absolute',
          top: -weight,
          bottom: -weight,
          height: `calc(100% + ${weight*2}px)`
      }}/>
      <div className='overlay'/>
      <div className='content'>
        {children}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  height: 100%;

  > .img {
    position: absolute;
    left: 0;
    right: 0;
    z-index: 1;

    > div {
      width: 100%;
      height: 100%;
    }
  }

  > .overlay {
    z-index: 2;
    background: rgba(0,0,0,0.4);
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }

  > .content {
    z-index: 3;
  }
`