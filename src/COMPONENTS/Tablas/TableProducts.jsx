import { useContext} from "react";
import { ProductosProvider } from '../../context/ProductsContext.jsx';

const TableProducts = () => {

const {productos} = useContext(ProductosProvider)
console.log("Productos desde TABLEPRO.JSX: ", productos)

  /*useEffect(() => {
      const obtenerDatos = async () => {
        try {
          const response = await axios.get("http://localhost:3000/productos");
          console.log(response.data);
        } catch (error) {
          console.error("Error al obtener datos:", error);
        }
      };
      obtenerDatos();
    }, []);

    console.log("productos desde TABLEPRODUCTS") */

  return (
    <>
    <h1>TABLA DE LOS PRODUCTOS</h1>
    </>
  )
}

export default TableProducts;