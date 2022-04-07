import {
    Box,
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
    Divider
  } from '@chakra-ui/react';
  import {
    IoIosDesktop,
    IoLogoJavascript,
    IoMdTabletPortrait,
  } from 'react-icons/io';
  import Stats from './Stats/Stats'
  import { useRef } from 'react'
  import DiagonalDiv from './DiagonalDivs/DiagDivAbout';
  import Features from './Features/Features';
 
  
  const Feature = ({ text, icon, iconBg }) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex 
          w={8}
          h={8}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          bg={iconBg}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    );
  };
  
  export default function SplitWithImage() {
    const aboutRef = useRef()

    return (
        <><Features /><Box w='100%'
        backgroundColor='#2b2b2b'
        ref={aboutRef}
        id='about'>
        <DiagonalDiv />
        <Stats />

        <Container maxW={'5xl'} py={12} backgroundColor='#2b2b2b'>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Stack spacing={8}>
              <Heading fontFamily='Rajdhani'>Who are we?</Heading>
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
              <Stack
                color={'white'}
                spacing={4}
                divider={<StackDivider
                  borderColor={useColorModeValue('#fab717', 'gray.700')} />}>
                <Feature
                  icon={<Icon as={IoIosDesktop} color={'black'} w={4} h={4} />}
                  iconBg={useColorModeValue('#fab717', 'yellow.900')}
                  text={'Lorem Ipsum'} />
                <Feature
                  icon={<Icon as={IoLogoJavascript} color={'black'} w={5} h={5} />}
                  iconBg={useColorModeValue('#fab717', 'green.900')}
                  text={'Lorem Ipsum'} />
                <Feature
                  icon={<Icon as={IoMdTabletPortrait} color={'black'} w={5} h={5} />}
                  iconBg={useColorModeValue('#fab717', 'purple.900')}
                  text={'Lorem Ipsum'} />
              </Stack>
            </Stack>
            <Flex>
              <Image
                rounded={'md'}
                alt={'feature image'}
                src={'../images/randm.png'}
                objectFit={'cover'} />
            </Flex>
            <Flex w='100%'>
              <Stack spacing={6}>
                <Heading fontFamily='Rajdhani' color={'#fab717'}>Who are we?</Heading>
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
              </Stack> </Flex>
          </SimpleGrid>
          
        </Container>
         <Box align='center'><Divider w={'80%'} opacity={0.3}/></Box>
      </Box> </>
    );
  }