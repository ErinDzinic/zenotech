import React from "react";
import { Link, Box, Flex, Text, Button, Stack, Spacer, Collapse, useDisclosure, background } from "@chakra-ui/react";
import LogoOrng from "./Logos/LogoOrng";
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { useState, useEffect } from 'react'

const NavBar = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <Spacer/><LogoOrng /><Spacer/>
      <MenuToggle toggle={toggle} isOpen={isOpen}/>
      <MenuLinks isOpen={isOpen}/>
      <Spacer/>
    </NavBarContainer>
  );
};

const MenuToggle = ({ toggle, isOpen}) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon boxSize='1.2em' m='10px'/> : <HamburgerIcon viewBox="0 0 20 20" boxSize='1.6em' m='30px 0px 20px 0px' />}
    </Box>
  );
};

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Link href={to} _hover={{color: 'white'}}  _focus = {{border: 'none'}}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
    
  );
};

const MenuLinks = ({ isOpen }) => {
  return (
    
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
      fontSize='2xl'
      fontWeight='bold'
      p="30px 15px 0px 0px"
      m='0px 0px 15px 0px'
      top='0'
      
    >
     
      <Stack
        spacing={10}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
       
      >
          <MenuItem to="#">Home</MenuItem>
          <MenuItem to="#career">Career</MenuItem>
          <MenuItem to="#partners">Partners</MenuItem>
          <MenuItem to="#about">About us </MenuItem>
      </Stack>
    </Box>
  );
};


const NavBarContainer = ({ children, ...props }) => {
  const [colorChanges, setColorchange] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', changeNavbar)
    return () => window.removeEventListener('scroll', changeNavbar)
  })

  const checkY = () => {
    console.log(window.scrollY)
  }

  const changeNavbar = () => {
    if(window.scrollY <= 250){
      setColorchange(true)
    }
    else{
      setColorchange(false)
    }
  }
  return (
    <Box>
    <Flex 
      as="nav"
      justify="space-between"
      justifyContent="center"
      wrap="wrap"
      w="100%"
      h='10%'
      bg="#fab717"
      opacity = { colorChanges ? '1.0':'0.4'}
      color={["black", "black", "primary.700", "primary.700"]}
      position="fixed"
      transition='ease-in'
      {...props}
    >
      {children}
    </Flex>
    </Box>
  );
};



export default NavBar;