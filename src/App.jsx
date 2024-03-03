import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navegador from './componentes/navegador/Navegador';
import Rutas from './componentes/rutas/Rutas';
import Footer from './componentes/footer/Footer';
import ContextUsuarios from './contexto/ContextUsuarios';
//se importa el componente en donde se creo el create context. y dentro de el envolvemos los demas.

function App() {
  return (
    <>
    <ContextUsuarios> 
    <Navegador/>
    <Rutas/>
    <Footer/>
    </ContextUsuarios>
    </>
)
}

export default App
