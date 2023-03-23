import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import { Link } from "react-router-dom";

const Home = () => {
	const [beers, setBeers] = useState([]);

	const getBeers = async () => {
		const res = await fetch("https://api.punkapi.com/v2/beers");
		const data = await res.json();
		setBeers(data);
	};

	useEffect(() => {
		getBeers();
	});

	return (
		<div className="grid">
			{beers.length
				? beers.map((beer) => (
						<div key={beer.id}>
							<Link to={`/beer/${beer.id}`}>
								<Card data={beer} />
							</Link>
						</div>
				  ))
				: null}
		</div>
	);
};

export default Home;
