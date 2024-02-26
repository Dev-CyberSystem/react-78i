import "bootstrap/dist/css/bootstrap.min.css";
import Navegador from "./components/navegador/Navegador";
import Rutas from "./components/rutas/Rutas";
import ProductsContext from "./context/ProductsContext";
import UsuariosContext from "./context/UsuariosContext";
function App() {
  return (
    <>
    <UsuariosContext>
      <ProductsContext>
        <Navegador />
        <Rutas />
      </ProductsContext>
    </UsuariosContext>
    </>
  );
}

export default App;
