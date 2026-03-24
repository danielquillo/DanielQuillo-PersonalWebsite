import { useEffect, useMemo, useState } from "react"

const SECTIONS = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience'},
    { id: 'contact', label: 'Contact' }
]

export default function Header() {
    const [shrink, setShrink] = useState(false)
    const [active, setActive] = useState('hero')

    const navH = useMemo(() => (shrink ? 56 : 72), [shrink])

    useEffect(() => {
        const onScroll = () => setShrink(window.scrollY > 12)
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        const els = SECTIONS
        .map((s) => document.getElementById(s.id))
        .filter(Boolean)
        
        if (els.length === 0) return

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
                if (visible?.target?.id) setActive(visible.target.id)
            },
            {
                rootMargin: `-${navH + 8}px 0px -60% 0px`,
                threshold: [0.15, 0.3, 0.45, 0.6]
            }
        )

        els.forEach((el) => observer.observe(el))
        return () => observer.disconnect()
    }, [navH])
    
    return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[var(--bg)]">
      <div className="mx-auto w-full max-w-[1400px] px-4">
        <nav
          className={[
            'flex items-center gap-4 transition-[height] duration-200',
            shrink ? 'h-14' : 'h-[72px]'
          ].join(' ')}
          aria-label="Primary"
        >
          <a
            href="#hero"
            className={[
              'font-extrabold tracking-tight transition-all duration-200',
              shrink ? 'text-lg' : 'text-2xl'
            ].join(' ')}
          >
            DQ
          </a>

          <ul className="ml-auto hidden items-center gap-2 md:flex">
            {SECTIONS.map((s) => {
              const isActive = active === s.id
              return (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className={[
                      'rounded-lg px-3 py-2 text-sm font-semibold transition',
                      'text-[var(--muted)] hover:bg-white/10 hover:text-[var(--text)]',
                      isActive ? 'bg-white/15 text-[var(--text)]' : ''
                    ].join(' ')}
                  >
                    {s.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}
