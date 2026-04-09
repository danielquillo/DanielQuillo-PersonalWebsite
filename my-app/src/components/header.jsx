import { useEffect, useMemo, useState } from "react"

const SECTIONS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
]

export default function Header() {
  const [shrink, setShrink] = useState(false)
  const [active, setActive] = useState("hero")

  const navH = useMemo(() => (shrink ? 56 : 72), [shrink])

  useEffect(() => {
    const onScroll = () => setShrink(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean)

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
        threshold: [0.15, 0.3, 0.45, 0.6],
      }
    )

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [navH])

  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto flex w-full max-w-[1500px] items-center justify-between px-4 pt-4">
        {/* <a
          href="#hero"
          className={[
            "font-extrabold tracking-tight text-white transition-all duration-200",
            shrink ? "text-xl" : "text-2xl",
          ].join(" ")}
        >
          DQ
        </a> */}

        <nav
          aria-label="Primary"
          className={[
            "mx-auto hidden items-center rounded-full border border-white/10 bg-black/25 px-2 shadow-[0_8px_30px_rgba(0,0,0,0.22)] backdrop-blur-xl md:flex",
            shrink ? "h-12" : "h-14",
          ].join(" ")}
        >
          <ul className="flex items-center gap-1">
            {SECTIONS.map((s) => {
              const isActive = active === s.id

              return (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className={[
                      "inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200",
                      isActive
                        ? "bg-white/14 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]"
                        : "text-white/70 hover:bg-white/8 hover:text-white",
                    ].join(" ")}
                  >
                    {s.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="w-[42px] md:w-[56px]" />
      </div>
    </header>
  )
}
