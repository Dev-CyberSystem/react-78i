import { Routes, Route } from 'react-router-dom'
import Home from '../../views/Home/Home'
import Error from '../../views/Error404/Error'

const Rutas = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/error' element={<Error/>}/>
    </Routes>
    </>
  )
}

export default Rutas