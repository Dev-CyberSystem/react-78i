import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navegador from './componentes/navegador/Navegador';
import Rutas from './componentes/rutas/Rutas';
import Footer from './componentes/footer/Footer';
import ContextUsuarios from './contexto/ContextUsuarios';

function App() {
  return (
    <>
    <ContextUsuarios.Provider>
    <Navegador/>
    <Rutas/>
    <Footer/>
    </ContextUsuarios.Provider>
    </>
)
}

export default App
