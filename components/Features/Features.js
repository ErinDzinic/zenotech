import {
    Box,
    Button,
    Center,
    Divider,
    Heading,
    Img,
    SimpleGrid,
    Stack,
    Text,
    useColorModeValue as mode,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { FaArrowRight, FaFileSignature, FaHandsHelping, FaHeadset } from 'react-icons/fa'
  import { Feature } from './FeaturesDesign'
  import Fade from 'react-reveal/Fade';
  
  export default function Features(){
    return (
      
       
          <Box bgColor={'white'} align='center'>
          <Divider w='80%' my="20" opacity={1} />
          <Fade top>
          <Box align='center' pb='80px'> 
              <Heading size={'4xl'} fontFamily='Rajdhani'>What do we offer</Heading> 
            </Box>
            </Fade>
          <SimpleGrid
            columns={{
                base: 1,
                md: 3,
            }}
            spacing={{
                base: '10',
                md: '2',
            }}
        >
            <Fade bottom>
            <Feature title="Share files" icon={<FaFileSignature />}>
                Keep files and the messages about them together in channels.
            </Feature>
            <Feature title="Connect with users" icon={<FaHeadset />}>
                Keep files and the messages about them together in channels.
            </Feature>
            <Feature title="Collaborate with partners" icon={<FaHandsHelping />}>
                Keep files and the messages about them together in channels.
            </Feature>
            <Feature title="Share files" icon={<FaFileSignature />}>
                Keep files and the messages about them together in channels.
            </Feature>
            <Feature title="Connect with users" icon={<FaHeadset />}>
                Keep files and the messages about them together in channels.
            </Feature>
            <Feature title="Collaborate with partners" icon={<FaHandsHelping />}>
                Keep files and the messages about them together in channels.
            </Feature>
            </Fade>
            <Divider my="10" opacity={0} />
        </SimpleGrid>
        </Box>
    )
  }
  