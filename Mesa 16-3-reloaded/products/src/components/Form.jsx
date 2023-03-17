import { useState } from "react";
import axios from "axios";

const Form = ({ onPostRequest }) => {

	//1. Declaración de los estados
	const [id, setId] = useState("");
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState("");
	const [stock, setStock] = useState("");
	const [category, setCategory] = useState("");
	const [image, setImage] = useState("");

	//2. Declaración de los handlers para los inputs

	const onChangeId = (event) => {
		setId(event.target.value);
	};
	const onChangeTitle = (event) => {
		setTitle(event.target.value);
	};
	const onChangeDescription = (event) => {
		setDescription(event.target.value);
	};
	const onChangePrice = (event) => {
		setPrice(event.target.value);
	};
	const onChangeStock = (event) => {
		setStock(event.target.value);
	};
	const onChangeCategory = (event) => {
		setCategory(event.target.value);
	};
	const onChangeImage = (event) => {
		setImage(event.target.value);
	};

	//3. Declaración del handler para el form

	const onSubmitForm = (event) => {
			addProduct(event);
			resetFieldStates();
			onPostRequest();
	};

	//4. POST

	//4.a Función de reseteo de campos

	function resetFieldStates() {
		setId("");
		setTitle("");
		setDescription("");
		setPrice("");
		setStock("");
		setCategory("");
		setImage("");
	}

	//4.b Función de agregado de producto

	async function addProduct(event) {
		event.preventDefault();
		try {
			await axios.post("api/products", {
				id: id,
				title: title,
				description: description,
				price: price,
				stock: stock,
				category: category,
				image: image,
			});
			Swal.fire({
				text: "Product added successfully!",
				icon: "success",
			});
			resetFieldStates(); //resetea los estados
			event.target.reset(); //resetea los inputs (UI)
		} catch (error) {
			Swal.fire({
				text: "Error when adding this product - " + error.message,
				icon: "error",
			});
		}
	}

	//5. Return

	return (
		<div className="formContainer">
			<form onSubmit={onSubmitForm}>
				<input type="number" onChange={onChangeId} placeholder="Id" />
				<input type="text" onChange={onChangeTitle} placeholder="Title" />
				<input
					type="text"
					onChange={onChangeDescription}
					placeholder="Description"
				/>
				<input type="number" onChange={onChangePrice} placeholder="Price" />
				<input type="number" onChange={onChangeStock} placeholder="Stock" />
				<input type="text" onChange={onChangeCategory} placeholder="Category" />
				<input type="text" onChange={onChangeImage} placeholder="Image URL" />
				<button type="submit">Add product</button>
			</form>
		</div>
	);
};

export default Form;
