import React from 'react';
import { Audit, FileText, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const phases = [
  {
    icon: Audit,
    title: 'Phase 1: 10X Audit',
    text: 'Wo stehst du? Was blockiert 10X? Klarheit über Engpässe, Potenziale und Leverage-Punkte.'
  },
  {
    icon: FileText,
    title: 'Phase 2: 10X Blueprint',
    text: 'Deine persönliche Leverage-Strategie. Roadmap mit klaren Prioritäten, KPIs und Verantwortlichkeiten.'
  },
  {
    icon: CheckCircle2,
    title: 'Phase 3: 10X Execution',
    text: 'Umsetzung mit Accountability & Frameworks. Wir bauen Systeme, die 10X tragen.'
  }
];

export default function HowItWorks() {
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
          Dein Weg zu 10X in 3 Phasen
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {phases.map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
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
