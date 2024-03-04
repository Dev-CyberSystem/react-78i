import {Routes, Route} from 'react-router-dom'
import Home from '../home/Home'
import About from '../about/About'
import Usuario from '../usuario/Usuario'
import Admin from '../admin/Admin'


const Rutas = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/usuarios' element={<Usuario />} />
        <Route path='/Admin' element={<Admin />} />
        <Route path='*' element={<h1>NOT FOUND</h1>} />
    </Routes>

    </>
  )
}

export default Rutas
