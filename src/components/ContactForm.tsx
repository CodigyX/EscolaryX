import { useState } from "react";

const ContactForm = ({ onSubmit }: { onSubmit: (formData: any) => void }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    correo: "",
    mensaje: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ nombre: "", apellidos: "", correo: "", mensaje: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <input
        type="text"
        name="nombre"
        placeholder="Nombre completo"
        value={formData.nombre}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="apellidos"
        placeholder="Apellidos"
        value={formData.apellidos}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="correo"
        placeholder="Correo electrónico"
        value={formData.correo}
        onChange={handleChange}
        required
      />
      <textarea
        name="mensaje"
        placeholder="Escribe tu mensaje"
        value={formData.mensaje}
        onChange={handleChange}
        required
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default ContactForm;
