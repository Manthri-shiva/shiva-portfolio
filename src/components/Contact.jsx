import { motion } from 'framer-motion'
import { profile } from '../data.js'

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-32">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(67,229,255,0.10), transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-3xl px-6 text-center md:px-10">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-sm uppercase tracking-[0.2em] text-signal"
        >
          03 / Contact
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="mt-4 font-display text-4xl font-semibold leading-tight text-paper md:text-5xl"
        >
          Let's build something{' '}
          <span className="text-gradient">worth shipping</span>.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mx-auto mt-5 max-w-md text-fog"
        >
          Open to interesting problems, collaborations, and conversations.
          Reach out directly — I read everything.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-10"
        >
          <a
            href={`mailto:${profile.email}`}
            className="inline-block rounded-full bg-signal-gradient px-8 py-4 font-mono text-sm font-medium text-ink transition-transform hover:scale-[1.03]"
          >
            {profile.email}
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.18 }}
          className="mt-4 font-mono text-sm text-mist"
        >
          {profile.phone} · {profile.location}
        </motion.p>

        <div className="mt-10 flex justify-center gap-6">
          {profile.socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-sm text-mist transition-colors hover:text-paper"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}