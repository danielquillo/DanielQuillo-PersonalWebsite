import { useEffect, useMemo, useState } from "react"
import { AiOutlineMoon, AiOutlineSun } from "react-icons/ai";

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
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark"
    return localStorage.getItem("theme") || document.documentElement.dataset.theme || "dark"
  })

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

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem("theme", theme)
  }, [theme])

  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto flex w-full max-w-[1500px] items-center justify-between px-4 pt-2">
        <nav
          aria-label="Primary"
          className={[
            "mx-auto hidden items-center rounded-full border px-2 backdrop-blur-sm md:flex h-12",
            // shrink ? "h-12" : "h-14",
          ].join(" ")}
          style={{
            borderColor: "var(--nav-border)",
            backgroundColor: "var(--nav-bg)",
            boxShadow: "var(--nav-shadow)",
          }}
        >
          <ul className="flex items-center gap-1">
            {SECTIONS.map((s) => {
              const isActive = active === s.id

              return (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="inline-flex items-center rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200"
                    style={
                      isActive
                        ? {
                            backgroundColor: "var(--nav-pill-active-bg)",
                            color: "var(--nav-pill-active-text)",
                            boxShadow: "var(--nav-pill-active-ring)",
                          }
                        : {
                            color: "var(--nav-pill-text)",
                          }
                    }
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.backgroundColor = "var(--nav-pill-hover-bg)"
                        e.currentTarget.style.color = "var(--nav-pill-hover-text)"
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.backgroundColor = "transparent"
                        e.currentTarget.style.color = "var(--nav-pill-text)"
                      }
                    }}
                  >
                    {s.label}
                  </a>
                </li>
              )
            })}
          </ul>

          <div className="ml-3 flex items-center">
            <div
              className="mr-3 h-6 w-px"
              style={{ backgroundColor: "var(--nav-border)"}}
            />
            <div
              className="flex items-center gap-1 ">
              <button
              type="button"
              onClick={() => setTheme("light")}
              aria-label="Switch to light mode"
              title="Light mode"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200"
              style={
                theme === "light"
                  ? {
                      backgroundColor: "var(--nav-pill-active-bg)",
                      color: "var(--nav-pill-active-text)",
                      boxShadow: "var(--nav-pill-active-ring)",
                    }
                  : {
                      color: "var(--nav-pill-text)",
                    }
              }
              onMouseEnter={(e) => {
                if (theme !== "light") {
                  e.currentTarget.style.backgroundColor = "var(--nav-pill-hover-bg)"
                  e.currentTarget.style.color = "var(--nav-pill-hover-text)"
                }
              }}
              onMouseLeave={(e) => {
                if (theme !== "light") {
                  e.currentTarget.style.backgroundColor = "transparent"
                  e.currentTarget.style.color = "var(--nav-pill-text)"
                }
              }}
            >
              <AiOutlineSun className="h-4 w-4 text-current"/>
            </button>

            <button
              type="button"
              onClick={() => setTheme("dark")}
              aria-label="Switch to dark mode"
              title="Dark mode"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200"
              style={
                theme === "dark"
                  ? {
                      backgroundColor: "var(--nav-pill-active-bg)",
                      color: "var(--nav-pill-active-text)",
                      boxShadow: "var(--nav-pill-active-ring)",
                    }
                  : {
                      color: "var(--nav-pill-text)",
                    }
              }
              onMouseEnter={(e) => {
                if (theme !== "dark") {
                  e.currentTarget.style.backgroundColor = "var(--nav-pill-hover-bg)"
                  e.currentTarget.style.color = "var(--nav-pill-hover-text)"
                }
              }}
              onMouseLeave={(e) => {
                if (theme !== "dark") {
                  e.currentTarget.style.backgroundColor = "transparent"
                  e.currentTarget.style.color = "var(--nav-pill-text)"
                }
              }}
            >
              <AiOutlineMoon className="h-4 w-4 text-current"/>
            </button>

            </div>
          </div>
        </nav>

        <div className="w-[42px] md:w-[56px]" />
      </div>
    </header>
  )
}
