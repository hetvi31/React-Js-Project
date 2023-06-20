import React, { useState } from 'react';
import Video from '../../videos/video.mp4'

import { HeroContainer,HeroBg,VideoBg, HeroContent,HeroBtnWrapper,HeroP,Heroh1,ArrowForward,ArrowRight} from './HeroElements'
//import {hover} from '@testing-library/user-event/dist/hover';
import {Button } from '../ButtonElements'


const HeroSection = () => {
    const [hover,setHover]=useState(false)

    const onHover=() =>{
        setHover(!hover)
    }
  return (
    <HeroContainer>
      <HeroBg>
      <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <Heroh1> Dcyber Techlab India</Heroh1>
        <HeroP>
        A Start-up in the field of Digital Cyber Security and it's primary focus is Cyber Consulting & Cyber Advisory role. Security Assessment and Gap Analysis. VAPT of Network and Applications. Cyber Frame work and Policy build. Preparation for ISO,SOX and regulator audits.
        </HeroP>
        <HeroBtnWrapper>
            <Button to="signup" onMouseEnter={onHover}  onMouseLeave={onHover}>
                Get started{hover ? <ArrowForward /> :<ArrowRight/>}
            </Button>

        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
