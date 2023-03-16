import './App.css'
import { useState, useEffect } from 'react'
import Card from './components/Card'

function App() {

  const [bromas, setBromas] = useState([]);
  const [type, setType] = useState("random_ten");

  //1. Consumo de la api
  const fetchBromas = async () => {
    const response = await fetch("https://official-joke-api.appspot.com/"+type);
    const data = await response.json();
    setBromas(data);
  }

  //2. useEffect
  useEffect (() => {
    fetchBromas();
  }, [type])

  //3. Handlers

  const onGeneralClick = () => {
    setType("jokes/general/ten")
  }

  const onProgrammingClick = () => {
    setType("jokes/programming/ten")
  }


  //4. Renderizado

  return (
    <div className="App">
      <h1>Chistes</h1>
      <button onClick={onGeneralClick}>Chistes generales</button>
      <button onClick={onProgrammingClick}>Chistes de programación</button>
    {
      bromas.map((broma)=>(
        <div key = {broma.id}>
          <Card
            type = {broma.type}
            setup = {broma.setup}
            punchline = {broma.punchline}
            />
        </div>
      )
      )
    }
    
    </div>
  )
}

export default App
