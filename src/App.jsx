import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navegador from './componentes/navegador/Navegador';
import Rutas from './componentes/rutas/Rutas';
import Footer from './componentes/footer/Footer';

function App() {
  return (
    <>
    <UsuariosContext.provider>
    <Navegador/>
    <Rutas/>
    <Footer/>
    </UsuariosContext.provider>
    </>
)
}

export default App
