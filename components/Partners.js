import { Box, Flex, Img, SimpleGrid, Text, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im'
import LogoGray from "./Logos/LogoGray"
import Fade from 'react-reveal/Fade';
import { useRef } from 'react'
import MeneaLogo from '../public/images/MeneaLogo.png';

const Testimonial = (props) => {
  const partnerRef = useRef()
  const { logo, href, children, image, author, role, colorScheme: c } = props
  const accentColor = mode(`#2b2b2b`, `${c}.400`)
  return (
    <Flex
      direction="column"
      rounded={{
        md: 'lg',
      }}
      bg={mode('white', 'gray.700')}
      shadow="lg"
      ref={partnerRef}
      id='partner'
    >
      <Flex
        direction="column"
        position="relative"
        mb="4"
        textAlign="center"
        justify="center"
        align="center"
        pt="10"
        pb="6"
        px="10"
      >
        <Box mb="2">{logo}</Box>
        <Box as="blockquote" maxW="340px" mx="auto" my="4">
          <Box
            position="absolute"
            top="6"
            left="5"
            display={{
              base: 'none',
              md: 'inline',
            }}
            fontSize="3xl"
            color={accentColor}
            opacity={0.2}
          >
            <ImQuotesLeft />
          </Box>
          <Text fontSize="lg">{children}</Text>
          <Box
            position="absolute"
            bottom="-2"
            right="5"
            display={{
              base: 'none',
              md: 'inline',
            }}
            fontSize="3xl"
            color={accentColor}
            opacity={0.2}
          >
            <ImQuotesRight />
          </Box>
        </Box>
      </Flex>
      <Flex
        direction="column"
        position="relative"
        align="center"
        justify="center"
        color="white"
        px="6"
        pb="8"
      >
        <Box
          position="absolute"
          left="0"
          bottom="0"
          w="full"
          h="full"
          roundedBottom={{
            md: 'lg',
          }}
          overflow="hidden"
          _before={{
            content: `''`,
            display: 'block',
            position: 'absolute',
            bottom: '0',
            left: '-10%',
            width: '120%',
            height: '90%',
            roundedTop: '120%',
            bg: accentColor,
          }}
        />
        <Img
          src={image}
          alt={author}
          rounded="full"
          border="6px solid"
          borderColor={accentColor}
          position="relative"
          mt="-5"
          w="16"
          h="16"
          objectFit="cover"
          onClick={() => console.log("Image clicked")}
        />
        <Box position="relative" fontSize="sm" mt="3" textAlign="center">
          <Text as="h3" fontWeight="bold" fontSize="md">
            {author}
          </Text>
          <Text>{role}</Text>
        </Box>
      </Flex>
    </Flex>
  )
}

export default function Partners() {
  return (
    <Box as="section" bg={mode('white', 'gray.800')} py="12">
      <Fade top><Text align={'center'} fontSize='7xl' mb='50px' fontWeight={'bold'}>Our Partners</Text></Fade>
      <Box
        maxW={{
          base: 'xl',
          md: '4xl',
        }}
        mx="auto"
        px={{
          md: '8',
        }}
      >
        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
          }}
          spacing="20"
        >
          <Fade left>
            <Testimonial
              logo={<LogoGray companyLogo='buddycompany' />}
              author="Metin Asqari"
              role="Chief Technology Officer at BuddyCompany"
              colorScheme="blue"
              image="https://avatars.githubusercontent.com/u/19522616?v=4"
            >
              BuddyCompany is the one-stop shop for services around home. From cleaning to painting to gardening, we can do absolutely almost everything.
            </Testimonial></Fade>
          <Fade right>
            <Testimonial
              logo={<LogoGray companyLogo='menea' />}
              author="Elvis Nazdrajić"
              role="CEO at Menea"
              colorScheme="yellow"
              image="https://media-exp1.licdn.com/dms/image/C5603AQGuG6nLo9NC8Q/profile-displayphoto-shrink_800_800/0/1560861897778?e=1655337600&v=beta&t=ixpUELI1zhuWuTK-VhYnMW7SZE2We8m0WzflEroXXZc"
            >
              Menea AB is a trading and consulting company that started in 2013 with focus on industrial manufacturers from southeastern Europe.
            </Testimonial>

          </Fade>

        </SimpleGrid>
      </Box>
    </Box>
  )
}
