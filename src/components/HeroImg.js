import React from 'react'
import styled from 'styled-components'
import Img from '../assets/images/hero-img.jpg'

const HeroImg = ({title}) => {
    return (
        <HeroImgContainer>
            <HeroContent>
                <HeroH1>{title}</HeroH1>
            </HeroContent>
        </HeroImgContainer>       
    )
}

export default HeroImg


const HeroImgContainer = styled.div`
    background: linear-gradient(to right, rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 0.1)), url(${Img});
    margin-top: -80px;
    height: 30vh;
    background-position: center;
    background-size: contain;
`

const HeroContent = styled.div`
  z-index: 3;
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  line-height: 1.1;
  font-weight: bold;
  text-transform: uppercase;
`

const HeroH1 = styled.h1`
  font-size: clamp(1.5rem, 6vw, 4rem);
  letter-spacing: 2px;
  color: #ffc500;
  padding-top: 8%;
`