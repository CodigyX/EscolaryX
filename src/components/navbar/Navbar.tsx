import { Link } from "react-router-dom";
import "./Navbar.css"; // Importa los estilos

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>EscolaryX</h1>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/about">Acerca de</Link>
        </li>
        <li>
          <Link to="/contact">Contacto</Link>
        </li>
        <li>
          <Link to="/blog">Blogs</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
