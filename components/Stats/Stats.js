import { Box, Heading, Stack, StackDivider, Text, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
import { Stat } from './ChakraStat'
import Fade from 'react-reveal/Fade';

export default function Stats(){

return(
  <Box
    as="section"
    maxW="7xl"
    mx="auto"
    px={{
      base: '6',
      md: '8',
    }}
    py={{
      base: '12',
      md: '20',
    }}
  >
    <Fade right>
    <Box mb="12" textAlign="center">
      <Heading fontFamily={'Rajdhani'} color='#fab717' size="xl" fontWeight="extrabold" lineHeight="normal">
        We are ZenoTech
      </Heading>
      <Text
        fontSize="lg"
        mt="4"
        fontWeight="medium"
        color={useColorModeValue('white', 'whiteAlpha.700')}
      >
        Let's ask the numbers?
      </Text>
    </Box>
    <Stack
      spacing="8"
      direction={{
        base: 'column',
        md: 'row',
      }}
      divider={<StackDivider />}
    >
      <Stat title="Worked with over 15 freelancers in this fields." value="15+" />
      <Stat title="Established great connection between clients and our resources from Sweden and Bosnia and Herzegovina." value="2" />
      <Stat title="Fulfilled the needs of all clients we collaborated with." value="3/3" />
    </Stack>
    </Fade>
  </Box>
)}
