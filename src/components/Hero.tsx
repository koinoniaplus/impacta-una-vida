"use client";

import { motion } from "framer-motion";

export default function Hero({ t }: { t: any }) {
  return (
    <motion.section
      className="text-center max-w-3xl mx-auto space-y-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white">
        {t.landing.hero.title}
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300">
        {t.landing.hero.description}
      </p>
    </motion.section>
  );
}
