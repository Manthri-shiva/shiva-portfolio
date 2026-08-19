import { profile } from '../data.js'

export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 font-mono text-xs text-mist md:flex-row md:px-10">
        <span>© {new Date().getFullYear()} {profile.displayName || profile.name}. All rights reserved.</span>
        <span>Built with React, Tailwind & Framer Motion.</span>
      </div>
    </footer>
  )
}
