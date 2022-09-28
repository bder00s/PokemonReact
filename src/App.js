import React, {useEffect} from "react";
import './App.css';

import Pokecard from "./Components/Pokecard";
import axios from "axios";


function App() {
    const [pokemon, setPokemon] = React.useState('');


    useEffect(() => {

        async function getData() {
            try {
                const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/`);
                console.log(result.data.results);
                setPokemon(result.data.results);

            } catch (error) {
                console.error(error);

            }
        }
        getData();
    }, []);

    return (
        <>
            {pokemon && pokemon.map((poke) => {

            return <Pokecard
            url={poke.url}
            name={poke.name}
            key={poke.name}
            />
            })}




</>
    )


}

export default App