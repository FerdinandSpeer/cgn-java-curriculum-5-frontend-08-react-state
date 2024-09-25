import {Link, useParams} from "react-router-dom";
import {characters} from "../Characters.ts";

export default function CharacterDetailCard() {

    const params = useParams();
    const id: number | undefined = params.id


    const singleCharCard = characters.find((char) => char.id == id)


    return(
        <>
            <h1>{singleCharCard.name}</h1>
            <img src={singleCharCard.image} alt={singleCharCard.name}/>
                <div>
                    <Link to={"/character"}>Back to Characters</Link>
                </div>
        </>
    )
}