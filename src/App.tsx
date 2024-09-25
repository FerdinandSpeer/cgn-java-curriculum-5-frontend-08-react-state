import './App.css'
import {Link, Route, Routes} from "react-router-dom";
import WelcomePage from "./pages/Welcome.tsx";
import RickAndMortyCharacters from "./pages/RickAndMortyCharacters.tsx";
import CharacterDetailCard from "./pages/CharacterDetailCard.tsx";
import CreateNewChar from "./pages/CreateNewChar.tsx";
import {useEffect, useState} from "react";
import {Character} from "./types/RickAndMortyCharacter.ts";
import axios from "axios";



export default function App() {

    const [dateRickAndMorty, setDataRickAndMorty] = useState<Character[]>([])

useEffect(()=>{
    axios.get("https://rickandmortyapi.com/api/character")
        .then((response) => setDataRickAndMorty(response.data.results))
        .catch((error) => console.error('Error fetching data:', error));}

    ,[]);




    function addNewCharacter(newCharacter: Character) {
        const updatedCharacterlist = [...dateRickAndMorty, newCharacter]
        setDataRickAndMorty(updatedCharacterlist)
    }

    return (
        <>
            <table style={{width: "100%", marginBottom: "100px", border: "1px solid black", borderRadius:"10px"}}>
                <tr>
                    <th><Link to={"/"}>Home</Link></th>
                    <th><Link to={"/character"}>Characters</Link></th>
                    <th><Link to={"/newcharacter"}>Create new Character</Link></th>
                </tr>
            </table>

            <Routes>
            <Route path={"/"} element={<WelcomePage/>}/>
                <Route path={"/character"} element={<RickAndMortyCharacters characters={dateRickAndMorty}/>}/>
                <Route path={"/character/:id"} element={<CharacterDetailCard/>} />
                <Route path={"/newcharacter"} element={<CreateNewChar saveNewCharacter={addNewCharacter} />} />
            </Routes>

        </>


    );
}
