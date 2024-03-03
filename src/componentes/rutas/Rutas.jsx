import {Routes, Route} from 'react-router-dom'
import About from '../../views/home/about/About'
import Contacto from '../../views/home/contacto/Contacto'
import Home from '../../views/home/contacto/Contacto'

const Rutas = () => {
  return (
    <>
    
    <Routes>
        <Route path='/' element={<Home />} /><Route/>
        <Route path='/about' element={<About />} /><Route/>
        <Route path='/contacto' element={<Contacto/>} /><Route/>



    </Routes>
    
    
    
    </>
  )
}

export default Rutas