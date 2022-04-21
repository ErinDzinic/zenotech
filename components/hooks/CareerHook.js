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
import useMediaQuery from '../hooks/useMediaQuery';

import { useDisclosure } from '@chakra-ui/react'

const IsolatedModal = ({ cards }) => {

  const isDesktop = useMediaQuery('(min-width: 960px)');
  const { isOpen: isFirstOpen, onOpen: onFirstOpen, onClose: onFirstClose } = useDisclosure()
  return (
    <motion.div whileHover={{ scale: 1.05 }}><Box boxShadow='dark-lg'
      mx="auto"
      px={8}
      py={5}
      rounded="lg"
      shadow="lg"
      bg={'whiteAlpha.900'}
      maxW={isDesktop ? "650px" : '300px'}
      mb='55px'
      mr={isDesktop? '50px' : '28px'}
    >

      <Modal closeOnOverlayClick={false} isOpen={isFirstOpen} onClose={onFirstClose} size={isDesktop?'4xl':'full'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize="5xl" >{cards.jobTitle}</ModalHeader>
          <ModalCloseButton _focus={{ border: 'none' }} />
          <ModalBody>
            <Box display={'flex'} alignItems={'center'} flexDirection='row'>
              <Text fontSize={'1.2rem'} fontWeight={700}>Type:</Text>
              <Text marginLeft={'1.2rem'}>{cards.type}</Text>
            </Box>
            <Box marginTop={'.5rem'} display={'flex'} alignItems={'center'} flexDirection='row'>
              <Text fontSize={'1.2rem'} fontWeight={700}>Location:</Text>
              <Text marginLeft={'1.2rem'}>{cards.location}</Text>
            </Box>
            <Box marginTop={'.5rem'} display={'flex'} alignItems={'center'} flexDirection='row'>
              <Text fontSize={'1.2rem'} fontWeight={700}>Starting date:</Text>
              <Text marginLeft={'1.2rem'}>{cards.startingDate}</Text>
            </Box>
            <Box marginTop={'.5rem'} display={'flex'} alignItems={'flex-start'} flexDirection='row'>
              <Text fontSize={'1.2rem'} fontWeight={700}>Responsibilities:</Text>
            </Box><Text textTransform={'initial'}>{cards.longDescription}</Text>
          </ModalBody>

          <ModalFooter>
            <Button bg='#fab717' _hover={{ bg: '#f6ce6f' }} _focus={{ border: 'none' }} mr={3} onClick={onFirstClose}>
              Close
            </Button>
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

      </Box>
      <Flex w='100%' pt='7px' justifyContent={'flex-end'}><IconButton borderBottom={'2px solid #fab717'} _focus={{ borderBottom: '2px solid #fab717' }} justifyContent={'center'} w={isDesktop ? "20%" : '50%'} onClick={onFirstOpen}><Text>Read more</Text></IconButton></Flex>
    </Box> </motion.div>
  )

}

export default IsolatedModal;