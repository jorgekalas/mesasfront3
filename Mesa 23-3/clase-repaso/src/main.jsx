import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home.jsx'
import Hotel from './components/Hotel'
import ErrorComponent from './components/ErrorComponent.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<App/>}>
          <Route path='/home' element = {<Home /> } />
          <Route path='/details/:id' element = {<Hotel />} />
        </Route>
        <Route path = '*' element = {<ErrorComponent/>} />
      </Routes>
    </BrowserRouter>
)
