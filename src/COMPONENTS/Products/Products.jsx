import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { useContext } from 'react';
import {ProductosProvider} from '../../context/ProductsContext.jsx';
import { propTypes } from 'react-bootstrap/esm/Image.js';

const Products = ({ nombre, edad, club, funcionProps/*,productos*/}) => {
    /*console.log("Productos desde PRODUCTOS:", products);*/

const {productos} = useContext(ProductosProvider);
console.log('Productos desde el PRODUCTS.JSX ', productos);

    // console.log(nombre);
    // console.log(edad);
    // console.log(club.nombre);

    // console.log(props); // Esto está bien afuera del return
    // console.log(props.club);

    // const {nombre, estadio, direccion} = props.club
    // console.log(nombre, estadio, direccion, " todo esto está destructurado")

    return (
        <>
         <Container>
                {productos.length === 0 ? ( 
                    <h1>NO HAY PRODUCTOS</h1> )
                    : (
                    <Row>
                        {productos.map((product) => (
                            <Col key={product.id}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="holder.js/100px180" />
                                    <Card.Body>
                                        <Card.Title>{product.nombre}</Card.Title>
                                        <Card.Text>
                                            {product.precio}
                                        </Card.Text>
                                        <Button variant="primary">ESTE ES EL ID: {product.id}</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                    )
               }
            </Container>
    
            <h2>ESTE ES EL COMPONENTE PRODUCTS QUE RECIBE UNA PROP: {nombre} </h2>
            <h3>Esta es la edad: {edad}</h3>
            <button onClick={funcionProps}>EJECUTA LA FUNCIÓN DESDE PRODUCTS</button>
        </>
    );
}

/* Products.propTypes = {
    products: PropTypes.array,
    nombre: PropTypes.string.isRequired,
    edad: PropTypes.number.isRequired,
    club: PropTypes.shape({
        nombre: PropTypes.string,
        estadio: PropTypes.string,
        direccion: PropTypes.string
    }),
    funcionProps: PropTypes.func
} */

export default Products;