import { ReactNode } from 'react';
import { Fade, ScaleFade, Slide, SlideFade } from '@chakra-ui/react'
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Spacer,
  Button,
  Menu,
  MenuButton,
  MenuList,
  Collapse,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  background,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';
import LogoGray from "./Logos/LogoGray"; 
import LogoOrng from  "./Logos/LogoOrng"  
import { motion } from "framer-motion"

const Links = [{name: 'Home', href:'#'},
               {name: 'Career', href :'#career'},
               {name: 'Partners',href:'#partners'}, 
               {name: 'About us', href:'#about'},
            ];

// const NavLink = ({ children }) => (
//   <Link
//     px={2}
//     py={1}
//     color="black"
//     _hover={{
//       color: 'white',
//     }}
//     _focus={{border: 'none'}}
//     href={'#'}>
//     {children}
//   </Link>
// );

export default function withAction() {
  const { isOpen, onOpen, onClose,  } = useDisclosure();
  const { isOpenT, onToggle} = useDisclosure();

  return (
    <>
    
    
      <Box px={6} position='fixed' zIndex={9999} top='0' right='0' borderBottomRadius='30px' bg={isOpen ? 'rgba(250,183,23,0.3)':'#fab717'}>
        <Flex h={16}  alignItems={'center'} justifyContent={'space-between'} paddingRight={isOpen ? '100px' : '100px'}>
          <IconButton
            size={'lg'}
            variant='unstyled'
            icon={isOpen ? <motion.div animate={{rotate: '180deg'}}><CloseIcon h='18px' w='18px'/></motion.div> : <motion.div animate={{rotateX: '180deg'}}><HamburgerIcon h='18px' w='18px'/></motion.div>}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={() => {
              isOpen ? onClose : onOpen;
              onToggle;
            } }
            _focus={{ border: 'none '}}
          />
       
          <HStack spacing={8} alignItems={'center'}  >
            <HStack
              as={'nav'}
              fontSize='20px'
              fontWeight='bold'
              pt='15px'
              w='100%'
              spacing={6}
              display={{ base: 'none', md: 'flex' }}
              >
              {Links.map((link) => (
                <Link key={link.name} href={link.href}
                 px={2}
                 py={1}
                 color="black"
                 _hover={{
                 color: 'white',
                 }}
                 _focus={{border: 'none'}}
                >{link.name}</Link>
              ))}
            </HStack>
            <Box ><LogoOrng /></Box>
          </HStack> 
        </Flex>
        
        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <Link key={link.name} href={link.href}
                px={2}
                py={1}
                color="black"
                _hover={{
                color: 'white',
                }}
                fontWeight='bold'
                _focus={{border: 'none'}}
               >{link.name}</Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}