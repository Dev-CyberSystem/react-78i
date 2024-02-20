import Cards from './card.jsx'
import Texto from './texto.jsx'

const Section = () =>{
    return(
        <>
        <Texto/>
        <section className='d-flex justify-content-evenly '>
            
        <Cards/>
        </section>
        </>
    )
}

export default Section