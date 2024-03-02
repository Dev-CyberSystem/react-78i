import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Rutas from "./components/rutas/Rutas";
import Navigation from "./components/navigation/Navigation";
import ContextProduct from "./context/ContextProduct";
import ProviderUser from "./context/ContexUsers";

function App() {
  return (
    <>
      <ProviderUser>
        <ContextProduct>
          <Navigation />
          <Rutas />
        </ContextProduct>
      </ProviderUser>
    </>
  );
}

export default App;
