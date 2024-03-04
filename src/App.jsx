import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navegador from "./componentes/navegador/Navegador";
import Footer from "./componentes/footer/Footer";
import Card from "./componentes/cards/Card";
import Slider from "./componentes/carrousel/Slider";
import Rutas from "./componentes/rutas/Rutas";
import ProductsContext from "./context/ProductsContext";
import ContextUsuarios from "./context/ContextUsuarios";

function App() {
  return (
    <>
      <ContextUsuarios>
        <ProductsContext>
          <Navegador />
          <Rutas />
          <Slider />
          <Card />
          <Footer />
        </ProductsContext>
      </ContextUsuarios>
    </>
  );
}

export default App;
