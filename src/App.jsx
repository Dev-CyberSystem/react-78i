import Rutas from "./components/rutas/Rutas"
import UsersContext from "./context/UsersContext"
import CursosContext from "./context/CursosContext"
import NavbarV2 from "./components/navBar/NavbarV2"



function App() {
  return (
    <>
      <UsersContext>
        <CursosContext>
        <NavbarV2 />
        <Rutas />
        </CursosContext>
      </UsersContext>
    </>
  )
}

export default App