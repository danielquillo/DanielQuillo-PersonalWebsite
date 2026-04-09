const EXPERIENCE = [
  {
    role: "Web Developer",
    org: "Spring Rain Lawn Sprinklers Inc.",
    date: "January 2026 – Present",
    description:
      "Designed, built, and deployed a production website for a real landscaping and irrigation business to strengthen its online presence and improve customer outreach.",
    bullets: [
      "Built and launched a live client website using Next.js, React, TypeScript, and Tailwind CSS",
      "Worked directly with the client to translate business needs into a polished, responsive web experience",
      "Implemented a modern frontend with reusable components, responsive layouts, and improved usability across devices",
      "Delivered a production-ready site for a real company, including deployment and a custom domain setup",
    ],
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Netlify",
      "Namecheap",
    ],
  },
  {
    role: "Technical Team Lead",
    org: "Society of Hispanic Professional Engineers (SHPE)",
    date: "January 2025 – May 2025",
    description:
      "Active member of SHPE at UIUC, contributing to professional development, community building, and outreach initiatives.",
    bullets: [
      "Participated in technical workshops and networking events",
      "Collaborated with peers on projects and initiatives",
      "Contributed to outreach and community engagement efforts",
      "Developed leadership and communication skills",
    ],
    tech: ["Leadership", "Collaboration", "Networking"],
  },
]

export default function Experience() {
  return (
    <section id="experience" aria-label="Experience" className="py-20">
      <div className="mx-auto w-full max-w-[1300px] px-4">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[.14em] text-[var(--accent)]">
          Experience
        </p>

        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-[var(--text)] md:text-4xl">
          What I’ve worked on
        </h2>

        <p className="mb-10 leading-8 text-[var(--muted)]">
          A combination of real-world development experience, client work, and
          professional involvement that reflects my growth as a developer.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {EXPERIENCE.map((item) => (
            <article
              key={item.role}
              className="flex h-full flex-col rounded-3xl border p-6 shadow-lg backdrop-blur transition duration-200 hover:-translate-y-1"
              style={{
                borderColor: "var(--border)",
                backgroundColor: "var(--card-bg)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--border-strong)"
                e.currentTarget.style.backgroundColor = "var(--card-bg-hover)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)"
                e.currentTarget.style.backgroundColor = "var(--card-bg)"
              }}
            >
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-xl font-bold text-[var(--text)]">
                  {item.role}
                </h3>
                <span className="text-sm text-[var(--muted)]">
                  {item.date}
                </span>
              </div>

              <p className="mb-1 font-semibold text-[var(--accent)]">
                {item.org}
              </p>

              <p className="mb-4 text-sm leading-7 text-[var(--muted)]">
                {item.description}
              </p>

              <ul className="mb-5 space-y-2 text-sm text-[var(--muted)]">
                {item.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="text-[var(--accent)]">▸</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-wrap gap-2 pt-4">
                {item.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border px-3 py-1 text-xs font-medium text-[var(--muted)]"
                    style={{
                      borderColor: "var(--border)",
                      backgroundColor: "var(--surface)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
