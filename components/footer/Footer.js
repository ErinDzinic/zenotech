import {
  Box,
  Divider,
  Flex,
  HStack,
  SimpleGrid,
  Stack,
  Text,
  Wrap,
} from '@chakra-ui/react'
import * as React from 'react'
import { SocialButton } from './SocialButton'
import { footerLinks, links, socialLinks } from './_dataFooter'
import LogoFooter from "./LogoFooter"
import { motion } from "framer-motion"
import Link from 'next/link'


export default function Footer() {
  return (
    <Box as="footer" bg="#2b2b2b" color="white" py="64px">
      <Box maxW="7xl" px="8" mx="auto">
        <Flex
          direction={{
            base: 'column',
            lg: 'row',
          }}
          justify="space-between"
          pb="8"
          align="flex-start"
          id="top"
        >
          <Box
            paddingEnd="12"
            mb={{
              base: '10',
              lg: 0,
            }}
          >
            <LogoFooter />

            <HStack spacing="5" mt="8" ml='-20' as="ul" justifyContent={'center'}>
              {socialLinks.map((link, idx) => (
                <motion.div whileHover={{
                  rotate: '30deg'
                }}
                  whileTap={{
                    rotate: '30deg'
                  }}>
                  <SocialButton key={idx} href={link.href}>
                    <Box srOnly>{link.label}</Box>
                    {link.icon}
                  </SocialButton></motion.div>
              ))}
            </HStack>
          </Box>
          <SimpleGrid
            w="full"
            maxW={{
              base: 'unset',
              lg: '2xl',
            }}
            columns={{
              base: 2,
              lg: 4,
            }}
            spacing={{
              base: '8',
              md: '4',
            }}
            fontSize="sm"
          >
            {links.map((group, idx) => (
              <Box key={idx}>
                <Text fontWeight="bold" mb="4">
                  {group.title}
                </Text>
                <Stack as="ul" listStyleType="none">
                  {group.links.map((link, idx) => (
                      <Box as="li" key={idx}>
                        <Box
                          href={link.href}
                          as="a"
                          _hover={{
                            color: '#fab717',
                            textDecor: 'none',
                            cursor:'pointer'
                          }}
                        >
                          {link.label}
                          {link.badge && (
                            <Box as="span" marginStart="2">
                              {link.badge}
                            </Box>
                          )}
                        </Box>
                      </Box>
                  ))}
                </Stack>
              </Box>
            ))}
          </SimpleGrid>
        </Flex>

        <Flex
          direction={{
            base: 'column-reverse',
            lg: 'row',
          }}
          align={{
            base: 'flex-start',
            lg: 'center',
          }}
          justify="space-between"
          fontSize="sm"
        >
          <Wrap
            id="bottom"
            spacing={{
              base: '4',
              lg: '8',
            }}
            mt={{
              base: '4',
              lg: '0',
            }}
          >
          </Wrap> <Text> Copyright &copy;  ZenoTech d.o.o.  All Rights Reserved -  2022 </Text>
        </Flex>
      </Box>
    </Box>
  )
}
