import React from "react"
import { Box, Img, Link} from "@chakra-ui/react"
import { motion } from "framer-motion"

export default function Logo(props){
    return(
    <Box {...props} paddingLeft='50px'>
        <motion.div transition={{ duration: 0.7}}>
        <Link href="#" _focus={{border: 'none'}}>
         <Img p='15px' w='200px' src="../images/ztorg.png" alt='logo' />
        </Link>
        </motion.div>
    </Box>
    )
}