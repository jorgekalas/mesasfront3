import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav>
			<button>
				<Link to="/home">Home</Link>
			</button>
			<button>
				<Link to="/contacto">Contacto</Link>
			</button>
			<button>
				<Link to="/beer">Beer</Link>
			</button>
		</nav>
	);
};

export default Navbar;
