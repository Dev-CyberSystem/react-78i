import { useContext } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import  { ProductosProvider }  from "../../context/ProductsContext";

import PropTypes from "prop-types";

const Products = () => {
  
  const { productos } = useContext(ProductosProvider);
  
  console.log(productos, "Productos desde productos viniendo desde el context");

  return (
    <>
      <h1>Productos</h1>

      <Container>
        {productos.lenght === 0 ? (
          <h1>No hay productos</h1>
        ) : (
          <Row>
            {productos.map((product) => (
              <Col key={product.id} xs={12} md={4} sm={6} lg={3}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>{product.nombre}</Card.Title>
                    <Card.Text>Precio: {product.precio}</Card.Text>
                    <Button variant="success">Comprar</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </>
  );
};

Products.propTypes = {
  products: PropTypes.array,
};

export default Products;
