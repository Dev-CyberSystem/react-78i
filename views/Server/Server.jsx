import './Server.css'
import axios from 'axios'
import { useEffect } from 'react'

const Server = () => {

  const getCanciones = async() => {
    try {
      const response = await axios.get("http://localhost:8000/canciones")
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const postCancion = async() => {
    try {
      const cancion = {
        name: "Carry You",
        album: "Single",
        year: "2024"
      }
      const response = await axios.post("http://localhost:8000/canciones", cancion)
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className='contenedor-server'>
      <h4 className='titulo'>PRUEBA DE SERVIDOR</h4>
      <div className='botones'>
        <button className='boton' onClick={getCanciones}>GET</button>
        <button className='boton' onClick={postCancion}>POST</button>
      </div>
    </div>
  )
}

export default Server