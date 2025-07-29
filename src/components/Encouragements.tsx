"use client";

import { motion } from "framer-motion";

export default function Encouragements({ t }: { t: any }) {
  const items: string[] = t.landing.encouragements.list;

  return (
    <section className="py-12 px-6 text-center space-y-8">
      <h2 className="text-2xl font-bold">{t.landing.encouragements.title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <p className="text-gray-700 italic">“{item}”</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
