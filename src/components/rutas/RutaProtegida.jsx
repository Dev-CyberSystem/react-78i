import {Navigate} from 'react-router-dom';

const RutaProtegida = ({ children }) => {

const user = JSON.parse(localStorage.getItem('userData')) || null

if(user){
    
    return children

}else{
    return <Navigate to="/registro" />
}


};

export default RutaProtegida
