import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '100k MRR', context: 'Von 0 auf 100k MRR in 18 Monaten – Exit: 2,4 Mio' },
  { value: '4 Streams', context: '1 Productized Service → 4 Revenue Streams' },
  { value: '127k€ Asset', context: '280€ → 127k€ Asset in 12 Monaten' }
];

export default function Authority() {
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
          10X ist keine Theorie. Es ist bewiesen.
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.value}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm text-center"
            >
              <div className="text-3xl font-extrabold text-[#ff5a1f]">{s.value}</div>
              <div className="mt-2 text-white/80 text-sm">{s.context}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
