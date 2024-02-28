/*import PropTypes from 'prop-types'
const Products = (props) => {
  return (
     <>
    <h1>Soy el producto</h1>
    <h2>Voy a llamar a un elemento: {props.nombre}, {props.numero} </h2>
    </>
    )
}

Products.propTypes = {
    nombre: PropTypes.string.isRequired,
    numero: PropTypes.number.isRequired,
} 

export default Products
*/
import {Card, Button} from "react-bootstrap"
/* import PropTypes from 'prop-types'*/

const Products = ({ nombre, numero }) => {
  return (
    <>
      <h1>PRODUCTOSSS</h1>
      <h2>Voy a llamar a un elemento: {nombre}, {numero} </h2>
      
      <h3>Voy a hacer una lista de productos aquí</h3>

{Products.map((product) => (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
))}


    </>
  );
}

/*
Products.propTypes = {
  nombre: PropTypes.string.isRequired,
  numero: PropTypes.number.isRequired, 
}*/

export default Products;