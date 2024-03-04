// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

 import'bootstrap/dist/css/bootstrap.min.css'
 
import Navigator from './components/navigator/Navigator'
import Footer from './components/footer/Footer'
import Rutas from './components/rutas/Rutas' 
 import Products from './views/products/Products'
import ProductsContext from './components/context/ProductsContext'
 
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <ProductsContext>
      <Navigator />
         <Rutas/>
       
      <Footer/>
    </ProductsContext>
    </>
  )
}

export default App
