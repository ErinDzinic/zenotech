import React from "react";
import {Box,Text} from '@chakra-ui/react'

export default function TopDiagonalDiv(){
    return(
        <Box
        position='absolute'
        left='0'
        top='auto'
        right='auto'
        bottom='0'
        zIndex={0}
        width='100%'
        clear= 'none'
        justifyContent='center'
        alignItems='flex-end'
        borderBottom='10vw solid #2b2b2b'
        borderRight='100vw solid transparent'
        backgroundColor='transparent'
        backgroundClip='border-box'
        ></Box>
    )
}