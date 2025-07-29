// src/components/CallToAction.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CallToAction({ t }: { t: any }) {
  return (
    <motion.section
      className="text-center bg-blue-600 text-white py-12 px-6 rounded-xl shadow-lg"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-4">{t.landing.cta.title}</h2>
      <p className="mb-6">{t.landing.cta.description}</p>
      <Link
        href="#contact"
        className="inline-block bg-white text-blue-600 font-semibold px-6 py-2 rounded-full hover:bg-gray-100 transition"
      >
        {t.landing.cta.button}
      </Link>
    </motion.section>
  );
}
