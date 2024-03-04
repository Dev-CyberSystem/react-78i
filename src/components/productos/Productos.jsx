// import { useContext } from "react";
// import {ProductContext} from "../../context/ContextProduct";
// import { Card, Button, Container, Row, Col } from "react-bootstrap";

// const Productos = () => {
//   const {productos} = useContext(ProductContext);
//   console.log(productos,"desde productosjsx")
//   return (
//     <Container>
//         <Row>
//           {productos.map((productos) => (
//             <Col key={productos.id} md={4} sm={6} lg={3}>
//               <Card style={{ width: "18rem" }}>
//                 <Card.Img variant="top" src="holder.js/100px180" />
//                 <Card.Body>
//                   <Card.Title>{productos.nombre}</Card.Title>
//                   <Card.Text>
//                     {productos.precio}
//                   </Card.Text>
//                   <Button variant="primary">Go somewhere</Button>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
      
//     </Container>
//   );
// };

// export default Productos;
