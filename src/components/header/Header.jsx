import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Ico_Plant from '../../assets/icons/ico_plant';
import Ico_search from '../../assets/icons/ico_search';
import Ico_user from '../../assets/icons/ico_user';

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary rounded-3 bg-opacity-25 header-container">
      <Container>
        <Ico_Plant width={30} height={30} fill="#4ead00"/>
        <Navbar.Brand href="#home" className='fs-2 text-white'>Plant Me</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-md-auto me-auto w-50">
            <Nav.Link className='text-white fw-bold' href="#ourservices">Our Services</Nav.Link>
            <Nav.Link className='text-white fw-bold' href="#plantcare">Plant Care</Nav.Link>
            <Nav.Link className='text-white fw-bold' href="#pricing">Pricing</Nav.Link>
            <Nav.Link className='text-white fw-bold' href="#about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <article className='d-none d-sm-flex justify-content-center gap-3 align-items-center'>
          <Ico_search width={30} height={30} fill="#fff" />
          <Ico_user width={30} height={30} fill="#fff" />
        </article>
      </Container>

    </Navbar>
  );
}
export default Header