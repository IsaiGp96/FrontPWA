// Coments.tsx
import React, { useState } from "react";

const Coments: React.FC = () => {
  const [username, setNombre] = useState("");
  const [email, setCorreo] = useState("");
  const [comentario, setComentario] = useState("");
  const [loading, setLoading] = useState(false);

  const enviarComentario = async () => {
    console.log(
      "Usuario: " + username + " Email: " + email + " Comentario: " + comentario
    );
    if (!username.trim() || !email.trim() || !comentario.trim()) {
      window.alert("Error: Todos los campos son obligatorios.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("http://10.1.100.132:3000/api/addComment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, comentario }),
      });

      if (response.ok) {
        window.alert("Éxito: Tu comentario fue enviado correctamente.");
        setNombre("");
        setCorreo("");
        setComentario("");
      } else {
        window.alert("Error: Hubo un problema al enviar tu comentario.");
      }
    } catch (error) {
      console.error("Error al enviar comentario:", error);
      window.alert("Error: No se pudo conectar con el servidor.");
    }
    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto bg-[#231f1a] p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4 text-white text-center">
        Déjanos tu comentario
      </h2>
      <div className="mb-4">
        <label className="block text-white font-medium mb-2 text-justify">Nombre</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Tu nombre"
          className="w-full px-4 py-2 border border-[#f1f0e6] rounded focus:outline-none focus:border-[#bbfbff]"
        />
      </div>
      <div className="mb-4">
        <label className="block text-white font-medium mb-2 text-justify">Correo</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setCorreo(e.target.value)}
          placeholder="Tu correo"
          className="w-full px-4 py-2 border border-[#f1f0e6] rounded focus:outline-none focus:border-[#bbfbff]"
        />
      </div>
      <div className="mb-4">
        <label className="block text-white font-medium mb-2 text-justify">Comentario</label>
        <textarea
          value={comentario}
          onChange={(e) => setComentario(e.target.value)}
          placeholder="Tu comentario"
          rows={4}
          className="w-full px-4 py-2 border border-[#f1f0e6] rounded focus:outline-none focus:border-[#bbfbff] resize-none"
        />
      </div>
      <button
        onClick={enviarComentario}
        disabled={loading}
        className="w-full bg-[#06e5ee] text-[#001f20] font-semibold py-2 px-4 rounded hover:bg-[#bbfbff] disabled:opacity-50 transition-colors duration-200"
      >
        {loading ? (
          <div className="w-6 h-6 border-4 border-t-[#001f20] border-[#61f7ff] rounded-full animate-spin place-self-center"></div>
        ) : (
          "Enviar Comentario"
        )}
      </button>
    </div>
  );
};

export default Coments;
