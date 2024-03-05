import { Route, Routes } from 'react-router-dom'
import Home from '../views/home/home'
import Admin from '../views/admin/admin'
import AdminUsuarios from '../views/admin/adminUsuarios/adminUsuarios'
import AdminProductos from '../views/admin/adminProductos/adminProductos'
import RegistroView from '../views/registro/registro'
import Error404 from '../views/error404/error404'

const Rutas = () => {
    return(
    <Routes>
        <Route path= '*' element={<Error404/>}/>
        <Route path='/' element={<Home />}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/adminUsuarios' element={<AdminUsuarios/>}/>
        <Route path='/adminProductos' element={<AdminProductos/>}/>
        <Route path='/registro' element={<RegistroView/>}/>
    </Routes>

    )
}

export default Rutas