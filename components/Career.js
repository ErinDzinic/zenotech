import React from "react";
import {
    chakra,
    Flex,
    Box,
    Text,
    IconButton,
    Button,
    useDisclosure,
    useColorModeValue,
    Link,
  } from '@chakra-ui/react';
  import { useState } from "react";
  import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
  import DiagonalDiv from "./DiagonalDivs/DiagonalDiv";
  import CareerForm from './CareerForm'
  import { useRef } from 'react'

export default function Career(){

    const OverlayOne = () => (
        <ModalOverlay
          bg='blackAlpha.300'
          backdropFilter='blur(10px)'
        />
      )

      const careerRef = useRef()
      const [data, setData] = useState([]);
      const { isOpen, onOpen, onClose } = useDisclosure()
      const [overlay, setOverlay] = React.useState(<OverlayOne />)

    return(
<>  
        <Flex
           bg={useColorModeValue("#9a9ca2", "gray.600")}
           p={50}
           w="full"
           alignItems="center"
           justifyContent="center"
           ref={careerRef}
           id = 'career'
        >
                    <Box
                    mx="auto"
                    px={8}
                    py={4}
                    rounded="lg"
                    shadow="lg"
                    bg={useColorModeValue("#fab717", "gray.800")}
                    maxW="2xl"
                >
                    <Box mt={2}>
                        <Link
                            fontSize="2xl"
                            color={useColorModeValue("gray.700", "white")}
                            fontWeight="700"
                            _hover={{
                                color: useColorModeValue("gray.600", "gray.200"),
                                textDecor: "underline",
                            }}
                        >
                           .NET Core 
                        </Link>
                        <chakra.p mt={2} color={useColorModeValue("gray.600", "gray.300")}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
                            expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos
                            enim reprehenderit nisi, accusamus delectus nihil quis facere in
                            modi ratione libero!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
                            expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos
                            enim reprehenderit nisi, accusamus delectus nihil quis facere in
                            modi ratione libero!
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
                            expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos
                            enim reprehenderit nisi, accusamus delectus nihil quis facere in
                            modi ratione libero!
                        </chakra.p>
                    </Box>
    
                    <Flex justifyContent="center" alignItems="center" mt={4}>
                        <IconButton
                            w='50%'
                            color={useColorModeValue("black", "brand.400")}
                            _hover={{ color: '#fab717' }}
                            onClick={() => {
                                setOverlay(<OverlayOne />)
                                onOpen()
                              }}
                            >
                         <Text>Apply</Text>
                        </IconButton>
    
             <Modal  isOpen={isOpen} onClose={onClose} size='3xl'>
                {overlay}
                <ModalContent>
                    <ModalHeader >Modal Title</ModalHeader>
                        <ModalCloseButton />
                    <ModalBody zIndex={9999}>
                        <CareerForm />
                    </ModalBody>
                    <ModalFooter>
                     <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
    
            </Flex>
                </Box>
                </Flex>
        
        
        <DiagonalDiv />
        
</>
        
    )
}