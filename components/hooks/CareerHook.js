import React from 'react';
import { motion } from "framer-motion"
import {
    chakra,
    Box,
    Text,
    IconButton,
    Button,
    Flex
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
  import CareerForm from '../Career/CareerForm'
  import useMediaQuery  from '../hooks/useMediaQuery';

  import { useDisclosure } from '@chakra-ui/react'

    const IsolatedModal = ({cards}) => 
    {

    const isDesktop = useMediaQuery('(min-width: 960px)');
    const OverlayOne = () => (
    <ModalOverlay
      bg='blackAlpha.300'
      backdropFilter='blur(10px)'
    />)

    const { isOpen: isFirstOpen, onOpen: onFirstOpen, onClose: onFirstClose } = useDisclosure()
    const { isOpen: isSecondOpen, onOpen: onSecondOpen, onClose: onSecondClose } = useDisclosure()
    const [overlay, setOverlay] = React.useState(<OverlayOne />)

    return(
    <motion.div whileHover={{ scale: 1.05 }}><Box boxShadow='dark-lg'
      mx="auto"
      px={8}
      py={4}
      rounded="lg"
      shadow="lg"
      bg={'whiteAlpha.900'}
      maxW= {isDesktop ? "650px" : '300px'}
      mb='50px'
      mr='45px'
      >
        
        <Modal isOpen={isFirstOpen} onClose={onFirstClose} isCentered size={'4xl'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize="5xl" >{cards.jobTitle}</ModalHeader>
          <ModalCloseButton _focus={{ border:'none' }} />
          <ModalBody>
            {cards.longDescription}
          </ModalBody>

          <ModalFooter>
            <Button _focus={{ border:'none' }} mr={3} onClick={onFirstClose}>
              Close
            </Button>
            <Button bg='#fab717' _focus={{ border:'none' }} onClick={() => {
                                setOverlay(<OverlayOne />)
                                onSecondOpen()}}>Apply</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Box mt={6}>
        <Text
          fontSize="5xl"
          color="gray.700"
          fontWeight="800">
          {cards.jobTitle}
        </Text>

        <chakra.p mt={2} color="gray.600">
          {cards.shortDescription}
        </chakra.p>

        <Modal  isOpen={isSecondOpen} onClose={onSecondClose} size='lg'>
                {overlay}
                <ModalContent>
                    <ModalHeader color={'#2b2b2b'}>Apply for job</ModalHeader>
                        <ModalCloseButton _focus={{ border:'none' }}/>
                    <ModalBody zIndex={9999}>
                        <CareerForm />
                    </ModalBody>
                    <ModalFooter>
                     <Button _focus={{ border:'none' }} onClick={onSecondClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
                            </Modal>
        
      </Box> <Flex  w='100%' justifyContent={'flex-end'}><IconButton _focus={{ border:'none' }} justifyContent={'center'} w={isDesktop ? "20%" : '50%'} onClick={onFirstOpen}><Text>Read more</Text></IconButton></Flex>
    </Box> </motion.div>
    )

  }

  export default IsolatedModal;