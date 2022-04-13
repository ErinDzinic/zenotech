import {
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { BsPerson } from 'react-icons/bs';
import { MdCall, MdOutlineEmail } from 'react-icons/md';
import { useState } from 'react'

export default function contact() {

    return (
      <Box bg='white'
        borderRadius={'lg'}
        shadow='base'
        p={8}
        color='gray.700'
      >

        <VStack spacing={5} >
      <FormControl isRequired>
        <FormLabel >Name</FormLabel>
        <InputGroup>
          <InputLeftElement children={<BsPerson />} />
          <Input 
          type="text" 
          name="name" 
          placeholder="Your Name" />
        </InputGroup>
        </FormControl>

        <FormControl>
        <FormLabel htmlFor='surname'>Surname</FormLabel>
        <InputGroup>
          <InputLeftElement children={<BsPerson />} />
          <Input 
           type="text" 
           name="surname" 
           placeholder="Your Surname" />
        </InputGroup>
        </FormControl>

      <FormControl isRequired>
        <FormLabel >Email</FormLabel>
        <InputGroup>
          <InputLeftElement children={<MdOutlineEmail />} />
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
          />
        </InputGroup>
      </FormControl>

      <FormControl>
      <FormLabel htmlFor='phonenumber'>Phone number</FormLabel>
      <InputGroup>
          <InputLeftElement children={<MdCall />} />
          <Input
            onChange={(e)=>{setNumber(e.target.value)}}
            type='number'
            name="number"
            placeholder="Your Phone Number"
          />
        </InputGroup>
      </FormControl>

      <FormControl>
      <FormLabel htmlFor='message'>Motivational Letter (Optional)</FormLabel>
        <Textarea
          onChange={(e) => {setMessage(e.target.value)}}
          name="message"
          placeholder="Your Message"
          rows={6}
          resize='vertical'
        />
      </FormControl>
        
      <FormControl>
      <FormLabel htmlFor='cv'>Upload your CV</FormLabel>
      <InputGroup>
          <Input
            onChange={(e) => {setCv(e.target.value)}}
            type='file'
            name="file"
            h='50px'
            pt='10px'
            />
        </InputGroup>
      </FormControl>

      <Input type='submit' onClick={(e) => {handleSubmit(e)}}/>
    </VStack>
      </Box>
  );
}