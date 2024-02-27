import Slider from '../../componentes/carrusel/Slider';
import GrupoTarjetas from '../../componentes/tarjetas/GrupoTarjetas';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Home = () => {
  const [usuario, setUsuario] = useState ([]) //con el useState se guardan los datos traidos con el axios.

  //Función asincronica lo indica el async.
  useEffect (() => {
    const datosApi = async () => {
      try { 
        const response = await axios.get ("http://localhost:8000/usuarios") // con el axios get se traen los datos creados en la fakeApi (se levanto un servidor para la api con el json-server).
        setUsuario (response.data) // se guardan los datos del http.
      }
      catch (error) {
        console.log("error")
      }
    }
    datosApi()// se ejecuta la función.
  },[]) //dependencias siempre agregar. 
  //try catch es un manejador de error, si no se ejecuta lo que esta en el try salta lo del catch.
  console.log(usuario, "usuario ejecutado")

  return (
    <>
      <h2>Home</h2>
      {/* <Slider/> */}
      {/* <h2>PRODUCTOS DESTACADOS</h2> */}
      {/* <GrupoTarjetas/> */}
    </>
)
}

export default Home
