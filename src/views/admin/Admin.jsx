import { Button } from "react-bootstrap";
import PropTypes from 'prop-types'

const Admin = ({funcionProps}) => {


  return (
    <>
      <h1>Admin</h1>
      <Button  onClick={funcionProps}> Ejecutador de Funcion </Button>
    </>
  );
};

Admin.propTypes = {
    funcionProps: PropTypes.func
}

export default Admin;
