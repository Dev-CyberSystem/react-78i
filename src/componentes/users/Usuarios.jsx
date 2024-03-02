import {Card, Button, Row, Col} from 'react-bootstrap';
import { useContext } from 'react';
import { UsuariosContext } from '../../contexto/ContextUsuarios';

//importo el create context que me permite disponibilizar los datos de la api. (en cada parte de la pagina debo importar el create).
const Usuarios = () => { // usuarios es el atributo establecido en el home (padre).
  const {usuarios} = useContext(UsuariosContext)

    //console.log(usuarios, "anda")

   // Map, sirve para recorrer el array y mostrar lo que contiene el mismo. 
  return (
    <>
      <h2>Usuarios</h2>
        <Row>
        {usuarios.map((usuarios) => (
          <Col key={usuarios.id}>
           <Card style={{ width: '18rem' }}>
           <Card.Img variant="top" src="holder.js/100px180" />
           <Card.Body>
             <Card.Title>{usuarios.nombre}</Card.Title>
             <Card.Text>{usuarios.email}</Card.Text>
             <Button variant="primary">ver más</Button>
           </Card.Body> 
           </Card>
        </Col> 
      ))}
    </Row>
   </>
);
}

export default Usuarios
