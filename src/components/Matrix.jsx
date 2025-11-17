import React from 'react';
import { Brain, Layers, Target, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const items = [
  {
    icon: Target,
    title: '10X Thinking',
    text: 'Unmögliche Ziele zwingen dich zu anderen Lösungen. Du designst Zukunft, statt Vergangenheit zu optimieren.'
  },
  {
    icon: Layers,
    title: '10X Leverage',
    text: '1 Aktion → 10 Ergebnisse. Systeme, Medien, Kapital und Code multiplizieren Output ohne mehr Zeit.'
  },
  {
    icon: Brain,
    title: '10X Positioning',
    text: 'Blue Ocean statt Red Ocean. Gewinne durch Kategorie-Design, nicht durch Rabattschlachten.'
  },
  {
    icon: Rocket,
    title: '10X Exit',
    text: 'Baue von Anfang an verkaufbar. Standardisiere, dokumentiere, automatisiere — skalierbar by design.'
  }
];

export default function Matrix() {
  return (
    <section className="bg-[#0c0c0e] text-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl font-bold mb-12"
        >
          Die 10X Strategy Matrix
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-sm"
            >
              <Icon className="h-6 w-6 text-[#ff5a1f]" />
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-white/80 text-sm">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
