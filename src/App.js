import React, {useEffect} from 'react';
import './App.css';
import axios from 'axios';
import {useState} from "react";



function App() {
    const [pokemon, setPokemon] = useState('');
    useEffect(() => {

        async function getData() {
            try {
                const result = await axios.get(' https://pokeapi.co/api/v2/pokemon/jigglypuff');
                console.log(result.data);
                setPokemon(result.data);
            } catch (e) {
                console.error(e);
            }
        }
        getData()
    }, []);
    return (
        Object.keys(setPokemon).length > 0 &&
                <>
                    <article>
                        <h1>{pokemon.name}</h1>
                       <p>{pokemon.types.type[0]}</p>
                    </article>
                </>


    );
}

export default App;



// .map((poke) => {
//     <ol>
//         <li>{poke}</li>
//     </ol>
// });
