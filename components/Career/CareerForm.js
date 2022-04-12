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

  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [number,setNumber] = useState('')
  const [message, setMessage] = useState('')
  const [cv, setCv] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) =>{
       e.preventDefault()
       console.log('sending')

      let data = {
        name,
        email,
        surname,
        message,
        number,
        cv,
      }

      fetch('./api/contact', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then((res) => {
        console.log('Response received')
        if (res.status === 200) {
          console.log('Response succeeded!')
          setSubmitted(true)
          setName(' ')
          setSurname(' ')
          setNumber(' ')
          setEmail(' ')
          setMessage(' ')
          setCv(' ')
        }
      })
  }


    return (
      <Box bg='white'
        borderRadius={'lg'}
        shadow='base'
        p={8}
        color='gray.700'
      >

        <VStack spacing={5} >
      <FormControl isRequired>
        <FormLabel htmlFor='name'>Name</FormLabel>
        <InputGroup>
          <InputLeftElement children={<BsPerson />} />
          <Input 
          onChange={(e) => {setName(e.target.value)}} 
          type="text" 
          name="name" 
          placeholder="Your Name" />
        </InputGroup>
        </FormControl>

        <FormControl>
        <FormLabel htmlFor='surname'>Surname</FormLabel>
        <InputGroup>
          <InputLeftElement children={<BsPerson />} />
          <Input onChange={(e) => {setSurname(e.target.value)}}
           type="text" 
           name="surname" 
           placeholder="Your Surname" />
        </InputGroup>
        </FormControl>

      <FormControl isRequired>
        <FormLabel htmlFor='email'>Email</FormLabel>
        <InputGroup>
          <InputLeftElement children={<MdOutlineEmail />} />
          <Input
            onChange={(e) => {setEmail(e.target.value)}}
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