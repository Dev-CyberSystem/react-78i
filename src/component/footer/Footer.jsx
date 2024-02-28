import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useNavigate} from 'react-router-dom';
import './footer.css'

const Footer = () => {
  const navigate = useNavigate ()
  return (
    <>
     <div class ="text-uppercase fluid footer-text text-center m-2 "><h4>VACANTES 2024 DISPONIBLES</h4>
    </div>
     <div class = "row d-flex justify-content-between col-12 m-1 p-1 fluid">
    <Card style={{width: '20rem', height: '12rem'}} id= "cardFooter">
      <Card.Img id="img-card-footer" src="./src/img/logoEscuela.png" />
      
    </Card>  

    <Card style={{width: '20rem', height: '12rem' }} id= "cardFooter2">
     
      <Card.Body>
        <Card.Title>
          <h5>NUESTRAS REDES SOCIALES</h5></Card.Title>
        
        <Card.Text class = "container-icon-footer row d-flex justify-content-between m-1 p-0 fluid">
        <img src="../public/square-facebook.svg" class="icon-footer" alt="" />
        <img src="../public/square-instagram.svg" class="icon-footer" alt="" />
        <img src="../public/square-x-twitter.svg" class="icon-footer" alt="" />
        <img src="../public/square-whatsapp.svg" class="icon-footer" alt="" />
        </Card.Text>

        <Card.Text class = " container-icon-footer row d-flex justify-content-between m-1 p-0 fluid">
        <img src="../public/facebook-messenger.svg" class="icon-footer" alt="" />
        <img src="../public/google.svg" class="icon-footer" alt="" />
        <img src="../public/telegram.svg" class="icon-footer" alt="" />
        <img src="../public/youtube.svg" class="icon-footer" alt="" />
        </Card.Text>
        
      </Card.Body>
    </Card>  

    <Card style={{width: '20rem', height: '12rem'}} id= "cardFooter3">
     
      <Card.Body>
        <Button  id= "btn-footer" variant="primary" onClick = {() =>navigate ("/directivos")}>Directivos</Button>
        <Button id= "btn-footer" variant="primary" onClick = {() =>navigate ("/docentes")}>Docentes</Button>
        <Button id= "btn-footer" variant="primary" onClick = {() =>navigate ("/alumnos")}>Alumnos</Button>
        <Button id= "btn-footer" variant="primary" onClick = {() =>navigate ("/contacto")}>Contacto</Button>
      </Card.Body>
    </Card>
    <div class="text-uppercase fluid footer-text text-center m-2 ">Copyright © 2024 Lorena Oterino. Todos los derechos reservados.
    </div>

    </div>
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default Footer
