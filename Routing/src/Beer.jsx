import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom";


//Esta pagina renderizará cada bebida de manera individual

const Beer = () => {
    const [beer, setBeer] = useState([])

    const navigate = useNavigate();

    const handleClick = () => { navigate(-1)} 


    const param = useParams() 
         
    const getBeer = async()=>{
        // Deberas completar este fetch con el parametro correspondiente
        const res = await fetch(`https://api.punkapi.com/v2/beers/${param.id}`)
        const data = await res.json()
        setBeer(data[0])
    }

    useEffect(()=>{
        getBeer()
    })

  
  
  return (
    <div key={beer?.id} style={{display:"flex", flexDirection:"column", alignItems: "center", width:"100vw"}}>
        <h2>Cerveza numero {beer?.id}</h2>
        <div className='card' >
            <img src={beer?.image_url} alt="beer-detail" />
            <p>{beer?.tagline}</p>
            <p>{beer?.description}</p>
            <p>{beer?.brewers_tips}</p>
        </div>
        <button onClick={handleClick}>Go back</button>
    </div>

  )
}

export default Beer