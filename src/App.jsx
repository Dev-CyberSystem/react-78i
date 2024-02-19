import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import NavBar from '../src/components/navBar/NavBar'
import Rutas from './views/rutas/Rutas';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Rutas />
    </>
  )
}

export default App
