import { useEffect, useState } from "react";
import Card from "./Card";

function Data() {

    const [data, setData] = useState([]);

    useEffect(() => {

        const FetchAPI = async () => {
            const payload = await fetch("https://gutendex.com/books/");
            const jsonPayload = await payload.json();
            setData(jsonPayload.results);
        }

        FetchAPI();

    }, []);

    return (
        <>
            <div style={divStyle}>
                <h1 style={headingStyle}> Listed Book Here </h1>

                {data.map((item) => (
                    <div key={item.id} style={innerDivStyle}>
                        <Card title={item.title} author={item.authors?.[0]?.name} description={item.summaries[0]} price={item.price} style={cardstyle} />
                    </div>
                ))}
            </div>
        </>
    );
}

export default Data;

// --- Data Component Inline CSS ---

const divStyle = {
    display: "flex",
    flexWrap: "wrap",                // Cards ko ek hi row mein rakhne aur jagah khatam hone par agli line mein bhejne ke liye
    justifyContent: "center",        // Saare cards ko page ke center mein rakhne ke liye
    gap: "25px",                     // Cards ke darmiyan barabar fasla
    padding: "40px 20px",
    backgroundColor: "#f9f9fb",      // Halka sa clean background taake white cards uth kar nazar aayein
    borderRadius: "12px",
    marginTop: "20px",
    fontFamily: "sans-serif",
};

const headingStyle = {
    width: "100%",                   // Heading ko poori 100% line dene ke liye taake cards iske niche se shuru hon
    textAlign: "center",
    fontSize: "32px",
    fontWeight: "800",
    color: "#222222",
    margin: "0 0 15px 0",
    letterSpacing: "0.5px",
    textTransform: "uppercase",
};

const innerDivStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "stretch",           // Tamam cards ki height barabar rakhne mein madad karta hai
};

const cardstyle = {
    height: "100%",
};