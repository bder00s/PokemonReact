import React, {useEffect} from "react";
import './App.css';

import Pokecard from "./Components/Pokecard";
import axios from "axios";

//previous = result.data.null
//next = result.data.next


function App() {
    const [pokemon, setPokemon] = React.useState('');
    const [endpoint, setEndpoint] = React.useState('https://pokeapi.co/api/v2/pokemon/');


    useEffect(() => {

        async function getData() {
            try {
                const result = await axios.get(`${endpoint}`);
                console.log(result.data);
                setPokemon(result.data);

            } catch (error) {
                console.error(error);

            }
        }
        getData();
    }, [endpoint]);

    return (
        <>
            <button
                type="button"
                onClick={() => setEndpoint(pokemon.previous)}
            >
                Previous
            </button>


            <button
            type="button"
            onClick={() => setEndpoint(pokemon.next)}
            >
                Next
            </button>



            {pokemon.results && pokemon.results.map((poke) => {

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