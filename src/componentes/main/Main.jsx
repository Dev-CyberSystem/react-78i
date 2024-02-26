import "./Main.css";
import logo from "../../imagenes/cuarto-martingarrix.jpg";
import fotoReseña from '../../imagenes/fotoReseña.webp'
import { useEffect } from "react";
import { useState } from 'react'
import axios from 'axios'

const Main = () => {

  const [canciones, setCanciones] = useState([])

  useEffect(() => {
    const obtenerDatos = async() => {
      try {
        const response = await axios.get("http://localhost:8000/canciones");
        setCanciones(response.data)
      } catch (error) {
        console.error(error);
      }
    }
    obtenerDatos()
  }, [])
  
  console.log(canciones);

  return (
    <main>
      <div className="contenedor-foto">
        <img
          src={logo}
          alt="foto de martin garrix en su cuarto"
          className="foto"
        />
      </div>
      <div className="contenedor-texto-main">
        <p className="texto-main">
          I'm Martin Garrix, born on May 14th 1996 in Amstelveen. Since my debut
          with "Animals" in 2013, I have made my mark in electronic music.
          Recognized for my energy on stage and outstanding collaborations,
          reaching the title of #1 DJ according to DJ Mag Top 100. My passion
          for innovation and connecting with the audience defines my path in the
          music scene.
        </p>
      </div>
      <div className="contenedor-reseña">
        <div className="reseña">
          <h2>Most insane India tour to date</h2>
          <p className="texto-reseña">We did this crazy tour in India where Ranbir Kapoor and Allu Arjun joined me on stage. All of the 9 shows were amazing and the energy was insane!</p>
        </div>
        <div className="foto-reseña">
          <img src={fotoReseña} alt="foto reseña" className="fotoReseña"/>
        </div>
      </div>
    </main>
  );
};

export default Main;
