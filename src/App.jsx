import 'bootstrap/dist/css/bootstrap.min.css';
import Rutas from "./components/rutas/Rutas";
import Navegador from './components/navegador/Navegador';
import Footer from './components/footer/Footer';
import ProductContext from './context/ProductContext';

function App() {

  return (
    <>
    <ProductContext>
      <Navegador/>
        <Rutas/>
      <Footer/>
    </ProductContext>

    </>
  )
}

export default App
