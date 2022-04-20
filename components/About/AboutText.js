import React from "react";
import { Container, SimpleGrid, Stack, Heading, Text, Flex, Image, useColorModeValue as mode } from '@chakra-ui/react'
import Fade from 'react-reveal/Fade';
import useMediaQuery from '../hooks/useMediaQuery';
import { useRef } from 'react'

export default function AboutText() {
  const isDesktop = useMediaQuery('(min-width: 960px)');
  
  const Story = () => {
    return (
      <Stack spacing={8} flexDirection='column'>
        <Fade left><Heading color='#fab717' fontFamily='Rajdhani'>Our story</Heading>
          <Text color={'white'} fontSize={'lg'}>
            Zenotech was founded in 2021 in Mostar.
            We are currently a small consulting company, that has collaborated with over 15 freelancers and more than 3 foreign partners.
            Our goal is to create a healthy environment for young and promising people and make a connection between them and clients around the world.
          </Text>
        </Fade>
      </Stack>
    )
  }

  const StoryPicture = () => {
    return (
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
    )
  }

  const Mission = () => {
    return (
      <Stack spacing={8} direction={'row'} columns={{ base: 1, md: 2 }} display='block'>
        <Stack spacing={8}>
          <Fade right><Heading color='#fab717' fontFamily='Rajdhani'>Our values</Heading>
            <Text color={'white'} fontSize={'lg'}>
              <Text w='100%' textAlign={'left'} fontWeight={900}>Passion</Text>
              Having a passion for our profession and products also means that we are always doing one extra step in acheiving our goals.
              <br></br>
              <Text w='100%' textAlign={'left'} fontWeight={900}>Simplicity</Text>
              We take simplicity with us in everything we do.
              We always strive to create simple and effective solutions for our customers.
            </Text></Fade>
        </Stack></Stack>
    )
  }

  const MissionPicture = () => {
    return (
      <Fade left>
        <Flex w='100%'>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={'../images/coreValues.png'}
            objectFit={'cover'}
            loading='lazy' />
        </Flex></Fade>
    )
  }

  return (
    <Container maxW={'5xl'} py={12} backgroundColor='#2b2b2b'>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} >

        <Story />
        <StoryPicture />

        {isDesktop ? (<><MissionPicture /><Mission /></>) : (<><Mission /><MissionPicture /></>)}
      </SimpleGrid>
    </Container>
  )
}