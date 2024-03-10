import {Routes, Route} from 'react-router-dom'
import Home from '../../views/home/Home'
import About from '../../views/about/About'
import Admin from '../../views/admin/Admin'
import Registro from '../registro/Registro'
import RutaProtegida from './RutaProtegida'



const Rutas = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<RutaProtegida>
            <Admin />
        </RutaProtegida>} />
        <Route path="/registro" element={<Registro />} />
        <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
    </>
  )
}

export default Rutas