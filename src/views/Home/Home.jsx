import { Card, Button } from 'react-bootstrap';
import Footer from "../../components/Footer/Footer.jsx";
import Products from '../../components/Products/Products.jsx';
import Admin from '../Admin/Admin.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {

   const club  = { //esto es de la primera clase//
    nombre: 'Riveeeer',
    estadio: 'Más Monumental',
    direccion: 'En Baires'
   };

   const [count, setCount] = useState(0);
   const [productos, setProductos] = useState([]);

const funcionProps = () => {
      setCount(count + 1);
   };

useEffect (() => {
    console.log('Soy el USEFFECT');
   },[count])

useEffect (() => {
    console.log('MONTAJE')
    return () => {
      console.log('DESMONTAJE');
    }
   }, [count])

useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const response = await axios.get("http://localhost:3000/productos");
        setProductos(response.data);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };
    obtenerDatos();
  }, []);

  console.log(productos, 'somos los users');

   return (
     <>
       <h1>ESTE ES EL CONTADOR: {count}</h1>
       <Button onClick={funcionProps}>AUMENTO</Button>
       <Button onClick={() => setCount(count - 1)}>DECREMENTO</Button>
       <Admin funcionProps={funcionProps} />
       <Products nombre="Enzo" edad={25}  club={club} productos={productos} />
       <Footer />
     </>
  );
}

export default Home;