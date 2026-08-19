import { motion } from 'framer-motion'
import { about } from '../data.js'

export default function About() {
  return (
    <section id="about" className="border-b border-line py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid gap-14 md:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-sm uppercase tracking-[0.2em] text-signal">
              01 / About
            </span>

            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-paper md:text-4xl">
              {about.heading}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5"
          >
            {about.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-base leading-relaxed text-fog md:text-lg"
              >
                {p}
              </p>
            ))}

            <div className="flex flex-wrap gap-2 pt-4">
              {about.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-line px-3 py-1 font-mono text-xs text-mist"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}