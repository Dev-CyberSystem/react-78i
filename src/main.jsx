import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Nosotros from './views/nosotros/Nosotros.jsx'
import Root from './routes/Root.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Root/>,
    errorElement: <div>Oops.. Página no encontrada</div>,
    children:[
      {
        path:'/nosotros',
        element: <Nosotros/>
      },
      {
        path:'/',
        element: <App/>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    {/* <App />  */}
  </React.StrictMode>,
)
