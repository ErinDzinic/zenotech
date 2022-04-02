import '../styles/Home.module.css'
import Layout from '../components/Layout'
import Navbar from '../components/NavBar'
import HomeTab from '../components/HomeTab'
import Footer from '../components/Footer'
import Partners from '../components/Partners'
import RespNavbar2 from '../components/RespNavbar2'
import { Collapse } from '@chakra-ui/react'

export default function Home() {
  return (
      <Layout>
        <RespNavbar2 />
        <HomeTab />
        <Partners />
        <Footer />
      </Layout>
  )
}
