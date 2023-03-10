import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {createBrowserRouter, RouterProvider} from "react-router-dom";

import Dashboard from './routes/Dashboard';
import Login from './routes/Login';
import DashboardCadastro from './routes/DashboardCadastro';


const router = createBrowserRouter ([
  { path: "/" , element : <Login/>},
  { path: "/Dashboard", element : <Dashboard/>},
  {path: "/DashboardCadastro", element : <DashboardCadastro/>}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
