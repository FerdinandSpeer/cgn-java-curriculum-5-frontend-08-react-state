import './App.css'
import {Link, Route, Routes} from "react-router-dom";
import WelcomePage from "./pages/Welcome.tsx";
import RickAndMortyCharacters from "./pages/RickAndMortyCharacters.tsx";
import CharacterDetailCard from "./pages/CharacterDetailCard.tsx";
import CreateNewChar from "./pages/CreateNewChar.tsx";
import {useState} from "react";
import {Character} from "./types/RickAndMortyCharacter.ts";
import {characters} from "./Characters.ts";



export default function App() {

    const [characterList, setCharacterList] = useState<Character[]>(characters);

    function addNewCharacter(newCharacter){
        const updatedCharacterlist = [...characterList, newCharacter]
        setCharacterList(updatedCharacterlist)
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
                <Route path={"/character"} element={<RickAndMortyCharacters characters={characterList}/>}/>
                <Route path={"/character/:id"} element={<CharacterDetailCard/>} />
                <Route path={"/newcharacter"} element={<CreateNewChar saveNewCharacter={addNewCharacter} />} />
            </Routes>

        </>


    );
}
