import { useState, useEffect, useRef } from "react";
import "./Blog.css";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState<Book[]>([]);
  const [featuredBooks, setFeaturedBooks] = useState<Book[]>([]);
  const resultsRef = useRef<HTMLDivElement>(null);

  interface Book {
    key: string;
    title: string;
    author_name?: string[];
    cover_i?: number;
  }

  const categories = [
    { name: "Ficción", icon: "fas fa-book-open" },
    { name: "Historia", icon: "fas fa-landmark" },
    { name: "Ciencia", icon: "fas fa-flask" },
    { name: "Arte", icon: "fas fa-palette" },
    { name: "Tecnología", icon: "fas fa-microchip" },
  ];

  useEffect(() => {
    const fetchFeaturedBooks = async () => {
      try {
        const response = await fetch("https://openlibrary.org/search.json?q=bestsellers&limit=10");
        const data = await response.json();
        setFeaturedBooks(data.docs.slice(0, 10));
      } catch (error) {
        console.error("Error al obtener libros destacados:", error);
      }
    };

    fetchFeaturedBooks();
  }, []);

  const searchBooks = async (query: string) => {
    try {
      const response = await fetch(`https://openlibrary.org/search.json?q=${query}`);
      const data = await response.json();
      setBooks(data.docs.slice(0, 10));
      resultsRef.current?.scrollIntoView({ behavior: "smooth" });
    } catch (error) {
      console.error("Error al obtener datos de la API:", error);
    }
  };

  const handleCategorySearch = (category: string) => {
    searchBooks(category);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    searchBooks(searchTerm);
  };

  return (
    <div className="blogContainer">
      {/* Cabecera */}
      <div className="headerWrapper">
        <header className="blogHeader">
          <h1>Explora nuestra Biblioteca</h1>
          <p>Descubre libros destacados disponibles en nuestra colección o realiza una búsqueda personalizada.</p>
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
        </header>
      </div>

      {/* Sección de Categorías */}
      <section className="categoriesSection">
        <h2>Explora por Categoría</h2>
        <div className="categoriesGrid">
          {categories.map((category) => (
            <button
              key={category.name}
              className="categoryButton"
              onClick={() => handleCategorySearch(category.name)}
            >
              <i className={category.icon}></i>
              {category.name}
            </button>
          ))}
        </div>
      </section>

      {/* Sección de Resultados de la Búsqueda */}
  <section ref={resultsRef} className="featuredBooks">
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
        <div className="booksGrid">
          {featuredBooks.map((book) => (
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
    </div>
  );
};

export default Blog;
