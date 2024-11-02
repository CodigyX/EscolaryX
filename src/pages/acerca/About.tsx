import "./About.css";

const About = () => {
  return (
    <div className="aboutContainer">
      {/* Encabezado Principal */}
      <header className="aboutHeader">
        <h1>Acerca de EscolaryX</h1>
        <p>
          Bienvenido a EscolaryX, tu biblioteca virtual donde el conocimiento y la tecnología se encuentran para facilitar la búsqueda de libros. Nos dedicamos a proporcionar acceso rápido y sencillo a una vasta colección de títulos en diversas categorías y géneros.
        </p>
      </header>

      {/* Sección de Misión */}
      <section className="missionSection">
        <h2>Nuestra Misión</h2>
        <p>
          Nuestra misión es facilitar el acceso a la información y al conocimiento a través de una plataforma intuitiva y eficiente. En EscolaryX, creemos que los libros tienen el poder de transformar vidas, y por eso trabajamos para que cualquier persona pueda encontrar los recursos que necesita para aprender, crecer y explorar nuevos horizontes.
        </p>
      </section>

      {/* Sección de Visión */}
      <section className="visionSection">
        <h2>Nuestra Visión</h2>
        <p>
          Aspiramos a ser el buscador de libros de referencia, no solo por la calidad de nuestro catálogo, sino por la experiencia de usuario que ofrecemos. Queremos que cada persona que utilice EscolaryX descubra el placer de encontrar exactamente el libro que busca, de una manera rápida y amigable.
        </p>
        <p>
          Nuestro objetivo es seguir ampliando nuestra colección y brindar acceso a libros que eduquen, inspiren y enriquezcan a nuestra comunidad de usuarios.
        </p>
      </section>

      {/* Sección de Valores */}
      <section className="valuesSection">
        <h2>Valores</h2>
        <p>
          En EscolaryX, nos guiamos por los siguientes valores:
        </p>
        <ul className="valores">
          <li className="valor">
            <strong>Accesibilidad:</strong> Nos esforzamos por hacer que el acceso a la información sea fácil y universal para todas las personas, sin importar su ubicación.
          </li>
          <li className="valor">
            <strong>Innovación:</strong> Utilizamos tecnología avanzada para ofrecer una experiencia de búsqueda rápida y precisa, manteniéndonos a la vanguardia en soluciones tecnológicas.
          </li>
          <li className="valor">
            <strong>Calidad:</strong> Nos comprometemos a ofrecer libros de calidad en una plataforma segura, confiable y fácil de usar.
          </li>
          <li className="valor">
            <strong>Compromiso con el usuario:</strong> Escuchamos a nuestra comunidad y adaptamos nuestros servicios para brindar una experiencia personalizada que satisfaga sus necesidades.
          </li>
        </ul>
      </section>

      {/* Sección de Contacto */}
      <section className="contactSection">
        <h2>Contáctanos</h2>
        <p>
          Si tienes alguna pregunta o sugerencia, o necesitas asistencia con el uso de EscolaryX, no dudes en contactarnos. Estamos aquí para ayudarte a encontrar el libro que estás buscando y asegurarnos de que disfrutes de una experiencia gratificante en nuestra plataforma.
        </p>
        <p>
          Puedes comunicarte con nosotros a través de nuestro formulario de contacto o enviarnos un mensaje directamente. ¡Nos encantaría saber de ti!
        </p>
      </section>
    </div>
  );
};

export default About;
