import { useContext } from "react"
import {UsuariosContext} from "../../context/UsersContext"

const Users = () => {

  const {users} = useContext(UsuariosContext)


  console.log(users)

  return (
    <>
    <h1>Usuarios</h1>


    {users.map((user) => (
      <div>
      <h4>Usuario: {user.username}</h4>
      <h4>Email: {user.email}</h4>
      </div>
    ))}

    </>
  )

}


export default Users