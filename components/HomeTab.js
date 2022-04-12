import React, { useState } from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,Flex,
  border,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
import TopDiagonalDiv from "./DiagonalDivs/TopDiagonalDiv"
import useMediaQuery  from './hooks/useMediaQuery';

const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
export default function CaptionCarousel() {
    // As we have used custom buttons, we need a reference variable to
    // change the state
    const [slider, setSlider] = useState(null);
    // These are the breakpoints which changes the position of the
    // buttons as the screen size changes
    const top = useBreakpointValue({ base: '90%', md: '50%' });
    const side = useBreakpointValue({ base: '30%', md: '40px' });
    const isDesktop = useMediaQuery('(min-width: 960px)');

    
  
    // This list contains all the data for carousels
    // This can be static or loaded from a server
    const cards = [
      {
        title: 'Mostar',
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image:
          '../images/intera.jpg',
      },
      {
        title: 'ZenoTech',
        text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..",
        image:
          '../images/mostar.jpg',
      },
      
    ];
  
    return (
      <>
      <Box
        position={'relative'}
        height={'650px'}
        width={'full'}
        overflow={'hidden'}
      >
        <Box >
          {/* CSS files for react-slick */}
          <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          {/* Left Icon */}
          <IconButton
            aria-label="left-arrow"
            variant="unstyled"
            _focus={{ border: 'none' }}
            position="absolute"
            left={side}
            top={top}
            transform={'translate(0%, -50%)'}
            opacity='0.4'
            _hover={{ opacity: '1' }}
            color='#fab717'
            zIndex={1}
            onClick={() => slider?.slickPrev()}>
            <BiChevronLeft size="60px" />
          </IconButton>
          {/* Right Icon */}
          <IconButton
            aria-label="right-arrow"
            _focus={{ border: 'none' }}
            variant="unstyled"
            position="absolute"
            right={side}
            top={top}
            transform={'translate(0%, -50%)'}
            opacity='0.4'
            _hover={{ opacity: '1' }}
            color='#fab717'
            zIndex={1}
            onClick={() => slider?.slickNext()}>
            <BiChevronRight size="60px" />
          </IconButton>
          {/* Slider */}
          <Slider {...settings} ref={(slider) => setSlider(slider)}>
            {cards.map((card, index) => (
             <Box
                key={index}
                height={'2xl'}
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                backgroundImage={`url(${card.image})`}
              >
                {/* This is the block you need to change, to customize the caption */}
                <Flex size="0" height="600px" position="sticky" w='100%' p='60px'>
                  <Flex backgroundColor='rgba(0, 0, 0, 0.45)' h='380px' w={isDesktop ? '35%' : '100%'} position='absolute' right={isDesktop? '100' : '0'} top='140'>
                    <Stack
                      spacing={6}
                      w={'full'}
                      maxW={'lg'}
                      position="absolute"
                      alignItems='flex-end'
                      top="50%"
                      p='-5px'
                      transform="translate(0, -50%)">
                      <Heading fontFamily='Rajdhani' fontWeight='extrabold' fontSize={{ base: '3xl', md: '4xl', lg: '7xl' }} color='#fab717'>
                        {card.title}
                      </Heading>
                      <Text align='end' fontSize={{ base: 'md', lg: 'lg' }} color="White">
                        {card.text}
                      </Text>
                    </Stack>
                  
                  </Flex> 
                </Flex>
              </Box>
            ))}
          </Slider> 
        </Box>
        <TopDiagonalDiv />
      </Box> </>
    );
  }
