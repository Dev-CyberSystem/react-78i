import { Routes, Route } from 'react-router-dom'
import Home from '../../views/Home/Home'
import Error from '../../views/Error404/Error'
import Contador from '../../views/Contador/Contador'


const Rutas = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/error' element={<Error/>}/>
        <Route path='/contador' element={<Contador/>}/>
    </Routes>
    </>
  )
}

export default Rutas