import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const calendlyBase = 'https://calendly.com/your-10x/strategy-call';

export default function Hero() {
  const query = typeof window !== 'undefined' ? window.location.search : '';
  const ctaHref = `${calendlyBase}${query || ''}`;

  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-[#0b0b0d] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/85 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-28 pb-24 flex flex-col items-start">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-6 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs tracking-wider uppercase text-white/80 backdrop-blur-sm"
        >
          Für Unternehmer, die keine Zeit für Mittelmaß haben
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight max-w-4xl"
        >
          10X ist kein Glück. Es ist ein System.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-5 text-lg md:text-xl text-white/85 max-w-2xl"
        >
          Während andere 10% Wachstum feiern, bauen 10X-Unternehmer in derselben Zeit Imperien auf. Der Unterschied? Die Strategie.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-8 flex w-full flex-col sm:flex-row gap-4"
        >
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-[#ff5a1f] hover:bg-[#ff6a33] text-black font-semibold px-6 py-3 text-base shadow-[0_0_0_1px_rgba(255,255,255,0.08)] transition-colors"
          >
            10X Strategie-Call buchen
          </a>
        </motion.div>
      </div>
    </section>
  );
}
