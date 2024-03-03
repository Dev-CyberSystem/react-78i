import { Button } from "react-bootstrap"
import PropTypes from 'prop-types';

const Admin = ({funcionProps}) => {
  return (
    <>
    <Button onClick={funcionProps}>Ejecutador de FUNCIÓN DESDE ADMIN</Button>
    </>
  )
}


Admin.propTypes = {
    funcionProps: PropTypes.func
}

export default Admin