import {
    Box,
    Divider
  } from '@chakra-ui/react';
  import AboutText from '../About/AboutText'
  import Stats from '../Stats/Stats'
  import Features from '../Features/Features'
  import { useRef } from 'react'
  import DiagonalDiv from '../DiagonalDivs/DiagDivAbout';
  

  export default function SplitWithImage() {
    const aboutRef = useRef()

    return (
        <>
        <Box w='100%'
        backgroundColor='#2b2b2b'
        ref={aboutRef}
        id='about'>
        
        <Features />
        <DiagonalDiv />
        <AboutText />
        <Stats />
        
        <Box align='center'><Divider w={'80%'} opacity={0.3}/></Box>
      </Box> </>
    );
  }