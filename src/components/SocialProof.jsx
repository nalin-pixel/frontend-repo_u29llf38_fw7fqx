import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: 'In 90 Tagen vom Agentur-Hamsterrad zur productized Cashflow-Maschine.',
    name: 'Lena K., SaaS Marketing',
    result: '+68% MRR, 2 neue Vertriebskanäle'
  },
  {
    quote: 'Wir haben auf Leverage umgestellt. Heute arbeitet die Firma für mich, nicht umgekehrt.',
    name: 'Tom W., IT-Services',
    result: '120% Umsatzwachstum bei -30% Zeitaufwand'
  },
  {
    quote: 'Das Framework ist brutal ehrlich. Kein Bullshit, nur Klarheit und Execution.',
    name: 'Murat A., E-Com',
    result: '3x ROAS stabil, Team skaliert mit Prozessen'
  }
];

export default function SocialProof() {
  return (
    <section className="bg-[#0a0a0b] text-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl font-bold mb-12"
        >
          Was 10X-Unternehmer sagen
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <p className="text-white text-sm">“{t.quote}”</p>
              <div className="mt-4 text-white/80 text-xs">{t.name}</div>
              <div className="mt-1 text-[#ff5a1f] text-xs font-semibold">{t.result}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
