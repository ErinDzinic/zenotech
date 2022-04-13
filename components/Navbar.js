import {
  Box,
  Flex, 
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Stack,
  color,
  
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';
import LogoGray from  "./Logos/LogoGray"  
import { motion } from "framer-motion"
import { useState } from 'react';


const Links = [{name: 'Home', href:'#'},
               {name: 'Career', href :'#career'},
               {name: 'Partners',href:'#partner'}, 
               {name: 'About us', href:'#about'},
            ];

export default function withAction() {
  const { isOpen, onOpen, onClose,  } = useDisclosure();
  

  return (
    <>
      <Box px={6} w='100%' position='fixed' zIndex={10} top='0' right='0'  bg='white' h={isOpen?'100%':''} boxShadow='md' >
      
        <Flex h={'16'} alignItems={'center'} justifyContent={'space-between'} >
        <LogoGray pl='55px'/>
          <IconButton
            size={'lg'}
            position='relative'
            left='10'
            top='2'
            variant='unstyled'
            icon={isOpen ? <motion.div animate={{rotate: '180deg'}}><CloseIcon /></motion.div> : <motion.div animate={{rotateX: '180deg'}}><HamburgerIcon w='35px'/></motion.div>}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={ isOpen ? onClose : onOpen }
            _focus={{ border: 'none '}}
          />
       
          <HStack spacing={8} alignItems={'center'}  >
            <HStack
              id='navDiv'
              as={'nav'}
              fontSize='20px'
              fontWeight='bold'
              pt='18px'
              w='100%'
              spacing={6}
              display={{ base: 'none', md: 'flex' }}
              >
              {Links.map((link) => (
                <Link key={link.name} href={link.href}
                 px={2}
                 py={1}
                 _hover={{
                 color: '#fab717',
                 }}
                 _focus={{border:'none'}}
                >{link.name}</Link>
              ))}
            </HStack>
            <Box ></Box>
          </HStack> 
        </Flex>
        
        {isOpen ? (
          <Box w='100%' pb={6} display={{ md: 'none' }} align='center' position='relative' top='150'>
            <Stack as={'nav'} spacing={4} >
              {Links.map((link) => (
                <Link key={link.name} href={link.href}
                borderRadius='10px'
                px={2}
                py={1}
                border='2px solid #fab717'
                color="#2b2b2b"
                _hover={{
                  textDecoration: 'none'
                }}
                fontWeight='bold'
                onClick={ isOpen ? onClose : onOpen } 
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