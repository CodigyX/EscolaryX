import { useState } from "react";
import Map from "../../components/Map";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",         // Cambiado de 'nombre' a 'name'
    last_name: "",    // Cambiado de 'apellidos' a 'last_name'
    email: "",        // Cambiado de 'correo' a 'email'
    message: "",      // Cambiado de 'mensaje' a 'message'
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, last_name, email, message } = formData;

    // Validación de campos requeridos y longitud mínima del mensaje
    if (!name || !last_name || !email || message.length < 10) {
      setError("Por favor, completa todos los campos y asegúrate de que el mensaje tenga al menos 10 caracteres.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        console.log(result.message); // Mensaje de éxito en la consola
        setSubmitted(true);
        setError("");
      } else {
        setError(result.error || "Error al enviar el formulario");
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setError("Error al enviar el formulario");
    }
  };

  return (
    <div className="contact-page">
      <section className="welcome-section">
        <h1>Contacto</h1>
        <p>
          ¿Tienes alguna pregunta o deseas más información sobre nuestros
          servicios? ¡Nos encantaría saber de ti! Rellena el formulario o
          contáctanos a través de nuestras redes sociales.
        </p>
      </section>

      <section className="form-section">
        {submitted ? (
          <div className="success-message">
            <i className="fas fa-check-circle"></i>
            <p>¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.</p>
          </div>
        ) : (
          <>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleFormSubmit} className="contact-form">
              <input
                type="text"
                name="name"  // Cambiado de 'nombre' a 'name'
                placeholder="Nombre"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="last_name"  // Cambiado de 'apellidos' a 'last_name'
                placeholder="Apellidos"
                value={formData.last_name}
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                name="email"  // Cambiado de 'correo' a 'email'
                placeholder="Correo Electrónico"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <textarea
                name="message"  // Cambiado de 'mensaje' a 'message'
                placeholder="Mensaje (mínimo 10 caracteres)"
                value={formData.message}
                onChange={handleInputChange}
                minLength={10}
                required
              />
              <button type="submit">Enviar</button>
            </form>
          </>
        )}
      </section>

      <section className="map-section">
        <h2>Nuestra Ubicación</h2>
        <Map />
      </section>
    </div>
  );
};

export default Contact;
