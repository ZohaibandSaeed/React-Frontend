import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Phone from "./components/Phone.jsx";
import Laptop from "./components/Laptop.jsx";
import Product from "./components/Product.jsx";

function App() {
  return (
    <BrowserRouter>

      <nav>
        <Link to="/"> Home </Link> |
        <Link to="/about"> About </Link> |
        <Link to='/products/'> Product </Link> |

      </nav>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Product />}>
          <Route path="phone" element={<Phone />} />
          <Route path="laptop" element={<Laptop />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;