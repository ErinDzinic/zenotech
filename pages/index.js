import '../styles/Home.module.css'
import Layout from '../components/Layout'
import Navbar from '../components/NavBar'
import HomeTab from '../components/HomeTab'
import Footer from '../components/Footer'
import Partners from '../components/Partners'

export default function Home() {
  return (
      <Layout>
        <Navbar />
        <HomeTab />
        <Partners />
        <Footer />
      </Layout>
  )
}
