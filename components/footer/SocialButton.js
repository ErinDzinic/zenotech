import { chakra } from '@chakra-ui/react'

export const SocialButton = chakra('a', {
  baseStyle: {
    rounded: 'lg',
    w: '10',
    h: '10',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    bg: '#2b2b2b',
    color: 'white',
    transition: 'all 0.5s',
    _hover: {
      bg: '#fab717',
    },
  },
})
