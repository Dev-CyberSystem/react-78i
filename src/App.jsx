import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Rutas from "./components/rutas/Rutas";
import Navigation from "./components/navigation/Navigation";
import ContextProduct from "./context/ContextProduct";

function App() {
  return (
    <>
      <ContextProduct>
        <Navigation />
        <Rutas />
      </ContextProduct>
    </>
  );
}

export default App;
