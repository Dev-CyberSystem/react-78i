import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navegador from './componentes/navegador/Navegador';
import Footer from './componentes/footer/Footer';
import Card from './componentes/cards/Card';
import Slider from './componentes/carrousel/Slider';
import Rutas from './componentes/rutas/Rutas';



function App() {

  return (
    <>
      <Navegador />
      <Rutas />
      <Slider />
      <Card />
      <Footer />
      
    </>
  )
}

export default App
