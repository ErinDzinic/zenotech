import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css'


// const GlobalStyle = createGlobalStyle`
//     @font-face {
//     font-family: 'Eina03-Bold';
//     src: url('..public/font/Eina03/Eina03-Regular.ttf') format('ttf');
//     font-style: normal;
//     font-display: swap;
//   }
//   @font-face {
//     font-family: 'Eina03-Regular';
//     src: url('..public/font/Eina03/Eina03-Regular.ttf') format('ttf');
//     font-style: bold;
//     font-display: swap;
//   }
// `;

function MyApp({ Component, pageProps }) {
  return(
    <ChakraProvider>
      {/* <GlobalStyle /> */}
        <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
