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
        borderTop='10vw solid transparent'
        borderLeft='98.9vw solid #9a9ca2'
        backgroundColor='#fab717'
        backgroundClip='border-box'
        ></Box>
    )
}