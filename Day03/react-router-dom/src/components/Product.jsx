import { Link, Outlet } from "react-router-dom";

export default function Product() {
    return (
        <>
            <Outlet />
            <h1>This is Product Component</h1>
            <ul>
                <li><Link to="phone"> Phone </Link></li>
                <li><Link to="laptop"> Laptop </Link></li>
            </ul>
        </>
    );
}
