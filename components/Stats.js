import { Box, Container, SimpleGrid } from '@chakra-ui/react'
import * as React from 'react'
import { Stat } from './StatsLook'
const stats = [
  {
    label: 'Total Lorem',
    value: '71,887',
  },
  {
    label: 'Avg. Lorem',
    value: '56.87%',
  },
  {
    label: 'Avg. Lorem',
    value: '12.87%',
  },
  {
    label: 'Avg. Lorem',
    value: '12.87%',
  },
]

export default function Stats(){
  return(
    <Box
    display={'inline'}
    w='100%'
    as="section"
    py={{
      base: '4',
      md: '8',
    }}
  >
    <Container >
      <SimpleGrid
        columns={{
          base: 2,
          md: 4,
        }}
        gap={{
          base: '10',
          md: '3',
        }}
      >
        {stats.map(({ label, value }) => (
          <Stat key={label} label={label} value={value} />
        ))}
      </SimpleGrid>
    </Container>
  </Box>
  )
}
  