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
  
  export default function Features(){
    return (
      
          <Box bgColor={'white'}>
          <Divider my="20" opacity={1} />
          <Box align='center' pb='80px'> 
              <Heading size={'4xl'} fontFamily='Rajdhani'>What do we offer</Heading> 
            </Box>
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
        </SimpleGrid>
        </Box>
    )
  }
  