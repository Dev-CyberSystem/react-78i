import { Routes, Route } from 'react-router-dom'
import Home from '../Views/Home/Home'
import Error from '../Views/Error/Error'
import { Caracteristicas } from '../Views/Caracteristicas/Caracteristicas'


const Rutas = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Error' element={<Error />} />
                <Route path='/Caracteristicas' element={<Caracteristicas />} />
            </Routes>
        </>
    )
}

export default Rutas