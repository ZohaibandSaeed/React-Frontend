import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import Data from "../components/Data.jsx";

function Home() {
    return (
        <>
            <div>
                <Navbar />
                <Header />
                <Data />
                <Footer />

            </div>
        </>
    )
}

export default Home;