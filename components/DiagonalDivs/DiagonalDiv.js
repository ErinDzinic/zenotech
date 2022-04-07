import React from "react";
import {Box,Text} from '@chakra-ui/react'

export default function DiagonalDiv(){
    return(
        <Box
        left='0'
        top='0'
        right='auto'
        bottom='auto'
        zIndex={9999}
        width='100%'
        clear= 'none'
        justifyContent='center'
        alignItems='flex-end'
        borderBottom='10vw solid transparent'
        borderLeft='98.9vw solid #2b2b2b'
        backgroundColor='white'
        backgroundClip='border-box'
        ></Box>
    )
}