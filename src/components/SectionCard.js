import React, { memo } from "react";
import { motion } from "framer-motion";

function SectionCard({ id, title, index = 0, children }) {
  // 4 paletas que van rotando por sección
  const palettes = [
    { ring: "ring-blue-200/60", bg: "from-blue-50 to-cyan-50" },
    { ring: "ring-emerald-200/60", bg: "from-emerald-50 to-green-50" },
    { ring: "ring-violet-200/60", bg: "from-violet-50 to-fuchsia-50" },
    { ring: "ring-amber-200/60", bg: "from-amber-50 to-orange-50" },
  ];
  const p = palettes[index % palettes.length];

  return (
    <motion.section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`section-card bg-gradient-to-br ${p.bg} ring-1 ${p.ring} border-white/60 rounded-2xl p-6 md:p-8 scroll-mt-28`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.25, delay: index * 0.04 }}
    >
      <h2
        id={`${id}-title`}
        className="section-title flex items-center gap-3 mb-6"
      >
        <span className="w-7 h-7 rounded-full bg-white/80 text-gray-700 text-sm font-bold shadow inline-flex items-center justify-center">
          {index + 1}
        </span>
        {title}
      </h2>

      {children}
    </motion.section>
  );
}
export default memo(SectionCard);
