import { useState, useEffect } from "react";
import axios from "axios";
import FormProducts from "../../components/formProducts/FormProducts";
import { Container, Row, Col } from "react-bootstrap";
import TablaProductos from "../../components/tablaProducto/TablaProductos";

const Admin = () => {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    const obtener = async () => {
      try {
        const response = await axios.get("http://localhost:8000/productos");
        setPersonajes(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    obtener();
  }, []);

  console.log(personajes);

  return (
    <>
      <Container>
        <Row>
          <Col>
            <FormProducts />
          </Col>
          <Col>
          <TablaProductos/>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Admin;
