import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import App from './App'
import Home from './Home'
import Contacto from './Contacto'
import Beer from './Beer'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<App/>}>
          <Route path = '/home' element = {<Home/>} />
          <Route path = '/contacto' element = {<Contacto/>} />
          <Route path = '/beer/:id' element = {<Beer/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
