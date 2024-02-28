import { Routes, Route } from 'react-router-dom'
import Home from '../../views/home/Home'
import Error from '../../views/error/Error'
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

            </Routes>
        </>
    )
}

export default Rutas