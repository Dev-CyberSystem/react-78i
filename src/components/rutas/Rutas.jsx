import {Routes, Route} from 'react-router-dom'
import Home from '../../views/home/Home'
import About from '../../views/about/About'
import Contactos from '../../views/contactos/Contactos'
import Productos from '../../views/productos/Productos'

const Rutas = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<h1>Not Found</h1>} />
      <Route path="/contactos" element={<Contactos />} />
      <Route path="/productos" element={<Productos />} />
      
    </Routes>
    </>
  )
}

export default Rutas