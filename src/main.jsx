import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Home.jsx"
import Beer from "./Beer.jsx"
import Contacto from "./Contacto.jsx"
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>} >  
          <Route path="Home" element={<Home/>} /> 
          <Route index element={<Beer/>} />
          <Route path=":id" element={<Beer/>} /> 
         
          <Route path="Contacto" element={<Contacto/>} /> 
        </Route> 
        <Route path="*" element={<h1>404 Not Found</h1>} /> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
