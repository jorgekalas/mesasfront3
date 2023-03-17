import { useEffect, useState } from "react";
import Card from "./components/Card";
import Form from "./components/Form";
import "./App.css";

function App() {

	//1. Estados
	const [products, setProducts] = useState([]);
	const [post, setPost] = useState(0);
	const [deleteProduct, setDeleteProduct] = useState(0);

	//2. Llamada a la api
	async function getProducts() {
		const response = await fetch("api/products");
		const data = await response.json();

		const dataASetear = await data.products;

		setProducts(dataASetear);
	}

	//3. useEffect

	useEffect(() => {
		getProducts();
	}, [post, deleteProduct]);

	console.log(products);

	//4. Handler para el post

	const handlePostRequest = () => {
		console.log("post");
		setPost(post + 1);
	};

	//5. Handler para el delete

	const handleDeleteRequest = () => {
		console.log("delete");
		setDeleteProduct(deleteProduct + 1);
	};

	//6. Return

	return (
		<div className="appContainer">
			<h1>My React Shop</h1>

			<div className="formAndCards">
				<Form
					onPostRequest={handlePostRequest}
				/>

				<div className="cardContainer">
					{products.map((product) => (
						<div key={product.id}>
							<Card
								id={product.id}
								title={product.title}
								description={product.description}
								price={product.price}
								stock={product.stock}
								category={product.category}
								image={product.image}
								onDeleteRequest={handleDeleteRequest}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default App;
