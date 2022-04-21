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
          "Our headquarters are in Mostar, the city of the sun. The perfect place to strike a balance between work and vacancy.",
        image:
          '../images/mostar2.jpg',
      },
      {
        title: 'ZenoTech',
        text:
        [
          "Our team of ambitious and innovative developers use the latest development technologies to deliver solutions tailored to your specific requirements.",
          " We offer top notch web or mobile solutions.",
        ],
        image:
          '../images/intera2.jpg',
      },
      
    ];
  
    return (
      <>
      <Box
        position={'relative'}
        height={'650px'}
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
                boxShadow='5px -109px 105px 23px rgba(0,0,0,0.85) inset'
              >
                {/* This is the block you need to change, to customize the caption */}
                <Flex size="0" height="600px" position="sticky" w='100%' p='60px'>
                  <Flex padding='.5rem' borderRadius='8px' backgroundColor='rgba(0, 0, 0, 0.75)' h='380px' w={isDesktop ? '35%' : '100%'} position='absolute' right={isDesktop? '100' : '0'} top='140'>
                    <Stack
                      spacing={6}
                      w={'full'}
                      maxW={'lg'}
                      position="absolute"
                      alignItems={isDesktop?'flex-end':'center'}
                      top="50%"
                      p='-5px'
                      transform="translate(0, -50%)">
                      <Text fontWeight='extrabold' fontSize={{ base: '4xl', md: '4xl', lg: '7xl' }} color='#fab717'>
                        {card.title}
                      </Text>
                      <Text textAlign={'center'} align='end' pr='15px' fontSize={{ base: 'lg' }} fontWeight={800} color="White">
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
