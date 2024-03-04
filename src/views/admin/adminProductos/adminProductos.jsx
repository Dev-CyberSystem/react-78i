import FormProductos from "../../../components/formularios/formProductos/formProductos"
import TablaDeProductos from "../../../components/tablas/tablaDeProductos"


const AdminProductos = () =>
{
    return(
        <>
        <h1>Administración de Productos</h1>
        <TablaDeProductos />
        <FormProductos/>
        </>
    )
}

export default AdminProductos