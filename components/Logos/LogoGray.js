import React from "react"
import { Box, Img, Link} from "@chakra-ui/react"

export default function Logo(props){
    return(
    <Box {...props}>
        <Link href="#">
         <Img w='250px' p='5px' src="../images/ztgr.png" alt='logo'/>
        </Link>
    </Box>
    )
}