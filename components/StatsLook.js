import { Box, Heading, Stack, Text, useBreakpointValue, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
import { motion } from 'framer-motion'

 
export const Stat = (props) => {
  const { label, value, ...boxProps } = props
  return (
    <Box
      align='center'
      color={'black'}
      px={{
        base: '4',
        md: '6',
      }}
      py={{
        base: '5',
        md: '6',
      }}
      
      bg="rgba(255,255,255,0.4)"
      borderRadius="lg"
      boxShadow={useColorModeValue('lg', 'sm-dark')}
      {...boxProps}
    >
      <Stack>
        <Text  fontSize="lg" color="white" fontWeight='bold'>
          {label}
        </Text>
        
        <Heading fontFamily='Rajdhani'
          size={useBreakpointValue({
            base: 'md',
            md: 'md',
          })}
        >
          {value}
        </Heading>
      </Stack>
    </Box>
  )
}