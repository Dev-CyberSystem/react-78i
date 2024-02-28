import { Route, Routes } from 'react-router-dom'
import Home from '../views/home/home'
import Admin from '../views/admin/admin'

const Rutas = () => {
    return(
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/admin' element={<Admin/>}/>
    </Routes>

    )
}

export default Rutas