// import Products from "../../components/products/Products";
import { Container, Row, Col } from "react-bootstrap";
import Products from "../../components/products/Products";
import Usuarios from "../../components/usuarios/Usuarios";

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

      {/* <Products /> */}

      {/* <Admin funcionProps={funcionProps} /> */}

      <Usuarios />
    </>
  );
};

export default Home;
