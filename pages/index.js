import '../styles/Home.module.css'
import Layout from '../components/Layout'
import HomeTab from '../components/HomeTab'
import Footer from '../components/footer/Footer'
import Partners from '../components/Partners'
import RespNavbar2 from '../components/RespNavbar2'
import Career from '../components/Career'
import About from '../components/About'


export default function Home() {
  return (
      <Layout  >
        <RespNavbar2 />
        <HomeTab />
        <Career />
        <Partners />
        <About />
        <Footer />
      </Layout>
  )
}
