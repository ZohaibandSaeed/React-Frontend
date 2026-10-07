import { Link } from "react-router-dom";

export default function Laptop() {
    return (
        <>
            <h1>This is Laptop Component</h1>
            <ul>
                <li>Dell</li>
                <li>Apple</li>
                <li>HP</li>
            </ul>
            <Link to="/"> Back to Home </Link>
        </>
    );
}