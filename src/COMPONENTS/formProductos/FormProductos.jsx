import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

const FormProductos = () => {
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(nombre);
        console.log(precio);
        console.log("FUNCIONA");
    };

    return (
        <>
        <h1>FORMULARIO DE PRODUCTOS GG</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>NOMBRE</Form.Label>
                    <Form.Control
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        placeholder="Nombre del producto"
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>PRECIOOO</Form.Label>
                    <Form.Control
                        type="number"
                        value={precio}
                        onChange={(e) => setPrecio(e.target.value)}
                        placeholder="PRECIOOOOO"
                    />
                </Form.Group>
                <Button type="submit">AGREGAR</Button>
            </Form>
        </>
    );
}

export default FormProductos;