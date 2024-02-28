import 'bootstrap/dist/css/bootstrap.min.css';
import Rutas from "./components/rutas/Rutas";
import Navegador from './components/navegador/Navegador';
import Footer from './components/footer/Footer';
import UsersContext from './context/UsersContext';

function App() {

  return (
    <>
    <UsersContext>
      <Navegador/>
        <Rutas/>
      <Footer/>
    </UsersContext>

    </>
  )
}

export default App
