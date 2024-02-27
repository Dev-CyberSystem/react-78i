import {Routes, Route} from 'react-router-dom'
import Home from '../../views/home/Home'
import About from '../../views/about/About'
import Contactos from '../../views/contactos/Contactos'
import { Usuarios } from '../../views/usuarios/Usuarios'

const Rutas = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<h1>Not Found</h1>} />
      <Route path="/contactos" element={<Contactos />} />
      <Route path="/usuarios" element={<Usuarios />} />
      
    </Routes>
    </>
  )
}

export default Rutas