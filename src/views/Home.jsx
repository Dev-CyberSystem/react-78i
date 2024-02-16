import { Container } from 'react-bootstrap'
import Footer from '../components/footer/Footer'
import Navbar from '../components/header/Navbar'
import Main from '../components/main/Main'

const Home = () => {
  return (
    <div className="Container">

        <Navbar />
        <Main />
        <Footer />
        
    </div>
  )
}

export default Home