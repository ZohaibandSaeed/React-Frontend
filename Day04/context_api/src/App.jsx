// import { HelloContext } from "./pages/HelloContext.jsx";

import { HelloContext } from "./pages/HelloContext.jsx";
import Parent from "./pages/Parent.jsx";

export default function App () {

    const data = "Zohaib";

    return (
        <HelloContext.Provider value={data}>
            <Parent />
        </HelloContext.Provider>
    );
}