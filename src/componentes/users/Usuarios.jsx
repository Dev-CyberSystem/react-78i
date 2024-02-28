import {Card, Button} from 'react-bootstrap';

const Usuarios = ({usuarios}) => { // usuarios es el atributo establecido en el home (padre).

    console.log(usuarios, "anda")

   // Map, sirve para recorrer el array y mostrar lo que contiene el mismo. 
  return (
    <>
      <h2>Usuarios</h2>
      {usuarios.map((usuarios) => (
        <>
           <Card style={{ width: '18rem' }}>
           <Card.Img variant="top" src="holder.js/100px180" />
           <Card.Body>
             <Card.Title>{usuarios.nombre}</Card.Title>
             <Card.Text>{usuarios.email}</Card.Text>
             <Button variant="primary">ver más</Button>
           </Card.Body> 
           </Card>
        </>
      ))}
   </>
);
}

export default Usuarios
