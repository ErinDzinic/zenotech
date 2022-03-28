import { Flex,Text} from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import HomeTab from '../components/HomeTab'

export default function Home() {
  return (
    <>

    <Flex>
      <NavBar />
    </Flex>

    <Flex>
      <HomeTab />
    </Flex>

    <Flex>
      <Footer />
    </Flex>

    </>
  )
}
