import Child from "./Child.jsx"
import { useContext } from "react";
import { HelloContext } from "./HelloContext.jsx";
export default function Parent(){

        const data = useContext(HelloContext);

        return (<>
                <h1> Parent Component </h1>
                <Child />
                <div>Parent: {data}</div>
        </>)
}

