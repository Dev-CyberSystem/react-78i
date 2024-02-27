


const Products = (props) => {

    console.log(props)

  return (
    <>
    <div>Products</div>
    <h4>El nombre del diseñador del sitio es: {props.nombre}</h4>
    <h4>La edad del diseñador del sitio es: {props.edad}</h4>

    </>
  )
}

export default Products