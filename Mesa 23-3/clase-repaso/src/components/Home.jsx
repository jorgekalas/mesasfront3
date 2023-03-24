import hoteles from "../hoteles.json";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {

	return (
        <>
        <h1>Listado de hoteles</h1>
		<table>
            <thead>
				<tr>
					<th>Nombre</th>
					<th>Precio</th>
					<th>Descripción</th>
					<th>Ciudad</th>
					<th>Estrellas</th>
					<th>Wifi</th>
					<th>Aire acondicionado</th>
					<th>Teléfono</th>
					<th>Email</th>
					<th>Imagen</th>
				</tr>
                </thead>
			<tbody>
				{hoteles.map((hotel) => (
					<tr key={hotel.name}>
						<td>{hotel.name}</td>
						<td>{hotel.daily_price}</td>
						<td>{hotel.description}</td>
						<td>{hotel.city}</td>
						<td>{hotel.stars}</td>
						{hotel.wifi?<td>Si</td>:<td>No</td>}
						{hotel.air_conditioned?<td>Si</td>:<td>No</td>}
						<td>{hotel.phone}</td>
						<td>{hotel.email}</td>
                        <Link to={`/details/${hotel.name}`}>
                            <td><img className="hotelImage" src={hotel.img} alt="hotel_image" /></td>
                        </Link>
					</tr>
				))}
            </tbody>
		</table>
        </>
	);
};

export default Home;
