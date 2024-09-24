import {Link} from "react-router-dom";

export default function WelcomePage() {
    return (
        <div>

            <h1><Link to={"/character"}>Welcome visitor!</Link></h1>


        </div>
    )
}