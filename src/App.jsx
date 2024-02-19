import 'bootstrap/dist/css/bootstrap.min.css';
import Navegador from './componentes/navegador/Navegador';
import GrupoTarjetas from './componentes/tarjetas/GrupoTarjetas';
import Carrusel from './componentes/carrusel/Carrusel';
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
