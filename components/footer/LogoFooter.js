import React from "react"
import { Box, Img, Link} from "@chakra-ui/react"
import { motion } from "framer-motion"

export default function Logo(props){
    return(
    <Box {...props}>
        <Link _focus={{border: 'none'}}>
         <Img w='350px' src="../images/LogoFooter.png" alt='logo' />
        </Link>
    </Box>
    )
}