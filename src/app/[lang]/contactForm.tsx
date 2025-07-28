"use client";

import { useState } from "react";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({ email, message }),
    });
    if (res.ok) setSent(true);
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Formulario de contacto</h2>
      {sent ? (
        <p className="text-green-600">¡Gracias! Hemos recibido tu mensaje.</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-md">
          <input
            type="email"
            placeholder="Tu correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border px-3 py-2 rounded"
            required
          />
          <textarea
            placeholder="Tu mensaje"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border px-3 py-2 rounded"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Enviar
          </button>
        </form>
      )}
    </div>
  );
}
