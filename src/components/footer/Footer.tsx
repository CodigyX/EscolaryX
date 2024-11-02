import "./Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa"; // Asegúrate de instalar react-icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>EscolaryX</h2>
          <p>¡Mundos fantasticos al alcance de tu mente!</p>
        </div>

        <div className="footer-links">
          <h3>Enlaces útiles</h3>
          <ul>
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/about">Acerca de</a>
            </li>
            <li>
              <a href="/contact">Contacto</a>
            </li>
            <li>
              <a href="/blog">Blogs</a>
            </li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contacto</h3>
          <p>
            Email:{" "}
            <a href="mailto:info@escolaryx.com">info@escolaryx.com</a>
          </p>
          <p>
            Teléfono: <a href="tel:+123456789">+52 272 100 8919</a>
          </p>
        </div>

        <div className="footer-social">
          <h3>Redes Sociales</h3>
          <div className="social-icons">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} CodigyX. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
