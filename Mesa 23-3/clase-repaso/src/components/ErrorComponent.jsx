import { Link } from "react-router-dom";

const ErrorComponent = () => {
    return(
        <div style={{display: 'flex', flexDirection: 'column'}}>
        <h1>🤖 ERROR 404 - NOT FOUND 🤖</h1>
        <button>
            <Link to="/">Volver a pagina principal</Link>
        </button>
    </div>
    )
}

export default ErrorComponent;