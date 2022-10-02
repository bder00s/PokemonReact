import React from 'react';
import axios from "axios";
import {useEffect} from "react";

function Pokecard({name, url}) {
    const [pokemon, setPokemon] = React.useState('');
    useEffect(() => {

        async function getData() {
                try {
                    const result = await axios.get(`${url}`);
                    console.log(result.data);
                    setPokemon(result.data);

                } catch (error) {
                    console.error(error);

            }
        }
getData();
        }, [url]);
    return(

            <div className="container">
            {pokemon &&
                <article className="poke-card">
                    <h1>{pokemon.name}</h1>
                    <img src={pokemon.sprites.front_default} alt="pokemon"/>
                    <h3>Type:</h3>
                    {pokemon.types.map((type) =>{
                        return <p>-{type.type.name}</p>
                    })}
                    <p>Moves: {pokemon.moves.length}</p>
                    <p>Weight: {pokemon.weight} </p>
                    <h3>Abilities:</h3>
                     {pokemon.abilities.map((ability) => {
                        return <button>{ability.ability.name}</button>
                    })}


                </article>
            }
            </div>


    );
};

export default Pokecard;