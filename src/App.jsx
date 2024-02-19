import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navegador from './componentes/navegador/Navegador';
import GrupoTarjetas from './componentes/tarjetas/GrupoTarjetas';
import Slider from './componentes/carrusel/Slider';

function App() {
  return (
    <>
    <Navegador/>
    <Slider/>
    <h2>PRODUCTOS DESTACADOS</h2>
    <GrupoTarjetas/>
    </>
  )
}

export default App
