import {
  Box,
  Flex, 
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';
import LogoOrng from  "./Logos/LogoOrng"  
import { motion } from "framer-motion"

const Links = [{name: 'Home', href:'#'},
               {name: 'Career', href :'#career'},
               {name: 'Partners',href:'#partners'}, 
               {name: 'About us', href:'#about'},
            ];

export default function withAction() {
  const { isOpen, onOpen, onClose,  } = useDisclosure();
  
  return (
    <>
    
    
      <Box px={6} w='100%' position='fixed' zIndex={1} top='0' right='0' borderBottomRadius={isOpen ?'0px':'20px'} bg={isOpen ? 'rgba(250,183,23)':'#fab717'} h={isOpen?'100%':''}>
      
        <Flex h={'16'}  alignItems={'center'} justifyContent={'space-between'} >
        <LogoOrng />
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
            <Box ></Box>
          </HStack> 
        </Flex>
        
        {isOpen ? (
          <Box w='100%' pb={4} display={{ md: 'none' }} align='center' position='relative' top='150'>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <Link key={link.name} href={link.href}
                
                px={2}
                py={1}
                border='1px solid black'
                color="black"
                _hover={{
                  color: 'white'
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