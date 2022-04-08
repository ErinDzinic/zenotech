import React from "react";
import { Container,SimpleGrid,Stack,Heading,Text,Flex,Image, } from '@chakra-ui/react'
import Fade from 'react-reveal/Fade';

export default function AboutText(){
    return(
        <Container maxW={'5xl'} py={12} backgroundColor='#2b2b2b'>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} >
        
        <Stack spacing={8} flexDirection='column'>
        <Fade left><Heading color='#fab717' fontFamily='Rajdhani'>Our story</Heading>
              <Text color={'white'} fontSize={'lg'}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore
              </Text>
              </Fade>
         </Stack>
         <Fade right>
          <Flex>
              <Image
                rounded={'md'}
                alt={'feature image'}
                src={'../images/people.png'}
                objectFit={'cover'}
                loading='lazy' />
            </Flex>
          </Fade>

            <Fade left><Flex w='100%'>
              <Image
                rounded={'md'}
                alt={'feature image'}
                src={'../images/people.png'}
                objectFit={'cover'} 
                loading='lazy'/>
            </Flex></Fade>
          <Stack spacing={8} direction={'row'} columns={{ base: 1, md: 2 }} display='block'>
            <Stack spacing={8}>
            <Fade right><Heading color='#fab717' fontFamily='Rajdhani'>Our mission</Heading>
              <Text color={'white'} fontSize={'lg'}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore
              </Text></Fade>
            </Stack>
          </Stack> 
        </SimpleGrid>
        </Container>
    )
}