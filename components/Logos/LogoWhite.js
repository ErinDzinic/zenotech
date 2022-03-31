import React from "react"
import { Box, Img, Link} from "@chakra-ui/react"

export default function Logo(props){
    return(
    <Box {...props}>
         <Img w='180px' src="../images/ztwhite.png" alt='logo'/>
    </Box>
    )
}