import 'bootstrap/dist/css/bootstrap.min.css';
import Rutas from "./components/rutas/Rutas";
import Navegador from './components/navegador/Navegador';
import Footer from './components/footer/Footer';
import ProductContext from './context/ProductContext';
import UsersContext from './context/UsersContext';

function App() {

  return (
    <>
    <UsersContext>
      <ProductContext>
        <Navegador/>
          <Rutas/>
        <Footer/>
      </ProductContext>
    </UsersContext>

    </>
  )
}

export default App
