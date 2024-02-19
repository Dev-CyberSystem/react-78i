import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from '../src/components/navBar/NavBar'
import Carousel from './components/carousel/Carousel'
import Footer from './components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Carousel />
      <Footer />
    </>
  )
}

export default App
