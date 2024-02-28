// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

 import'bootstrap/dist/css/bootstrap.min.css'
 
import Navigator from './components/navigator/Navigator'
import Footer from './components/footer/Footer'
import Rutas from './components/rutas/Rutas' 
import Products from './views/products/Products' 
 
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navigator />
         <Rutas/>
      <Products nombre = {'Mariano Agustin Ruiz ' } edad = {19} />
      <Footer/>
    </>
  )
}

export default App
