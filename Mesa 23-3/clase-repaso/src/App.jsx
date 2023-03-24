import { Outlet } from "react-router-dom"
import './App.css'
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [errorURL, setErrorURL] = useState(false);

  const navigate = useNavigate();
  const navigateForward = () => navigate('./home')

  const handleClick = () => { 
    setLoggedIn(true)
    navigateForward(); 
  };

  return (
    <div className="App">
      <h1>Despegar.com</h1>
      {!loggedIn && <button onClick={handleClick}>Login</button>}
      <Outlet/>
    </div>
  )
}

export default App
