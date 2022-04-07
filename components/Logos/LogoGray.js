import React from "react"
import { Box, Img, Link} from "@chakra-ui/react"
import { motion } from "framer-motion"

export default function Logo(props){
    return(
   
    <Box {...props}>
            <Link href="#" _focus={{border: 'none'}}>
                <Img p='15px' pt='10px' w='200px' src="../images/ztgr.png" alt='logo'/>
            </Link> 
    </Box>
    )
}