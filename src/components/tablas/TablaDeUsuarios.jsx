import { useContext } from "react"
import { UsuariosProvider } from "../../context/usuariosContext"
import { Table } from "react-bootstrap"


const TablaDeUsuarios = () =>
{
    //traigo los datos de mi api mediante el estado global (contexto)
    const {usuarios} = useContext(UsuariosProvider)

  
    return (
        <Table bordered>
            <thead>
                <th>
                    ID
                </th>
                <th>
                    Usuario
                </th>
                <th>
                    Email
                </th>
            </thead>
            <tbody>
                {usuarios.map(item =>
                (
                    <>
                    <tr>
                        <td>
                            {item.id}
                        </td>
                        <td>
                            {item.nombre}
                        </td>
                        <td>
                            {item.email}
                        </td>
                    </tr>
                    </>
                )
                    )}
            </tbody>
        </Table>
    )
}

export default TablaDeUsuarios