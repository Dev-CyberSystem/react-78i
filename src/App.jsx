import 'bootstrap/dist/css/bootstrap.min.css';
import Navegador from './components/Navbar/Navegador.jsx';
import Home from '../src/views/Home/Home.jsx';
import About from '../src/views/About/About.jsx';
import Rutas from './components/Rutas/Rutas.jsx';

function App() {
  return (
    <>
    <div className="d-flex flex-column align-items-center justify-content-between"> 
    <Navegador/>
    <Rutas/>
    </div>
    </>
  )
}

export default App