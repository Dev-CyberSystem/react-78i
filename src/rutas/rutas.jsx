import { Route, Routes } from 'react-router-dom'
import Home from '../views/home/home'
import Admin from '../views/admin/admin'
import AdminUsuarios from '../views/admin/adminUsuarios/adminUsuarios'
import AdminProductos from '../views/admin/adminProductos/adminProductos'

const Rutas = () => {
    return(
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/adminUsuarios' element={<AdminUsuarios/>}/>
        <Route path='/adminProductos' element={<AdminProductos/>}/>
    </Routes>

    )
}

export default Rutas