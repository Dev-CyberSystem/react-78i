
import { Link } from 'react-router-dom'

const navbar = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: '20px',
    height: '100dvh',
    backgroundColor: '#fff',
    width: '250px',
    padding: '20px'
}
const Navbar = () => {
  return (
    <div style={navbar}>
        <Link to='/'>Inicio</Link>
        <Link to='/nosotros'>Nosotros</Link>
    </div>
  )
}

export default Navbar