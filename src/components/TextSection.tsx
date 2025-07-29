"use client";

import { motion } from "framer-motion";

type Props = {
  t: {
    landing: {
      textSection: {
        title: string;
        paragraphs: string[];
      };
    };
  };
};

export default function TextSection({ t }: Props) {
  const { title, paragraphs } = t.landing.textSection;

  return (
    <motion.section
      className="text-center max-w-3xl mx-auto space-y-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-bold text-center">{title}</h2>
      <div className="space-y-4 text-justify text-lg">
        {paragraphs.map((p, index) => (
          <p key={index}>{p}</p>
        ))}
      </div>
    </motion.section>
  );
}
