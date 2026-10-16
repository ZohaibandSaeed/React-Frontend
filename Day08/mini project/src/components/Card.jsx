
function Card({ title, author = "Zohaib Saeed", description = "Book about the react js and how to use it. Book about the react js. Book abou", price = 500 }) {

    let payloadDescription = description.trim();

    if (payloadDescription.length > 100) {
        payloadDescription = payloadDescription.slice(0, 100) + "...";
    }

    return (
        <>
            <div style={topdivStyle}>
                <div style={imgdivStyle}>
                    <img style={imgStyle} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfRWM-xIoCe4R8GsJE-RN9ADk9wPt6Ow-C2Kg-M85kaA&s=10" alt="book" />
                    <h6 style={titleStyle}>{title}</h6>
                </div>
                <div style={textdivStyle}>
                    <p style={authorStyle}>{author}</p>
                    <p style={descStyle}>{payloadDescription}</p>
                    <p style={priceStyle}> price {price}</p>
                </div>
            </div>
        </>
    );
}

export default Card;

// --- Attractive Book Card Inline CSS ---

const topdivStyle = {
    width: "280px",                  // Card ki standard width
    backgroundColor: "#ffffff",
    borderRadius: "14px",            // Smooth gol kinare
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.08)", // Modern 3D shadow
    border: "1px solid #f0f0f0",
    overflow: "hidden",              // Image ko bahar nikalne se rokne ke liye
    fontFamily: "sans-serif",
    margin: "20px",
    display: "flex",
    flexDirection: "column",
};

const imgdivStyle = {
    backgroundColor: "#fdfbf7",      // Header ke sath match karta hua warm background
    padding: "16px 16px 10px 16px",
    textAlign: "center",
    borderBottom: "1px solid #f5f5f5",
};

const imgStyle = {
    width: "100%",
    height: "200px",
    objectFit: "cover",              // Image stretch nahi hogi
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Book cover ko utha hua dikhane ke liye
    marginBottom: "12px",
};

const titleStyle = {
    fontSize: "18px",
    fontWeight: "700",
    color: "#222222",
    margin: "0",
    textTransform: "capitalize",     // Pehla lafz khud bada (Capital) ho jayega
};

const textdivStyle = {
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    gap: "8px",                      // Text lines ke darmiyan barabar fasla
};

const authorStyle = {
    fontSize: "13px",
    fontWeight: "600",
    color: "#888888",
    margin: "0",
    textTransform: "uppercase",      // Author ka naam stylish dikhane ke liye
    letterSpacing: "0.5px",
};

const descStyle = {
    fontSize: "14px",
    color: "#555555",
    lineHeight: "1.5",
    margin: "0",
};

const priceStyle = {
    fontSize: "16px",
    fontWeight: "800",
    color: "#222222",
    backgroundColor: "#f4f4f9",      // Price ko badge/button jaisa look dene ke liye
    padding: "8px 14px",
    borderRadius: "8px",
    margin: "8px 0 0 0",
    alignSelf: "flex-start",         // Box sirf price ke size jitna rahega
    textTransform: "uppercase",
};