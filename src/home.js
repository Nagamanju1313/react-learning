import { Link } from "react-router-dom";

const HomePage  = ()=>{
    return(
        <>
            <ul>
                <li>
                    <Link to={"/todo"}>Todo App</Link>
                </li>
                <li>
                    <Link to={"/todoserver"}>Todo Server</Link>
                </li>
                <li>
                    <Link to={"/todoapi"}>Todo API</Link>
                </li>
                <li>
                    <Link to={"/colorchanger"}>Color Changer</Link>
                </li>
                <li>
                    <Link to={"/placeholderapi"}>Placeholder API</Link>
                </li>
                <li>
                    <Link to={"/calculator"}>Calculator</Link>
                </li>
                <li>
                    <Link to={"/snapshot"}>Snapshot</Link>
                </li>
            </ul>
        </>
    )
}
export default HomePage;