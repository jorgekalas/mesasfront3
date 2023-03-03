import { useState } from "react";
import './List.css'

const List = () => {
    const [articlesList, setArticlesList] = useState ([]);
    const [article, setArticle] = useState("");

    const addArticle = () => {
        setArticlesList([...articlesList, article])
    }

    const handleChange = (event) => {
        setArticle(event.target.value)
    }


    return(
        <>
        <h1>Lista de artículos</h1>

        <div className="container">

            <div className="divAgregar">
                <input onChange={handleChange} type="text" placeholder="Ingresá un artículo" />
                <button onClick={addArticle}>Agregar</button>
            </div>

            <ul>
            {articlesList.map((article, index) => (
                <li key={index}>{index+1}. El articulo {article} ha sido agregado.</li>
            ))}
            </ul>

        </div>

       
        </>
    )

}

export default List;