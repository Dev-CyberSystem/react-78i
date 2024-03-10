import { useContext,useState } from "react";
import { UsuariosProv } from  "../../context/UsuariosContext"
import { Button, Table, Modal } from "react-bootstrap";
import Registro from "../registro/Registro"




const TablaUsuarios = () => {
  const { usuarios, eliminarUsuario } = useContext(UsuariosProv);

  const [editUsuario, setEditUsuario] = useState(null)
  const handleClose = () => setShow(false);
  const [show, setShow] = useState(false);
  console.log(usuarios, "mostrar usuarios");
  
  const handleEdit = (user) =>{
    setEditUsuario(user)
    setShow(true) 
  }
    

  
  return (
    <>
      <h2>Usuarios Registrados</h2>

      {usuarios.length === 0 ? (
        <h2>En este momento no hay usuarios registrados en la página.</h2>
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
            {usuarios.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.nombre}</td>
                  <td>{user.email}</td>
                  <td>{user.isAdmin ?  'Admin' : 'User'}</td>
                  <td>
                    <Button variant="primary" onClick={() => handleEdit (user)}>Editar</Button>
                    <Button variant="danger" onClick={()=> eliminarUsuario(user.id) }>Eliminar</Button>
                  </td>
                </tr>
            ))}
          </tbody>
        </Table>
      )}
<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Registro editUsuario={editUsuario} handleClose={handleClose}/>
        </Modal.Body>
        
      </Modal>
    </>
  )
}

export default TablaUsuarios
