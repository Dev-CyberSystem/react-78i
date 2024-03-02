import { useContext } from "react"
import { createContext } from "react"

export const UsuariosContext = useContext()

const ContextUsuarios = () => {



    
  return (
    <>
    <UsuariosContext.provider>
        {children}
    </UsuariosContext.provider>
      
    </>
  )
}

export default ContextUsuarios
