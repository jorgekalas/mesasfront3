import { useState } from "react";
import styles from './Form.module.css'


const Formulario = () => {

    //1. UseState

    const [nombre, setNombre] = useState("");
    const [edad, setEdad] = useState("");
    const [pokemon, setPokemon] = useState("");
    const [datos, setDatos] = useState([]);

    //2. Handlers

    const onChangeNombre = (event) => {setNombre(event.target.value)}
    const onChangeEdad = (event) => setEdad(event.target.value);
    const onChangePokemon = (event) => setPokemon(event.target.value);

    //3. Validaciones

    const validarNombre = (nombre) => {
        const nombreSinEspacios = nombre.trim();
        return nombreSinEspacios.length > 3;
    }

    const validarEdad = (edad) => {
        return edad > 0;
    }

    const validarPokemon = (pokemon) => {
        const pokemonSinEspacios = pokemon.trim();
        return pokemonSinEspacios.length > 5;
    }

    //4. Handler para el formulario

    const onSubmitForm = (event) => {
        event.preventDefault();

        const esNombreValido = validarNombre(nombre);
        const esEdadValida = validarEdad(edad);
        const esPokemonValido = validarPokemon(pokemon);

        if(!esNombreValido || !esEdadValida || !esPokemonValido){
            Swal.fire({
                icon: 'error',
                text:'Alguno de los datos ingresados es incorrecto'
            })  
        } else{
            setDatos([...datos, {
                "nombre": nombre.trim().toUpperCase(),
                "edad": edad,
                "pokemon": pokemon.trim().toUpperCase()
            }])
            Swal.fire(`¡Te damos la bienvenida ${nombre}! \n Tu nuevo Pokémon es ${pokemon} 🎉`)
        }
        console.log(datos)
    }

    //5. Return

    return(
        <div className={styles.container}>

            <h1>Registro de usuario</h1>

            <form onSubmit={onSubmitForm} className={styles.formulario}>
                    <div className = {styles.formGroup}>
                        <label>Nombre</label>
                        <input type="text" onChange={onChangeNombre} value={nombre}/>
                    </div>
                    <div className = {styles.formGroup}>
                        <label>Edad</label>
                        <input type="number" onChange={onChangeEdad} value={edad}/>
                    </div>
                    <div className = {styles.formGroup}>
                        <label>Pokémon favorito</label>
                        <input type="text" onChange={onChangePokemon} value={pokemon}/>
                    </div>
                    <button type="submit">Enviar</button>
            </form>

        </div>
    )
}

export default Formulario;
