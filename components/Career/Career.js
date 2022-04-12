import React from "react";
import {
    Flex,
    Box,
    Text,
    IconButton,
    Button,
    useDisclosure,
    useColorModeValue,
    Heading,
  } from '@chakra-ui/react';
  import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
  import DiagonalDiv from "../DiagonalDivs/DiagonalDiv";
  import CareerForm from './CareerForm'
  import { useRef } from 'react'
  import Fade from 'react-reveal/Fade';
  import CareerCard from "./CareerCard"
  import { Scrollbars } from "react-custom-scrollbars";
  import useMediaQuery  from '../hooks/useMediaQuery';

  
  

export default function Career(){
    const OverlayOne = () => (
        <ModalOverlay
          bg='blackAlpha.300'
          backdropFilter='blur(10px)'
        />
      )

      const careerRef = useRef()
      const { isOpen, onOpen, onClose } = useDisclosure()
      const [overlay, setOverlay] = React.useState(<OverlayOne />)
      const isDesktop = useMediaQuery('(min-width: 960px)');

    return(
<>      
        
<Flex
     ref={careerRef}
     id = 'career'
     bg={useColorModeValue("#2b2b2b", "gray.600")}
     p={50}
     w="100%"
     alignItems="center"
     justifyContent="center" >
        <Fade>
         
                <Box borderRadius={'20px'} w={isDesktop ? '750px' : '355px'} bg={'white'} h='600px' >
                   
                  <Heading fontFamily={'Rajdhani'} textAlign='center' pb='23px' pt='15px'>Current Job Openings</Heading>
                    <Scrollbars autoHide style={{ height: 500 }} ><CareerCard /> </Scrollbars>
                    <Flex  justifyContent="center" alignItems="center" mt={10} mb={40} >
                        <IconButton
                            w='50%'
                            color={useColorModeValue("black", "brand.400")}
                            _hover={{ color: '#fab717',border: '2px solid #fab717' }}
                            onClick={() => {
                                setOverlay(<OverlayOne />)
                                onOpen()
                                
                              }}
                            >
                         <Text>Apply</Text>
                        </IconButton>
                     </Flex>
                 </Box>
         </Fade> 
</Flex>
        
<DiagonalDiv />

<Modal  isOpen={isOpen} onClose={onClose} size='lg'>
                {overlay}
                <ModalContent>
                    <ModalHeader color={'#2b2b2b'}>Apply for job</ModalHeader>
                        <ModalCloseButton />
                    <ModalBody zIndex={9999}>
                        <CareerForm />
                    </ModalBody>
                    <ModalFooter>
                     <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
                            </Modal>
        
</>
        
    )
}