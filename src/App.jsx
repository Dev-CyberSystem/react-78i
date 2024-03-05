// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

 import'bootstrap/dist/css/bootstrap.min.css'
 
import Navigator from './components/navigator/Navigator'
import Footer from './components/footer/Footer'
import Rutas from './components/rutas/Rutas' 
 import Products from './views/products/Products'
import ProductsContext from './components/context/ProductsContext'
import UsersContext from './components/contextUser/UsersContext'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <UsersContext>
    <ProductsContext>
      <Navigator />
         <Rutas/>
       
      <Footer/>
    </ProductsContext>
    </UsersContext>
    </>
  )
}

export default App
