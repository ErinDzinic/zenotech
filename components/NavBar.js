import React from "react";
import { Link, Box, Flex, Text, Button, Stack, Spacer, Collapse, useDisclosure, background } from "@chakra-ui/react";
import LogoGray from "./Logos/LogoGray";
import LogoOrng from "./Logos/LogoOrng"
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from "framer-motion"


const NavBar = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
    <LogoGray/>
    <NavBarContainer {...props}>
      <Spacer /> 
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
      <Spacer />
    </NavBarContainer></>
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
      top='0'
    >
      <Stack
        spacing={10}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
      >
          <MenuItem  to="#">Home</MenuItem>
          <MenuItem  to="#career">Career</MenuItem>
          <MenuItem  to="#partners">Partners</MenuItem>
          <MenuItem  to="#about">About us </MenuItem>
      </Stack>
    </Box>
  );
};


const NavBarContainer = ({ children, isVisible, ...props }) => {
  const [colorChanges, setColorchange] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', changeNavbar)
    return () => window.removeEventListener('scroll', changeNavbar)
  })

  const changeNavbar = () => {
    if(window.scrollY <= 180){
      setColorchange(true)
    }
    else{
      setColorchange(false)
    }
  }


  return (
    
    <Box >
    <Flex 
      as="nav"
      justify="space-between"
      justifyContent="center"
      right='100'
      wrap="wrap"
      w="%"
      bg="#fab717"
      p='15px'
      borderBottomRadius='30px'
      borderTopLeftRadius='0px'
      color={["black", "black", "primary.700", "primary.700"]}
      position="fixed"
      zIndex={1}
      {...props}
    >
      {children}
    </Flex>
    </Box>
  );
};



export default NavBar;