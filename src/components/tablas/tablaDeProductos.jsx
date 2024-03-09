import { useContext, useState } from "react"
import { ProductosProvider } from "../../context/productosContext"
import { Button, Table, Modal } from "react-bootstrap"
import FormProductos from "../formularios/formProductos/formProductos"

const TablaDeProductos = () => {
    const { productos } = useContext(ProductosProvider)

    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)


    const [modificar, setModificar] = useState(null)

    const handleModificar = (producto) =>
    {
        setModificar(producto)
        handleShow()
        console.log(modificar, "esto es modificar")
    }

    return (
        <>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <FormProductos productoModificar={modificar}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

        <Table responsive hovered bordered striped>
            <thead>
                <th>#</th>
                <th>Hotel</th>
                <th>Lugar</th>
                <th>Precio</th>
                <th>Opciones</th>
            </thead>
            <tbody>
                {productos.map(item =>
                (
                    <>
                        <tr>
                            <td>
                                {item.id}</td>
                            <td>
                                {item.hotel}
                            </td>
                            <td>
                                {item.lugar}
                            </td>
                            <td>
                                {item.precio}
                            </td>
                            <td>
                                <div>
                                    <Button className="btn-warning" onClick={()=>{handleModificar(item)}}>
                                        modificar
                                    </Button>
                                    <Button className="btn-danger">
                                        eliminar
                                    </Button>
                                </div>
                            </td>
                        </tr>
                    </>
                ))}
            </tbody>
        </Table>
        </>
    )
}

export default TablaDeProductos