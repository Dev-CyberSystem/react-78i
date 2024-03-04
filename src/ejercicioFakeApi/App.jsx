import "bootstrap/dist/css/bootstrap.min.css";
import Navegador from "./components/navegador/Navegador";
import Rutas from "./components/rutas/Rutas";
import ProductsContext from "./context/ProductsContext";
function App() {
  return (
    <>
      <ProductsContext>
        <Navegador />
        <Rutas />
      </ProductsContext>
    </>
  );
}

export default App;
