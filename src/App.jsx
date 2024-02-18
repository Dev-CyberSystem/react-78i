import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navegador from './componentes/navegador/Navegador';
import Footer from './componentes/footer/Footer';
import Card from './componentes/cards/Card';
import Slider from './componentes/carrousel/Slider';


function App() {

  return (
    <>
      <Navegador />
      <Slider/>
      <Card />
      <Footer/>
      
    </>
  )
}

export default App
