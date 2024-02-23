import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navegador from './componentes/navegador/Navegador';
import Footer from './componentes/footer/Footer';
import Card from './componentes/cards/Card';
import Slider from './componentes/carrousel/Slider';
// import Rutas from './componentes/rutas/Rutas';
// import Home from './views/home/home/Home';


function App() {

  return (
    <>
      <Navegador />
      {/* <Home /> */}
      <Slider />
      <Card />
      <Footer />
      {/* <Rutas /> */}
      
    </>
  )
}

export default App
