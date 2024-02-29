
import { Outlet } from 'react-router-dom'
import Navbar from '../components/header/Navbar'

const root = {
    display: 'grid',
    gridTemplateColumns: '250px 1fr',
}
const Root = () => {
  return (
    <div style={root}>
        <Navbar />
        <div>
            <Outlet/>
        </div>
    </div>
  )
}

export default Root