import { Link } from "react-router-dom";

export default function Phone() {
    return (
        <>
            <h1>This is Phone Component</h1>
            <ul>
                <li>Samsung</li>
                <li>Apple</li>
                <li>HP</li>
            </ul>
            <Link to="/"> Back to Home </Link>
        </>
    );
}