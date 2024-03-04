import {Routes, Route} from 'react-router-dom'
import Contacto from '../../views/home/contacto/Contacto'
import Home from '../../views/home/contacto/Contacto'
import Admin from '../../views/admin/Admin'

const Rutas = () => {
  return (
    <>
    
    <Routes>
        <Route path='/' element={<Home />} /><Route/>
        <Route path='/admin' element={<Admin />} /><Route/>
        <Route path='/contacto' element={<Contacto/>} /><Route/>
    </Routes>
    
    
    
    </>
  )
}

export default Rutas