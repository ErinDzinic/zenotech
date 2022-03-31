import {
  Flex,
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin } from 'react-icons/fa';
import Logo from './Logos/LogoWhite'
import LogoOrng from './Logos/LogoOrng'
import { useRef } from 'react'
import { motion } from "framer-motion"

const SocialButton2 = ({children,label,href}) => {
  

  return (
    <><motion.div
    whileHover={{
      rotate: -10,
      transition: {duration: 0.7}
    }}
    whileTap={{
      rotate: -180,
    }}
      animate={{ rotate: 360 }}
      transition={{ duration: 1.75 }}
      
    > <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={10}
      h={10}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.5s ease'}
      _hover={{
        bg: useColorModeValue('#fab717', '#fab717'),
      }}> 
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button> </motion.div></>
      
    );
}

export default function SmallCentered() {
  const aboutRef = useRef()
  return (
    <Flex justifyContent='center' backgroundColor='#9a9ca2' >
      
    <Box 
      bg={useColorModeValue('#9a9ca2', '#9a9ca2')}
      color={useColorModeValue('white', 'white')}
      ref={aboutRef}
      id = 'about'
      w='100%'
      >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        spacing={4}
        justify={'center'}
        align={'center'}
        >
        <Logo />
        <Stack direction={'row'} spacing={8} >
          <Link href={'#'} _hover={{color: '#fab717'}} _focus={{border: 'none'}}>Home</Link>
          <Link href={'#'} _hover={{color: '#fab717'}} _focus={{border: 'none'}}>Career</Link>
          <Link href={'#partners'} _hover={{color: '#fab717'}} _focus={{border: 'none'}}>Partners</Link>
          <Link href={'#about'} _hover={{color: '#fab717'}} _focus={{border: 'none'}}>About us</Link>
        </Stack>
      </Container>
      
      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor='gray.200'
        
        >
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={5}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }} >
            
          <Text>© 2022 ZenoTech. All rights reserved</Text>
          
          <Stack direction={'row'} spacing={6}>
            <SocialButton2 label={'Facebook'} href={'#'}>
              <FaFacebook />
            </SocialButton2>
            <SocialButton2 label={'YouTube'} href={'#'}>
              <FaYoutube />
            </SocialButton2>
            
            <SocialButton2 label={'Instagram'} href={'https://www.instagram.com/erin.dzinic/'}>
              <FaInstagram />
            </SocialButton2> 
            <SocialButton2 label={'LinkedIn'} href={'https://www.instagram.com/erin.dzinic/'}>
              <FaLinkedin />
            </SocialButton2>
          </Stack>
        </Container>
      </Box>
    </Box>
   </Flex>
  );
}