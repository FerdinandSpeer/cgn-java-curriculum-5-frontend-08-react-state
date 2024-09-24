import {ChangeEvent, FormEvent, useState} from "react";

type character = {
    name: string,
    species: string,
    status: string
}

export default function CreateNewChar({saveNewCharacter}) {
const [nameInput, setName] = useState<string>('');
const [speciesInput, setSpecies] = useState<string>('');
const [statusInput, setStatus] = useState<string>('');




    function handleChangeName(event: ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    function handleChangeSpecies(event: ChangeEvent<HTMLInputElement>) {
        setSpecies(event.target.value);
    }
    function handleChangeStatus(event: ChangeEvent<HTMLInputElement>) {
        setStatus(event.target.value);
    }

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        const charToSave = {name: nameInput, species: speciesInput, status: statusInput}
        saveNewCharacter(charToSave)

    }



    return (

        <>
            <h1>Build your new Rick and Morty Character!</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor={"name"}>Name:</label>
                    <input id={"name"} type="text" value={nameInput} onChange={handleChangeName}/>
                </div>
                <div>
                    <label htmlFor={"species"}>Species:</label>
                    <input id={"species"} type="text" value={speciesInput} onChange={handleChangeSpecies}/>
                </div>
                <div>
                    <label htmlFor={"status"}>Status:</label>
                    <input id={"status"} type="text" value={statusInput} onChange={handleChangeStatus}/>
                </div>
                <button type="submit">Save Character</button>
            </form>
        </>

    )
}