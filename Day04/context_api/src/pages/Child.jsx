import GrandChild from "./GrandChild.jsx";
import { useContext } from "react";
import { HelloContext } from "./HelloContext.jsx";

export default function Child() {
        const data = useContext(HelloContext);
        return (<>
                <h1> Child Component </h1>
                <GrandChild />
                <h2>child: {data}</h2>
        </>);
}