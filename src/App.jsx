import "bootstrap/dist/css/bootstrap.min.css";
import Navegador from "./components/navegador/Navegador";
import Rutas from "./components/rutas/Rutas";
import ProductsContext from "./context/ProductsContext";
import UsersContext from "./context/UsersContext";
function App() {
  return (
    <>
      <UsersContext>
        <ProductsContext>
          <Navegador />
          <Rutas />
        </ProductsContext>
      </UsersContext>

    </>
  );
}

export default App;
