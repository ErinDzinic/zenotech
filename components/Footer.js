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
  import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
  import Logo from './Logos/LogoGray'
  import { useRef } from 'react'

  const SocialButton2 = ({children,label,href}) => {
    

    return (
        <chakra.button
          bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
          rounded={'full'}
          w={8}
          h={8}
          cursor={'pointer'}
          as={'a'}
          href={href}
          display={'inline-flex'}
          alignItems={'center'}
          justifyContent={'center'}
          transition={'background 0.3s ease'}
          _hover={{
            bg: useColorModeValue('#fab717', '#fab717'),
          }}>
          <VisuallyHidden>{label}</VisuallyHidden>
          {children}
        </chakra.button>
      );
  }
  
  export default function SmallCentered() {
    const aboutRef = useRef()
    return (
      <Flex justifyContent='center' backgroundColor='#9a9ca2' w="100%">
      <Box
        bg={useColorModeValue('#9a9ca2', '#9a9ca2')}
        color={useColorModeValue('white', 'white')}
        ref={aboutRef}
        id = 'about'
        w='60%'
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
            <Link href={'#'} _hover={{color: '#fab717'}}>Home</Link>
            <Link href={'#'} _hover={{color: '#fab717'}}>Career</Link>
            <Link href={'#'} _hover={{color: '#fab717'}}>Partners</Link>
            <Link href={'#'} _hover={{color: '#fab717'}}>About us</Link>
          </Stack>
        </Container>
  
        <Box
          borderTopWidth={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          >
          <Container
            as={Stack}
            maxW={'6xl'}
            py={4}
            direction={{ base: 'column', md: 'row' }}
            spacing={5}
            justify={{ base: 'center', md: 'space-between' }}
            align={{ base: 'center', md: 'center' }}>
            <Text>© 2022 ZenoTech. All rights reserved</Text>
            <Stack direction={'row'} spacing={6}>
              <SocialButton2 label={'Twitter'} href={'#'}>
                <FaFacebook />
              </SocialButton2>
              <SocialButton2 label={'YouTube'} href={'#'}>
                <FaYoutube />
              </SocialButton2>
              <SocialButton2 label={'Instagram'} href={'https://www.instagram.com/erin.dzinic/'}>
                <FaInstagram />
              </SocialButton2>
            </Stack>
          </Container>
        </Box>
      </Box>
     </Flex>
    );
  }