import { useState, useEffect } from "react";
import './PedidosYa.css'

const PedidosYa = () => {
    const [pedidos, setPedidos] = useState([]);
    const [detenerPedidos, setDetenerPedidos] = useState(false);
    const [count, setCount] = useState(0);

    useEffect(()=>{
        if(!detenerPedidos){
            console.log(pedidos)
            setTimeout(()=>{
                setCount(count + 1)
                setPedidos([...pedidos, `Pizza número ${count}`])

            },2000)
        } else{
            console.log("pedido parado")
        }
    }, [pedidos])

    const handleClick = () =>{
        setDetenerPedidos(true);
    }

    const handleDeletePedidos = () => {
        console.log("pedidos borrados")
        setPedidos([])
    }

    return(
        <>

            <h1> 🍕 Pedidos Ya 🍕</h1>
            <div className="buttons">
                <button className="detenerPedidosButton" onClick={handleClick}>Detener pedidos</button>
                <button onClick={handleDeletePedidos}>Borrar pedidos</button>
            </div>
            <ul>
                {pedidos.map((pedido)=>(
                    <li key={pedido}>🍕 {pedido}</li>
                ))}
            </ul>

        </>
    )



}

export default PedidosYa;