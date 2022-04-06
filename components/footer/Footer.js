import {
    Box,
    Divider,
    Flex,
    HStack,
    SimpleGrid,
    Stack,
    Text,
    Wrap,
    WrapItem,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { LanguageSwitcher } from './LanguageSwitch'
  import { SocialButton } from './SocialButton'
  import { footerLinks, links, socialLinks } from './_dataFooter'
  import LogoFooter from  "./LogoFooter" 
  
  export default function Footer() {
      return(
    <Box as="footer" bg="black" color="white" py="64px">
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
            <HStack spacing="4" mt="8" as="ul">
              {socialLinks.map((link, idx) => (
                <SocialButton key={idx} href={link.href}>
                  <Box srOnly>{link.label}</Box>
                  {link.icon}
                </SocialButton>
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
                        as="a"
                        href={link.href}
                        _hover={{
                          textDecor: 'underline',
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
        <Divider my="10" borderColor="blue.300" />
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
            <WrapItem >
              <Box> <Text>&copy; Copyright. All rights reserved ZenoTech </Text></Box>
            </WrapItem>
          </Wrap>
        </Flex>
      </Box>
    </Box>
  )}
  