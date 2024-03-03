import 'bootstrap/dist/css/bootstrap.min.css';
import Navegador from './components/Navbar/Navegador.jsx';
import Home from '../src/views/Home/Home.jsx';
import About from '../src/views/About/About.jsx';
import Rutas from './components/Rutas/Rutas.jsx';
import ProductsProvider from './context/ProductsContext.jsx';

function App() {
  return (
    <>
    <ProductsProvider>
    <div className="d-flex flex-column align-items-center justify-content-between"> 
    <Navegador/>
    <Rutas/>
    </div>
    </ProductsProvider>
    </>
  )
}

export default App