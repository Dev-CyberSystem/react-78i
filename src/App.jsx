import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../src/components/navBar/NavBar'
import Rutas from './views/rutas/Rutas';
import UserContext from './context/UserContext';

function App() {

  return (
    <>
      <UserContext>
        <NavBar />
        <Rutas />
      </UserContext>
    </>
  )
}

export default App
