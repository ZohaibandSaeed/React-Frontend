import { useContext } from "react";
import { HelloContext } from "./HelloContext.jsx";

export default function GrandChild() {

        const data = useContext(HelloContext);

        return (<>
                <h1> Grand Child Component</h1>
                <h2>Grand child: {data}</h2>
        </>);
}