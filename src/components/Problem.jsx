import React from 'react';
import { Calendar, Cog, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Problem() {
  const items = [
    {
      icon: Cog,
      title: 'Sie optimieren statt zu transformieren',
      text: 'Feintuning bringt 10%. Transformation schafft 10X. Systeme schlagen Busywork.'
    },
    {
      icon: Calendar,
      title: 'Sie denken in Jahren statt in Dekaden',
      text: '10X erfordert Entscheidungen, die auch in 10 Jahren noch richtig sind.'
    },
    {
      icon: Clock,
      title: 'Sie skalieren Zeit statt Leverage',
      text: 'Mehr Stunden sind eine Sackgasse. Leverage skaliert unabhängig von dir.'
    }
  ];

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
          Warum 99% der Unternehmer niemals 10X erreichen
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, text }, i) => (
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
