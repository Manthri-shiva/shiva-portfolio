import { motion } from 'framer-motion'
import { projects } from '../data.js'

export default function Projects() {
  return (
    <section id="projects" className="border-b border-line py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-sm uppercase tracking-[0.2em] text-signal"
        >
          02 / Work
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="mt-4 max-w-2xl font-display text-3xl font-semibold text-paper md:text-4xl"
        >
          Selected projects
        </motion.h2>

        <div className="mt-16 space-y-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-line bg-panel/60 p-8 transition-colors hover:border-violet md:p-10"
            >
              <div className="grid gap-8 md:grid-cols-[1fr_1.4fr]">
                <div>
                  <span className="font-mono text-xs text-mist">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <h3 className="mt-2 font-display text-2xl font-semibold text-paper md:text-3xl">
                    {project.title}
                  </h3>

                  <p className="mt-1 font-mono text-sm text-signal">
                    {project.subtitle}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-line px-3 py-1 font-mono text-xs text-mist"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex gap-4">
                    <a
                      href={project.link}
                      className="font-mono text-sm text-paper underline decoration-violet decoration-2 underline-offset-4 transition-opacity hover:opacity-70"
                    >
                      View case →
                    </a>

                    <a
                      href={project.repo}
                      className="font-mono text-sm text-mist transition-colors hover:text-paper"
                    >
                      Source
                    </a>
                  </div>
                </div>

                <div>
                  <p className="text-base leading-relaxed text-fog">
                    {project.description}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {project.highlights.map((h, idx) => (
                      <li
                        key={idx}
                        className="flex gap-3 text-sm text-mist"
                      >
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-br from-violet to-cyan" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-violet/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}