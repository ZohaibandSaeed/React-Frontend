
import { useRef } from "react";

function UseRef() {

    const counterRef = useRef(null);

    const incrementFun = () => {

        counterRef.current.focus();

        console.log(counterRef.current.value);
        const styleTag = {
            color: "red",
            fontSize: "20px",
            fontFamily: "Arial",
        }

        Object.assign(counterRef.current.style, styleTag);
    }

    return (
        <>
            <input type="number" ref={counterRef} />

            <button onClick={incrementFun}>inc</button>

        </>
    );
}

export default UseRef;