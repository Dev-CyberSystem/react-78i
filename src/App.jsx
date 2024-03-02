import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navegador from './componentes/navegador/Navegador';
import Rutas from './componentes/rutas/Rutas';
import Footer from './componentes/footer/Footer';
import { UsuariosContext } from './contexto/ContextUsuarios';

function App() {
  return (
    <>
    <UsuariosContext.Provider>
    <Navegador/>
    <Rutas/>
    <Footer/>
    </UsuariosContext.Provider>
    </>
)
}

export default App
