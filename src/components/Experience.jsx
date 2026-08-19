import { motion } from 'framer-motion'
import { experience, education, certifications } from '../data.js'

export default function Experience() {
  return (
    <section id="experience" className="border-b border-line py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-sm uppercase tracking-[0.2em] text-signal"
        >
          Experience
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="mt-4 max-w-2xl font-display text-3xl font-semibold text-paper md:text-4xl"
        >
          Where I've worked
        </motion.h2>

        <div className="mt-16 grid gap-16 md:grid-cols-[1.6fr_1fr]">
          {/* Timeline */}
          <div className="relative space-y-10 border-l border-line pl-8">
            {experience.map((item, i) => (
              <motion.div
                key={item.role + item.org}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="relative"
              >
                <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-gradient-to-br from-violet to-cyan" />

                <p className="font-mono text-xs text-mist">
                  {item.period}
                </p>

                <h3 className="mt-1 font-display text-lg font-semibold text-paper">
                  {item.role}
                </h3>

                <p className="font-mono text-sm text-signal">
                  {item.org}
                </p>

                <ul className="mt-3 space-y-2">
                  {item.points.map((p, idx) => (
                    <li
                      key={idx}
                      className="flex gap-3 text-sm text-mist"
                    >
                      <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-mist" />
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Education + Certifications */}
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-line bg-panel/60 p-6"
            >
              <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-signal">
                Education
              </h4>

              <h3 className="mt-3 font-display text-lg font-semibold text-paper">
                {education.degree}
              </h3>

              <p className="mt-1 text-sm text-fog">
                {education.school}
              </p>

              <p className="mt-1 font-mono text-xs text-mist">
                {education.period} · {education.detail}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="rounded-2xl border border-line bg-panel/60 p-6"
            >
              <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-signal">
                Certifications
              </h4>

              <ul className="mt-4 space-y-3">
                {certifications.map((c) => (
                  <li key={c} className="flex gap-3 text-sm text-fog">
                    <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-gradient-to-br from-violet to-cyan" />
                    {c}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}