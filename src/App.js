import React, {useEffect} from "react";
import './App.css';
import axios from 'axios'

function App() {
    const [pokemon, setPokemon] = React.useState('');

    useEffect(() => {

        async function getData() {
            try {
                const result = await axios.get('https://pokeapi.co/api/v2/pokemon/jigglypuff');
                console.log(result.data);
                setPokemon(result.data);

            } catch (error) {
                console.error(error);
            }
        }

        getData()

    }, []);

    return (
        <div>
            {setPokemon.length > 0 &&
                <article>
                    <h1>{pokemon.name}</h1>
                    <img src={pokemon.sprites.front_default}/>
                    <p>Moves: {pokemon.moves.length}</p>
                    <p>Weight: {pokemon.weight} </p>
                    <p>Abilities:</p>
                    <button type="button" id="ability-1"
                    >{pokemon.abilities[0].ability.name}</button>
                    <button type="button" id="ability-2">{pokemon.abilities[1].ability.name}</button>

                </article>
            }

        </div>


    )


}

export default App