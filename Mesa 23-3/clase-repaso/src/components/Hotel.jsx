import './Hotel.css'
import hoteles from "../hoteles.json";
import React from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Hotel = () => {
    
    const params = useParams()
    console.log(params)

    const hotel = hoteles.find(hotel => hotel.name == params.id)
    console.log(hotel)

    const navigate = useNavigate();
    const handleClick = () => { navigate(-1)} 

    return(
        <div className="hotelCard">
            <h2>{hotel.name}</h2>
            <img className="hotelImage" src={hotel.img} alt="hotel_image" />
            <p className="cardDescription">{hotel.description}</p>
            <span>Ciudad: {hotel.city}</span>
            <span>Estrellas: {hotel.stars}</span>
            <span>Wifi: {hotel.wifi?<span>Si</span>:<span>No</span>}</span>
            <span>Aire acondicionado: {hotel.air_conditioned?<span>Si</span>:<span>No</span>}</span>
            <strong>Precio por noche: ${hotel.daily_price}</strong>
            <span>Teléfono:{hotel.phone}</span>
            <span>Email: {hotel.email}</span>
            <button onClick={handleClick}>Volver</button>
        </div>
    )
}

export default Hotel