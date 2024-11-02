import React, { useState, useEffect, useRef } from "react";
import "./Home.css";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState<Book[]>([]);
  const [featuredBooks, setFeaturedBooks] = useState<Book[]>([]); // Estado para libros destacados
  const resultsRef = useRef<HTMLDivElement>(null);

  interface Book {
    key: string;
    title: string;
    author_name?: string[];
    cover_i?: number;
  }

  useEffect(() => {
    const fetchFeaturedBooks = async () => {
      try {
        const response = await fetch("https://openlibrary.org/search.json?q=bestsellers&limit=10");
        const data = await response.json();
        setFeaturedBooks(data.docs.slice(0, 10)); // Guardar los primeros 10 libros como destacados
      } catch (error) {
        console.error("Error al obtener libros destacados:", error);
      }
    };

    fetchFeaturedBooks();
  }, []);

  const searchBooks = async () => {
    try {
      const response = await fetch(`https://openlibrary.org/search.json?q=${searchTerm}`);
      const data = await response.json();
      setBooks(data.docs.slice(0, 10)); // Limitar a los primeros 10 resultados

      resultsRef.current?.scrollIntoView({ behavior: "smooth" });
    } catch (error) {
      console.error("Error al obtener datos de la API:", error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    searchBooks();
  };

  return (
    <div className="homeContainer">
      {/* Sección de Búsqueda */}
      <header className="homeHeader">
        <div className="headerOverlay">
          <h1>Bienvenido a EscolaryX</h1>
          <p>Descubre libros de todo el mundo a través de OpenLibrary.</p>
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Buscar libros..."
              value={searchTerm}
              onChange={handleInputChange}
              className="searchInput"
            />
            <button type="submit" className="ctaButton">
              <i className="fas fa-search"></i> Buscar
            </button>
          </form>
        </div>
      </header>

      {/* Sección de Resultados de la Búsqueda */}
      <section ref={resultsRef} className="recommendedBooks">
        <h2>Resultados de la Búsqueda</h2>
        <div className="booksGrid">
          {books.map((book) => (
            <div key={book.key} className="bookItem">
              <h3>{book.title}</h3>
              <p>{book.author_name ? book.author_name.join(", ") : "Autor desconocido"}</p>
              {book.cover_i ? (
                <img
                  src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
                  alt={book.title}
                />
              ) : (
                <div className="placeholderImage">Sin imagen</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Sección de Libros Destacados */}
      <section className="featuredBooks">
        <h2>Libros Destacados</h2>
        <div className="featuredBooksGrid">
          {featuredBooks.map((book) => (
            <div key={book.key} className="featuredBookItem">
              <h3>{book.title}</h3>
              <p>{book.author_name ? book.author_name.join(", ") : "Autor desconocido"}</p>
              {book.cover_i ? (
                <img
                  src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
                  alt={book.title}
                />
              ) : (
                <div className="placeholderImage">Sin imagen</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Sección de Opiniones */}
      <section className="testimonialsSection">
        <h2>Lo que nuestros lectores dicen</h2>
        <div className="testimonialsGrid">
          <div className="testimonial">
            <p>
              "Gracias a EscolaryX, he descubierto libros que han enriquecido mi conocimiento. ¡Increíble plataforma!"
            </p>
            <h4>- Juan Pérez</h4>
          </div>
          <div className="testimonial">
            <p>
              "La flexibilidad para explorar temas a mi propio ritmo ha sido clave para aprovechar al máximo mi lectura."
            </p>
            <h4>- Laura Gutiérrez</h4>
          </div>
          <div className="testimonial">
            <p>
              "Un recurso indispensable. Encuentro contenido actualizado y accesible, ¡altamente recomendable!"
            </p>
            <h4>- Miguel Rodríguez</h4>
          </div>
          <div className="testimonial">
            <p>
              "Explorar la biblioteca me ha dado nuevas perspectivas y ganas de aprender más cada día."
            </p>
            <h4>- Ana Fernández</h4>
          </div>
          <div className="testimonial">
            <p>
              "La colección es variada y accesible, y el soporte técnico es excepcional."
            </p>
            <h4>- Carlos López</h4>
          </div>
          <div className="testimonial">
            <p>
              "Puedo profundizar en temas de interés sin restricciones, aplicando lo aprendido de forma práctica."
            </p>
            <h4>- Mariana Sánchez</h4>
          </div>
          <div className="testimonial">
            <p>
              "La mejor biblioteca virtual que he usado. Muy recomendable para estudiantes y autodidactas."
            </p>
            <h4>- Diego Ramírez</h4>
          </div>
          <div className="testimonial">
            <p>
              "EscolaryX me abrió las puertas a conocimientos que impulsaron mi carrera."
            </p>
            <h4>- Sofía Martínez</h4>
          </div>
        </div>
      </section>

      {/* Sección de Llamado a la Acción */}
      <section className="ctaSection">
        <h2>¿Listo para explorar el mundo del conocimiento?</h2>
        <p>
          Únete a nuestra comunidad de lectores apasionados. Accede a una vasta colección de libros, participa en discusiones y continúa tu aprendizaje.
        </p>
        <button className="ctaButton">Regístrate Hoy</button>
      </section>
    </div>
  );
};

export default Home;
