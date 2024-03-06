import React, { useState, useContext } from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { ProductosProvider } from '../../context/ProductsContext';
import { v4 as uuidv4 } from 'uuid';


//explicacion en el minuto 40 de la clase 28 de febrero//
const FormProductos = () => {
    const { addProductos } = useContext(ProductosProvider);

    const [producto, setProductos] = useState({
        id: uuidv4(),
        nombre: "",
        precio: 0,
    });

    console.log(producto, "ESTO ES DESDE EL FORMS, ESTADO INCIIAL");

    const handleChange = (e) => {
        setProductos({
            ...producto,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addProductos(producto);
        setProductos(
            {
                id: uuidv4(),
                nombre: "",
                precio: 0,  
            }
        )
    };

    return (
        <>
            <h1>FORMULARIO DE PRODUCTOS GG</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>NOMBRE</Form.Label>
                    <Form.Control
                        type="text"
                        value={producto.nombre}
                        onChange={handleChange}
                        name='nombre'
                        placeholder="Nombre del producto"
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>PRECIOOO</Form.Label>
                    <Form.Control
                        type="number"
                        value={producto.precio}
                        onChange={handleChange}
                        name='precio'
                        placeholder="PRECIOOOOO"
                    />
                </Form.Group>
                <Button type="submit">AGREGAR</Button>
            </Form>
        </>
    );
}

export default FormProductos;