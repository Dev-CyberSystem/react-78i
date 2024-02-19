import {Container,Navbar} from 'react-bootstrap';


const Navigation = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="src\assets\Red Black White Anime Podcast Twitch Logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Anime-Landia
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
