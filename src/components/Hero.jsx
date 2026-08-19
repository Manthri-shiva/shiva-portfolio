import { motion } from 'framer-motion'
import { profile } from '../data.js'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden border-b border-line"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(124,92,255,0.12), transparent 70%)',
        }}
      />

      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[1.3fr_0.7fr] md:items-center md:px-10">
        {/* Text column */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex items-center gap-2 font-mono text-sm uppercase tracking-[0.2em] text-signal"
          >
            <motion.span
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="h-1.5 w-1.5 rounded-full bg-signal"
            />
            {profile.role}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: 'easeOut',
            }}
            style={{ fontSize: 'clamp(1.9rem, 5.2vw, 4rem)' }}
            className="text-shimmer whitespace-nowrap font-display font-semibold leading-[1.05] tracking-tight"
          >
            {profile.displayName || profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="mt-6 max-w-xl text-lg text-fog md:text-xl"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="rounded-full bg-signal-gradient px-6 py-3 font-mono text-sm font-medium text-ink transition-transform hover:scale-[1.03]"
            >
              View projects
            </a>

            <a
              href={profile.resumeUrl}
              className="rounded-full border border-line px-6 py-3 font-mono text-sm text-fog transition-colors hover:border-violet hover:text-paper"
            >
              Resume ↓
            </a>
          </motion.div>
        </div>

        {/* Profile photo */}
        {profile.photo && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.25,
              ease: 'easeOut',
            }}
            className="relative mx-auto w-full max-w-[260px] md:max-w-[320px]"
          >
            {/* Animated glow ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 14,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute -inset-3 rounded-full bg-signal-gradient opacity-60 blur-2xl"
            />

            <div className="relative overflow-hidden rounded-full border-2 border-line bg-panel p-1.5">
              <img
                src={profile.photo}
                alt={profile.displayName || profile.name}
                className="aspect-square w-full rounded-full object-cover"
              />
            </div>
          </motion.div>
        )}
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 font-mono text-xs text-mist">
        scroll
      </div>
    </section>
  )
}