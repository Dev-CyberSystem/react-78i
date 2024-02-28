import Rutas from "./components/rutas/Rutas"
import UsersContext from "./context/UsersContext"



function App() {
  return (
    <>
      <UsersContext>
        <Rutas />
      </UsersContext>
    </>
  )
}

export default App