"use client";

import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

export default function InstagramSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-sm text-[#5b8dee] font-medium tracking-wide block mb-3">
              Contenido
            </span>
            <h2 className="font-syne font-extrabold text-3xl md:text-4xl text-[#e8e8ed] tracking-tight mb-3">
              Lo que comparto
            </h2>
            <p className="text-[#8b8b96] text-base max-w-md leading-relaxed">
              Marketing, producto y tecnología en español: notas prácticas,
              proyectos en público y cosas que fui aprendiendo.
            </p>
          </div>
          <a
            href="https://instagram.com/jose.crea"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 border border-white/[0.10] text-[#e8e8ed] text-sm font-medium rounded-xl hover:bg-white/[0.04] hover:border-white/[0.16] transition-all duration-200 self-start md:self-auto"
          >
            <Instagram size={16} />
            @jose.crea
          </a>
        </div>

        {/* Elfsight Instagram Feed Widget — replace XXXXXXXX with your widget ID */}
        {/* <div className="elfsight-app-XXXXXXXX" data-elfsight-app-lazy></div> */}

        {/* Fallback: Visual grid linking to Instagram */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            { topic: "IA aplicada al negocio", color: "from-[#5b8dee]/15 to-[#9d7cf0]/10" },
            { topic: "E-commerce & Growth", color: "from-[#3ecf8e]/15 to-[#5b8dee]/10" },
            { topic: "Producto & UX", color: "from-[#9d7cf0]/15 to-[#f47285]/10" },
            { topic: "Automatización", color: "from-[#e8a838]/15 to-[#3ecf8e]/10" },
            { topic: "Construyendo en público", color: "from-[#f47285]/15 to-[#9d7cf0]/10" },
            { topic: "Lecciones y errores", color: "from-[#5b8dee]/15 to-[#3ecf8e]/10" },
          ].map((post, i) => (
            <motion.a
              key={post.topic}
              href="https://instagram.com/jose.crea"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className={`relative aspect-square rounded-xl overflow-hidden border border-white/[0.06] bg-gradient-to-br ${post.color} hover:border-white/[0.12] transition-all duration-200 group cursor-pointer flex flex-col items-center justify-center p-4`}
            >
              <Instagram size={20} className="text-white/30 mb-3 group-hover:text-white/50 transition-colors" />
              <span className="text-xs text-white/50 text-center leading-snug group-hover:text-white/70 transition-colors">
                {post.topic}
              </span>
            </motion.a>
          ))}
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-[#8b8b96]/60">
            Más en @jose.crea cuando publico.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
