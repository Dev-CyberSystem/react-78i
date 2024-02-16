import Buttons from '../../components/buttons/Buttons'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Main from '../../components/main/Main'


const Home = () => {
  return (
    <div className='container home-container d-flex flex-column justify-content-between gap-5 py-2'>
        <Header />
        <Main />
        <Buttons />
        <Footer />
    </div>
  )
}

export default Home