import PropTypes from 'prop-types'

const Products = (props) => {
  return (
     <>
    <h1>Soy el producto</h1>
    <h2>Voy a llamar a un elemento: {props.nombre}, {props.numero} </h2>
    </>
    )
}

Products.propTypes = {
    nombre: PropTypes.string.isRequired,
    numero: PropTypes.number.isRequired,
}


export default Products