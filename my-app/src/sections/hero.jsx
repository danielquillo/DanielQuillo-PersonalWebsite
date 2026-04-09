import { useEffect, useState } from 'react'

const ROLES = [
  'Software Developer',
  'CS @ UIUC',
  'Web Developer',
]

function IconButton({ href, label, children }) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      aria-label={label}
      className="inline-flex h-13 w-13 items-center justify-center rounded-full border border-[var(--border-strong)] text-[var(--text)] transition hover:-translate-y-0.5 hover:border-[var(--border)] hover:bg-[var(--surface-2)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
    >
      {children}
    </a>
  )
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const role = ROLES[roleIndex % ROLES.length]

  useEffect(() => {
    const t = setInterval(() => setRoleIndex((i) => i + 1), 2200)
    return () => clearInterval(t)
  }, [])

  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative min-h-[calc(100vh-72px)] scroll-mt-[72px] overflow-hidden pt-[clamp(3rem,10vh,24vh)] will-change-transform"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1300px] px-4">
        <div className="max-w-none">
          <p className="m-0 mb-3 text-[var(--muted)] uppercase tracking-[.14em] font-semibold text-[clamp(1rem,2vw,2rem)]">
            Hello, I am
          </p>

          <h1 className="m-0 mb-2 leading-[1.02] text-[var(--accent)] font-extrabold text-[clamp(3.5rem,10vw,7rem)]">
            <span className="accent-gradient">Danny Quillo</span>
          </h1>

          <p className="m-0 mb-3 flex items-baseline gap-2 text-[var(--muted)] font-bold leading-[1.12] text-[clamp(1.6rem,4.5vw,3rem)]">
            <span className="text-[var(--accent)] text-[1.25em]">▸</span>
            <span className="inline-block min-w-[18ch] role-swap" aria-live="polite">
              {role}
            </span>
          </p>

          <div className="mt-2 mb-5 flex gap-4" aria-label="Social links">
            <IconButton href="https://github.com/danielquillo" label="GitHub">
              <svg viewBox="0 0 16 16" className="h-7 w-7 fill-current" aria-hidden="true">
                <path d="M8 .2a8 8 0 0 0-2.53 15.6c.4.07.55-.17.55-.38v-1.33c-2.24.49-2.71-1.08-2.71-1.08-.36-.9-.88-1.14-.88-1.14-.72-.49.05-.48.05-.48.8.06 1.22.83 1.22.83.7 1.2 1.84.85 2.29.65.07-.5.27-.85.5-1.05-1.79-.2-3.67-.9-3.67-4a3.1 3.1 0 0 1 .84-2.16c-.08-.2-.36-1.01.08-2.1 0 0 .68-.22 2.22.83a7.6 7.6 0 0 1 4.04 0c1.54-1.05 2.22-.83 2.22-.83.44 1.09.16 1.9.08 2.1.52.57.84 1.3.84 2.16 0 3.1-1.88 3.8-3.68 4 .28.24.53.72.53 1.47v2.18c0 .21.15.45.55.38A8 8 0 0 0 8 .2Z" />
              </svg>
            </IconButton>

            <IconButton href="https://www.linkedin.com/in/daniel-quillo-a937b5383/" label="LinkedIn">
              <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden="true">
                <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5 2.5 2.5 0 0 1 4.98 3.5ZM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.3c0-1.27-.02-2.9-1.76-2.9-1.77 0-2.04 1.38-2.04 2.8V21H10z" />
              </svg>
            </IconButton>

            <IconButton href="mailto:dannyq2@illinois.edu" label="Email">
              <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden="true">
                <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z" />
              </svg>
            </IconButton>
          </div>

          <p className="m-0 mb-5 font-mono tracking-wide text-[var(--text)] text-[clamp(1.05rem,1.8vw,1.7rem)] whitespace-nowrap max-[900px]:whitespace-normal">
            Passionate Software Developer | Full Stack Web Developer | Maintainer
          </p>

          <p className="m-0">
            <a
              className="inline-block font-extrabold uppercase tracking-[.06em] text-[var(--accent)] border-b-2 border-transparent transition hover:-translate-y-0.5 hover:border-current focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] text-[clamp(1.05rem,2.4vw,1.35rem)]"
              href="/assets/DanielQuilloResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              My Resume
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
