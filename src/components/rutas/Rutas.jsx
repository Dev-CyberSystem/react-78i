import {Routes, Route} from 'react-router-dom'
import Home from '../../views/home/Home'
import About from '../../views/about/About'
import Admin from '../../views/admin/Admin'



const Rutas = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
    </>
  )
}

export default Rutas