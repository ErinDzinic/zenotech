import {
    Avatar,
    Box,
    chakra,
    Container,
    Flex,
    Icon,
    SimpleGrid,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { motion, Variant } from 'framer-motion';
  import { useRef } from 'react';
  import Stats from './Stats'


  const testimonials = [
    {
      name: 'Erin Dzinic',
      role: 'CMO',
      content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..",
      avatar:
        'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    },
     {
       name: 'Krysta B.',
       role: 'Entrepreneur',
       content:
       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..",
       avatar:
         'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
     },
     {
       name: 'Darcy L.',
       role: 'Movie star',
       content:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..",
       avatar:
         'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80',
     },
    {
      name: 'Denis T.',
      role: 'CTO',
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..",
      avatar:
        'https://images.unsplash.com/photo-1606513542745-97629752a13b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    },
      
  ];
  
 const backgrounds = [
   `url("data:image/svg+xml, %3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'560\' height=\'185\' viewBox=\'0 0 560 185\' fill=\'none\'%3E%3Cellipse cx=\'102.633\' cy=\'61.0737\' rx=\'102.633\' ry=\'61.0737\' fill=\'none\' /%3E%3Cellipse cx=\'399.573\' cy=\'123.926\' rx=\'102.633\' ry=\'61.0737\' fill=\'GoldenRod\' /%3E%3Cellipse cx=\'366.192\' cy=\'73.2292\' rx=\'193.808\' ry=\'73.2292\' fill=\'none\' /%3E%3Cellipse cx=\'222.705\' cy=\'110.585\' rx=\'193.808\' ry=\'73.2292\' fill=\'GoldenRod\' /%3E%3C/svg%3E")`,
   `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='102.633' cy='61.0737' rx='102.633' ry='61.0737' fill='none'/%3E%3Cellipse cx='399.573' cy='123.926' rx='102.633' ry='61.0737' fill='none'/%3E%3Cellipse cx='366.192' cy='73.2292' rx='193.808' ry='73.2292' fill='none'/%3E%3Cellipse cx='222.705' cy='110.585' rx='193.808' ry='73.2292' fill='GoldenRod'/%3E%3C/svg%3E")`,
   `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='none'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='none'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='gray'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='GoldenRod'/%3E%3C/svg%3E")`,
   `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='none'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='none'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='gray'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='GoldenRod'/%3E%3C/svg%3E")`,
 ];
  
    // const TestimonialCardProps =  {
    //         name: string,
    //         role: string,
    //         content: string,
    //         avatar: string,
    //         index: number
    // }
    
  function TestimonialCard(props) {
    const { name, role, content, avatar, index } = props;
    return (
      
      <Flex
        boxShadow={'lg'}
        maxW={'540px'}
        direction={{ base: 'column-reverse', md: 'row' }}
        width={'full'}
        rounded={'xl'}
        p={10}
        zIndex={0}
        mb='25px'
        justifyContent={'space-between'}
        position={'relative'}
        bg={useColorModeValue('#9a9ca2', '#9a9ca2')}
        _after={{
          content: '""',
          position: 'absolute',
          height: '21px',
          width: '29px',
          left: '35px',
          top: '-10px',
          backgroundSize: 'cover',
        }}
        _before={{
          content: '""',
          position: 'absolute',
          zIndex: '-1',
          height: 'full',
          maxW: '640px',
          width: 'full',
          filter: 'blur(40px)',
          transform: 'scale(0.98)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          top: 0,
          left: 0,
          backgroundImage: backgrounds[index % 4],
        }}>
        <Flex 
          direction={'column'}
          textAlign={'left'}
          justifyContent={'space-between'}>
          <chakra.p
            fontFamily={'Rajdhani'}
            fontWeight={'medium'}
            fontSize={'15px'}
            color='white'
            pb={4}>
            {content}
          </chakra.p>
          <chakra.p fontFamily={'Rajdhani'} fontWeight={'bold'} fontSize={14}>
            {name}
            <chakra.span
              fontFamily={'Rajdhani'}
              fontWeight={'medium'}
              color={'#fab717'}>
              {' '}
              - {role}
            </chakra.span>
          </chakra.p>
        </Flex>
        <Avatar
          src={avatar}
          height={'80px'}
          width={'80px'}
          alignSelf={'center'}
          m={{ base: '0 0 35px 0', md: '0 0 0 50px' }}
        />
      </Flex>
     
    );
  }
  
  export default function GridBlurredBackdrop() {

      const partnersRef = useRef()
    return (
      <Flex
        position={'relative'}
        className='partners'
        ref={partnersRef}
        id = 'partners'
        textAlign={'center'}
        pb='100px'
        justifyContent={'center'}
        direction={'column'}
        width={'full'}
        backgroundColor='#fab717'>
        <Box width={{ base: 'full', sm: 'lg', lg: 'xl' }} margin={'auto'} mt='30px'>
          <chakra.h3
            fontFamily={'Rajdhani'}
            fontWeight={'bold'}
            fontSize={20}
            textTransform={'uppercase'}
            color={'#black'}>
            Posjetite nas
          </chakra.h3>
          <chakra.h1
            py={5}
            fontSize={48}
            fontFamily={'Rajdhani'}
            fontWeight={'bold'}
            color={useColorModeValue('black', 'black')}>
            We will take care of you
          </chakra.h1>
          <chakra.h2
            margin={'auto'}
            width={'70%'}
            fontFamily={'Rajdhani'}
            fontWeight={'medium'}
            color={useColorModeValue('black', 'black')}>
            Vidite zasto smo preko {' '}
            <chakra.strong color={useColorModeValue('white', 'white')}>
              150,000+
            </chakra.strong >{' '}
            para ubrali preko bitkojina
          </chakra.h2>
        </Box>
        
        <SimpleGrid className='partners2'
          columns={{ base: 1, xl: 2 }}
          spacing={'20'}
          mt={16}
          mx={'auto'}>
          {testimonials.map((cardInfo, index) => (
            <TestimonialCard {...cardInfo} index={index} />
          ))}
        </SimpleGrid>
      </Flex>
    );
  }