import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export const Footer = () => {
  return (
    <>
      <Navbar className="bg-black">
      <Container>
        <Navbar.Brand href="#home" className='text-white'>Footer del home</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end text-white">
          <Navbar.Text className='text-white'>
            Signed in as: <a href="#login" className='text-primary'>Javier Rodriguez</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};

export default Footer;
