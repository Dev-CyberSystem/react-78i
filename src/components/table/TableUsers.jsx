import React from 'react'
import { useContext } from "react";
import { Button, Table } from "react-bootstrap";
import {UsuariosContext} from "../../context/UsersContext"

const TableUsers = () => {

    const {users} = useContext(UsuariosContext)

    console.log(users, "users desde la tabla")

  return (
    <>
      <h2>Tabla de usuarios</h2>

      {users.length === 0 ? (
        <h2>No Tenemos users para mostrarte</h2>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <>
                <tr>
                  <td>{user.id}</td>
                  <td>{user.nombre}</td>
                  <td>{user.email}</td>
                  <td>
                    <Button variant="primary">Editar</Button>
                    <Button variant="danger">Eliminar</Button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </Table>
      )}
    </>
  )
}

export default TableUsers