import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Rutas from "./components/rutas/Rutas";
import Navigation from "./components/navigation/Navigation";
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Navigation />
      <Rutas />
      <Footer/>
    </>
  );
}

export default App;
