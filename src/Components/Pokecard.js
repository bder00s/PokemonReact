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
        }, []);
    return(
        <>
            {pokemon &&
                <article>
                    <h1>{pokemon.name}</h1>
                    <img src={pokemon.sprites.front_default} alt="pokemon"/>
                    <p>Moves: {pokemon.moves.length}</p>
                    <p>Weight: {pokemon.weight} </p>
                    <p>Abilities:</p>
                     {pokemon.abilities.map((ability) => {
                        return <button>{ability.ability.name}</button>
                    })}

                    {/*<button type="button" id="ability-1">{pokemon.abilities[0].ability.name}</button>*/}
                    {/*<button type="button" id="ability-2">{pokemon.abilities[1].ability.name}</button>*/}
                    {/*/!*{pokemon.abilities.length > 2 &&*!/*/}
                    {/*/!*    <button type="button" id="ability-3">{pokemon.abilities[2].ability.name}</button>}*!/*/}

                </article>
            }
        </>
    );
};

export default Pokecard;