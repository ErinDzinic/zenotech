import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css'
import React, { useEffect } from 'react'


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.title = "Zenotech"
  }, [])
  return(
    <ChakraProvider>
        <Component {...pageProps} />
       
    </ChakraProvider>
  )
}

export default MyApp
