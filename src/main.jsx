import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from "./GlobalStyle"

import {createBrowserRouter, RouterProvider} from "react-router-dom";

import Dashboard from './routes/Dashboard';
import Login from './routes/Login';
import DashboardCadastro from './routes/DashboardCadastro';
import SplashScreen from './routes/SplashScreen';



const router = createBrowserRouter ([
  { path: "/SplashScreen", element: <SplashScreen/>},
  { path: "/" , element : <Login/>},
  { path: "/Dashboard", element : <Dashboard/>},
  {path: "/DashboardCadastro", element : <DashboardCadastro/>}
])

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
      <GlobalStyle/>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
