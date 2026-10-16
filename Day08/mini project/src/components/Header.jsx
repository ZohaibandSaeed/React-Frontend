
function Header() {

    return (
        <>
            <div style={divStyle}>
                <div style={textStyle}>
                    <h3 style={headingStyle}>WELCOME TO MY BOOK STALL</h3>
                    <p style={paragraphStyle}>We believe that everyone deserves access to knowledge and stories that inspire, educate, and entertain. From classic literature to the latest bestsellers, our shelves are filled with treasures waiting to be discovered.</p>
                </div>
                <div style={imgDivStyle}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjh8gKXQ38Q281L0O07KRe3vnWcpwQ-OogxL1S77vq9Q&s=10" alt="book" style={imgStyle} />
                </div>
            </div>
        </>
    );
}

export default Header;

// --- Header Inline CSS ---

const divStyle = {
    display: "flex",
    alignItems: "center",            // Text aur image ko vertically center karne ke liye
    justifyContent: "space-between", // Text ko left aur image ko right side par rakhne ke liye
    backgroundColor: "#fdfbf7",      // Book theme ke hisaab se halka warm/cream background
    padding: "50px 60px",
    borderRadius: "12px",
    marginTop: "20px",
    gap: "40px",                     // Text aur image ke darmiyan fasla
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.06)",
    fontFamily: "sans-serif",
};

const textStyle = {
    flex: "1",                       // Left side ki jagah barabar lene ke liye
    maxWidth: "550px",               // Text ko bohot zyada phailne se rokne ke liye
};

const headingStyle = {
    fontSize: "34px",
    color: "#222222",
    margin: "0 0 16px 0",
    fontWeight: "800",
    letterSpacing: "1px",            // Heading ko thora khula aur clean dikhane ke liye
    lineHeight: "1.2",
};

const paragraphStyle = {
    fontSize: "17px",
    color: "#555555",
    lineHeight: "1.7",               // Lines ke darmiyan fasla taake parhne mein asani ho
    margin: "0",
};

const imgDivStyle = {
    flex: "1",
    display: "flex",
    justifyContent: "flex-end",      // Image ko bilkul right side par set karne ke liye
};

const imgStyle = {
    width: "100%",
    maxWidth: "380px",               // Image ka size control karne ke liye
    height: "360px",
    objectFit: "cover",              // Image stretch ya kharab na ho
    borderRadius: "12px",            // Kinaron ko halka gol karne ke liye
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)", // Image ko utha hua (3D) look dene ke liye
};