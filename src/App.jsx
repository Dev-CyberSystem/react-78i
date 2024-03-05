import Rutas from "./components/rutas/Rutas"
import UsersContext from "./context/UsersContext"
import NavbarV2 from "./components/navBar/NavbarV2"



function App() {
  return (
    <>
      <UsersContext>
        <NavbarV2 />
        <Rutas />
      </UsersContext>
    </>
  )
}

export default App