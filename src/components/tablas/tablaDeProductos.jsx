import { useContext } from "react"
import { ProductosProvider } from "../../context/productosContext"
import { Table } from "react-bootstrap"


const TablaDeProductos = () => {
    const { productos } = useContext(ProductosProvider)

    return (
        <Table responsive hovered bordered striped>
            <thead>
                <th>#</th>
                <th>Hotel</th>
                <th>Lugar</th>
                <th>Precio</th>
            </thead>
            <tbody>
                {productos.map(item => 
                (
                    <>
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.hotel}</td>
                            <td>{item.lugar}</td>
                            <td>{item.precio}</td>
                        </tr>
                    </>
                ))}
            </tbody>
        </Table>
    )
}

export default TablaDeProductos