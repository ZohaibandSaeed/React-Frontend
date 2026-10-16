import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav style={parentStyle}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkVexxzbg3jvRGCioSPljjTfsjn7CWC45h3L40QZwXjQ&s=10"
                alt="logo"
                style={imgStyle}
            />

            <div>
                <ul style={ulStyle}>
                    <li>
                        <Link to="/" style={linkItemStyle}>Home</Link>
                    </li>
                    <li>
                        <Link to="/contact" style={linkItemStyle}>Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;

// --- Updated Best Styles ---

const parentStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between", // Logo left par aur links right par karne ke liye
    backgroundColor: "#504f4fff",         // Modern dark color
    padding: "12px 30px",            // Top/Bottom 12px, Left/Right 30px
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // Halka sa shadow professional look ke liye
};

const imgStyle = {
    height: "45px",
    width: "45px",
    borderRadius: "50%",  // Logo ko gol (circular) shape dene ke liye
    objectFit: "cover",   // Image stretch hone se bachane ke liye
    cursor: "pointer",
};

const ulStyle = {
    display: "flex",
    listStyle: "none",    // Bullets (dots) khatam karne ke liye
    gap: "30px",          // Links ke darmiyan fasla
    margin: 0,            // Default browser margin hatane ke liye
    padding: 0,           // Default browser padding hatane ke liye
};

const linkItemStyle = {
    color: "#ffffff",
    textDecoration: "none", // Niche wali line (underline) hatane ke liye
    fontWeight: "600",
    fontSize: "16px",
    fontFamily: "sans-serif",
};