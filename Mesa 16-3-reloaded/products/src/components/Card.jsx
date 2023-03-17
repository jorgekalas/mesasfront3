import "./Card.css";
import axios from "axios";
import "./Form.css";

const Card = ({
	id,
	title,
	description,
	price,
	stock,
	category,
	image,
	onDeleteRequest,
}) => {

	//1. Delete

	async function removeProduct(id) {
		try {
			await axios.delete(`api/products/${id}`);
			Swal.fire({
				text: "Product deleted successfully!",
				icon: "success",
			});
			onDeleteRequest();
		} catch (error) {
			Swal.fire({
				text: "Error when deleting this product - " + error.message,
				icon: "error",
			});
		}
	}

	//2. Return

	return (
		<>
			<div className="card">
				<h4 className="title">
					{id} . {title}
				</h4>
				<p className="description">{description}</p>
				<span className="category">{category}</span>
				<p className="price">Price: ${price}</p>
				<div className="containerSecondary">
					<p className="stock">Stock: {stock} u.</p>
					<img src={image} />
				</div>
			</div>
			<div className="buttonsEditandRemove">
				<button onClick={() => Swal.fire("Feature coming soon!")}>Edit</button>
				<button onClick={() => removeProduct(id)} className="btn-remove">
					Remove
				</button>
			</div>
		</>
	);
};

export default Card;
