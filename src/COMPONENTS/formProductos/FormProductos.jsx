import React, { useState, useContext } from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { ProductosProvider } from '../../context/ProductsContext';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const FormProductos = ({ editProducto, handleClose }) => {
    const { addProductos, editarProducto} = useContext(ProductosProvider);
 //Estado inicial:
    const [producto, setProductos] = useState({
        id: editProducto ? editProducto.id : uuidv4(),
        nombre: editProducto ? editProducto.nombre : "",
        precio: editProducto ? editProducto.precio : 0,
    });

    const handleChange = (e) => {
        setProductos({
            ...producto,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(editProducto) {
            editarProducto(producto)
            handleClose();
        } else {
            addProductos(producto);
            setProductos({
                id: uuidv4(),
                nombre: "",
                precio: 0,
            });
        }
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
                {editProducto ? (
                    <Button type="submit" variant="success" >EDITAR</Button>
                ) : (
                    <Button type="submit">AGREGAR</Button>
                )}
            </Form>
        </>
    );
}

FormProductos.propTypes = {
    editProducto: PropTypes.object,
}

export default FormProductos;