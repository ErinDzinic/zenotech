import React from "react"
import { Box, Img, Link} from "@chakra-ui/react"

export default function Logo(props){
    return(
    <Box {...props}>
        <Link href="#">
         <Img w='180px' p='5px' src="../images/ztwhite.png" alt='logo'/>
        </Link>
    </Box>
    )
}