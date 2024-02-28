import 'bootstrap/dist/css/bootstrap.min.css';
import Navegador from './component/navegador/Navegador';
import Rutas from './component/rutas/Rutas';
import Footer from './component/footer/Footer';
import InscContext from './context/InscContext';

const App = () => {
  return (
    <>
    <InscContext>

    <Navegador/>
    <Rutas/>
    <Footer/>
    
    </InscContext>
    </>
  )
}

export default App

