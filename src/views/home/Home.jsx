// import Products from "../../components/products/Products";
import { useEffect, useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import axios from "axios";

// import Admin from "../admin/Admin";

const Home = () => {
  // Props:  Son Argumentos que se comparten entre componentes, se pasan mediante atributos.
  // const club = {
  //   nombre: "River Plate",
  //   estadio: "Monumental",
  //   direccion: "Av. Figueroa Alcorta 7597",
  // };

  //Hooks: Son funciones que nos permiten agregar estado y otras características de React a los componentes funcionales.
  // useState es un hook que nos permite agregar estado a un componente funcional.
  // Sintaxis
  // const [state, setState] = useState(initialState);

  // const [count, setCount] = useState(0);
  // const [count2, setCount2] = useState(0)
  const [users, setUsers] = useState([])

  // const funcionProps = () => {
  //   setCount(count + 1);
  // };

  // useEffect es un hook que nos permite agregar efectos a un componente funcional.
  //Sintaxis 
  // useEffect(() => {

    // Efecto o la logica que queremos ejecutar

//  }, [dependencias])

  // useEffect(() => {
  //   console.log("Estoy en el useEffect de Home")
  // }, [])


  // useEffect(() => {
  //  console.log("Montaje de componente")
  //   return () => {
  //     console.log("se desmonto el componente")
  //   }
  // }, [count])
  
  
  useEffect(() => {
    const obtenerDatos = async () => {
      try{
        const response = await axios.get("http://localhost:8000/usuarios");
        setUsers(response.data)
      } catch(error){
        console.log(error)
      }
    }
    obtenerDatos()
     
  }, [])

console.log(users, "users")

  // useContext es un hook que nos permite acceder al contexto de un componente funcional.
  // useReducer es un hook que nos permite manejar estados complejos.
  // useMemo es un hook que nos permite memorizar valores.
  // useCallback es un hook que nos permite memorizar funciones.

  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1>Home</h1>
            {/* <h3>Contador: {count} </h3>

            <Button onClick={funcionProps}> Aumento </Button>

            <Button onClick={() => setCount(count - 1)}> Decremento </Button>
            <hr />

            <h3>segundo Count: {count2}</h3>


            <Button variant="danger" onClick={() => setCount2(count2 + 1 )}> Aumento count 2 </Button> */}
          </Col>
        </Row>
      </Container>

      {/* <Products nombre="Diego" numero={55} club={club} funcionProps={funcionProps} /> */}

      {/* <Admin funcionProps={funcionProps} /> */}
    </>
  );
};

export default Home;
