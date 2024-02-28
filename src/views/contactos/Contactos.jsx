import React, { useEffect } from 'react'
import Figure from 'react-bootstrap/Figure';
import Products from '../../components/products/Products';
import Button from 'react-bootstrap/Button';
import { useState } from "react"

const Contactos = () => {

  const [count, setCount] = useState(0)

  const funcionContador = () => {
    setCount(count + 1)
  }

  const funcionDecremento = () => {
    setCount(count - 1)
  }


  useEffect(() => {
    console.log("Montaje de componente")
    return () => {
      console.log("Se desmonto el componente")
    }
  }, [count])






    return (
        <div className='d-flex flex-column align-items-center '>
          <Figure>
          <Figure.Image
            width={171}
            height={180}
            alt="171x180"
            src="../../../img/fla.png"
          />
          <Figure.Caption>
            Imagen del diseñador del sitio web.
          </Figure.Caption>
        </Figure>
        <Products nombre="Javier" edad={20} />
        <h4>Contador: {count}</h4>
        <Button onClick={funcionContador}>Contar de 1 en 1</Button>
        <Button onClick={funcionDecremento}>Restar de 1 en 1</Button>
      <hr/>




        </div>
        
      );
}

export default Contactos