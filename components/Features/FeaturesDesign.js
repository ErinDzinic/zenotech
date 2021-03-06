import { Box, Stack, Text, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'

export const Feature = (props) => {
  const { title, children, icon } = props
  return (
    <Box align='center'>
      <Box color={mode('#fab717', 'blue.300')} fontSize="5xl">
        {icon}
      </Box>
      <Stack mt="6">
        <Text as="h3" color={mode('black', 'blue.300')} fontSize="xl" fontWeight="extrabold">
          {title}
        </Text>
        <Text pr="6" lineHeight="tall">
          {children}
        </Text>
      </Stack>
    </Box>
  )
}
export default Feature
