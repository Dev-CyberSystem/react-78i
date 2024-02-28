import Slider from '../../componentes/carrusel/Slider';
import GrupoTarjetas from '../../componentes/tarjetas/GrupoTarjetas';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Usuarios from '../../componentes/users/Usuarios';

const Home = () => {
  const [usuarios, setUsuario] = useState ([]) //con el useState se guardan los datos traidos con el axios.

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
  console.log(usuarios, "usuario ejecutado")
  //linea 29 estoy pasando el estado (creo mas arriba) en donde se guarda la fakiApi.
  return (
    <>
      <h2>Home</h2>
      <Usuarios usuarios={usuarios}/> 
      {/* <Slider/> */}
      {/* <h2>PRODUCTOS DESTACADOS</h2> */}
      {/* <GrupoTarjetas/> */}
    </>
    //los datos del home (padre) son pasados al hijo (User) por props.
  )
}

export default Home
