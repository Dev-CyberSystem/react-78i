import {Card, Button} from 'react-bootstrap';

const Users = ({users}) => { // users es el atributo establecido en el home (padre).
   // Map, sirve para recorrer el array y mostrar lo que contiene el mismo. 
  return (
    <>
      <h2>Usuarios</h2>


      {users.map((users) => (
        <>
           <Card style={{ width: '18rem' }}>
           <Card.Img variant="top" src="holder.js/100px180" />
           <Card.Body>
             <Card.Title>{users.nombre}</Card.Title>
             <Card.Text>{users.email}</Card.Text>
             <Button variant="primary">ver más</Button>
           </Card.Body> 
           </Card>
        </>
      ))}
   </>
);
}

export default Users
