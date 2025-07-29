// src/components/ContactForm.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm({ t }: { t: any }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json();
      if (data.success) {
        setSent(true);
        setEmail("");
        setMessage("");
      } else {
        setError(data.error || "Error");
      }
    } catch (err) {
      setError("Error de red");
    }
  };

  return (
    <motion.section
      id="contact"
      className="max-w-xl mx-auto bg-white dark:bg-gray-900 p-6 rounded-2xl shadow"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
        {t.landing.contactForm.title}
      </h3>

      {sent ? (
        <p className="text-green-600 dark:text-green-400">
          {t.landing.contactForm.success}
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t.landing.contactForm.name}
            className="w-full border px-4 py-2 rounded-lg dark:bg-gray-800 dark:text-white"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t.landing.contactForm.email}
            className="w-full border px-4 py-2 rounded-lg dark:bg-gray-800 dark:text-white"
            required
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={t.landing.contactForm.message}
            className="w-full border px-4 py-2 rounded-lg dark:bg-gray-800 dark:text-white"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            {t.landing.contactForm.send}
          </button>
          {error && (
            <p className="text-red-600">{t.landing.contactForm.error}</p>
          )}
        </form>
      )}
    </motion.section>
  );
}
