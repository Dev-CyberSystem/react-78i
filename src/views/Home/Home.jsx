import React, { useState, useEffect } from 'react';
import Body from "../../COMPONENTS/BODY/Body.jsx";
import Footer from "../../COMPONENTS/FOOTER/Footer.jsx";
import Products from "../../COMPONENTS/Products/Products.jsx";
import axios from "axios";

const Home = () => {

  const [users, setUsers] = useState([]);
  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const response = await axios.get("src/COMPONENTS/FakeApi/db.json");
        setUsers(response.data);
        console.log('Usuarios:', response.data);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };
    obtenerDatos();
  }, []);

  return (
    <div className="container d-flex flex-column align-items-center justify-content-between">
      <Body/>
      <Products nombre="ENZO" numero={912} />
      <Footer/>
    </div>
  );
}

export default Home;

