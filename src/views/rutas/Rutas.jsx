import {Routes, Route} from 'react-router-dom'
import Home from '../home/Home'
import About from '../about/About'


const Rutas = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<h1>NOT FOUND</h1>} />
    </Routes>

    </>
  )
}

export default Rutas
