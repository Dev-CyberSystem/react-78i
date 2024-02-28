import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./views/home/Home";
import ProductsContext from "./context/ProductsContext";

function App() {
  return (
    <>
      <ProductsContext>
        <h1>Estoy en App</h1>
        <Home />
      </ProductsContext>
    </>
  );
}

export default App;