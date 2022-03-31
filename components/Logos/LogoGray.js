import React from "react"
import { Box, Img, Link} from "@chakra-ui/react"
import { motion } from "framer-motion"

export default function Logo(props){
    return(
   
    <Box {...props} background='transparent' position='fixed' zIndex={1}>
        <motion.div animate={{x: 5}} transition={{ duration: 0.7}}>
            <Link href="#" _focus={{border: 'none'}}>
                <Img w='160px' src="../images/ztgr.png" alt='logo'/>
            </Link>
        </motion.div>
    </Box>
    )
}