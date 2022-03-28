import React from "react"
import { Box, Img, Link} from "@chakra-ui/react"

export default function Logo(props){
    return(
    <Box {...props}>
        <Link href="#">
         <Img important opacity='1' w='180px' p='5px' src="../images/ztorg.png" alt='logo'/>
        </Link>
    </Box>
    )
}