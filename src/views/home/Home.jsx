
import Carrousel from '../../components/carrousel/Carrousel'
import Footer from '../../components/footer/Footer'
import Navegador from '../../components/navegador/Navegador'



export const Home = () => {
  return (
    <div className='d-flex flex-column align-items-center justify-content-between'>
      <Navegador/>
    <Carrousel/>
    <Footer/>
    </div>
  )
}

export default Home
