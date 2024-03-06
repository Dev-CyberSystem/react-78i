import { Routes, Route } from 'react-router-dom'
import Home from '../../views/home/Home'
import Error from '../../views/error/Error'
import Registro from '../../views/registro/Registro'
import Caracteristicas from '../../views/caracteristica/Caracteristicas'
import Admin from '../../views/admin/Admin'


const Rutas = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Error' element={<Error />} />
                <Route path='/Caracteristicas' element={<Caracteristicas />} />
                <Route path='/Admin' element={<Admin/>} />
                <Route path='/Registro' element={<Registro/>} />
                

            </Routes>
        </>
    )
}

export default Rutas