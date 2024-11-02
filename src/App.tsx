import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/inicio/Home";
import About from "./pages/acerca/About";
import Contact from "./pages/contacto/Contact";
import Blog from "./pages/blog/Blog";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import "./App.css";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
