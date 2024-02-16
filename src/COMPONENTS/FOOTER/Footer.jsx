import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';


const Footer = () => {
    return (
        <>
        <Button variant="success">Success</Button>{' '}
        <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
        </>
    )
}

export default Footer

