import './Card.css'

const Card = ({type, setup, punchline}) => {
    return(
        <div className="card">
            <p>type: {type}</p>
            <hr/>
            <p>{setup}</p>
            <p>{punchline}</p>

        </div>
    )
}

export default Card;