import React from 'react';
import { motion } from 'framer-motion';

const calendlyBase = 'https://calendly.com/your-10x/strategy-call';

export default function FinalCTA() {
  const query = typeof window !== 'undefined' ? window.location.search : '';
  const href = `${calendlyBase}${query || ''}`;

  return (
    <section className="bg-[#0b0b0d] text-white py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-extrabold"
        >
          Bist du bereit für 10X?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-4 text-white/85"
        >
          Kein Bullshit. Kein Cheerleading. Nur die Strategie, die funktioniert.
        </motion.p>
        <div className="mt-8">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-[#ff5a1f] hover:bg-[#ff6a33] text-black font-semibold px-6 py-3 text-base shadow-[0_0_0_1px_rgba(255,255,255,0.08)] transition-colors"
          >
            Jetzt 10X Strategie-Call buchen
          </a>
          <p className="mt-3 text-xs text-white/70">15 Min Call – Wir finden heraus, ob 10X für dich machbar ist</p>
        </div>
      </div>
    </section>
  );
}
