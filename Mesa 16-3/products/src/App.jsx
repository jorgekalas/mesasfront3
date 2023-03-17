import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  //Llamada a la api
  async function getProducts(){
  const response = await fetch("api/products");
  const data = await response.json();

  const dataASetear = await data.products;

  setProducts(dataASetear);

  
  }

  //useEffect

  useEffect(()=>{
    getProducts();
    
  },[])

  console.log(products)


  return (
    <>
      <h1>Productos</h1>
      <ul>
      {
        products.map(product =>(
          
          <div key={product.id}>
            <h3>Producto numero {product.id}</h3>
            <li>{product.title}</li>
            <li>{product.description}</li>
            <li>{product.price}</li>
            <li>{product.stock}</li>
            <li>{product.category}</li>
            <img src={product.image} />
          </div>
          
        ))
      } 
      </ul>
    </>
  );
}

export default App;
