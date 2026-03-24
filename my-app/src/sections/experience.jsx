const EXPERIENCE = [
  {
    role: "Web Developer",
    org: "Spring Rain Landscaping",
    date: "2025 – Present", // change later
    description:
      "Designed and developed a responsive website for a local landscaping and irrigation business to improve their online presence and customer engagement.",
    bullets: [
      "Built and deployed a full website using Flask, HTML, CSS, and JavaScript",
      "Collaborated directly with the client to understand requirements and iterate on design",
      "Improved accessibility and responsiveness across devices",
      "Delivered a production-ready solution used by a real business",
    ],
    tech: ["Flask", "JavaScript", "HTML/CSS", "Responsive Design"],
  },
  {
    role: "Member / [Your Role Here]",
    org: "Society of Hispanic Professional Engineers (SHPE)",
    date: "2024 – Present", // update later
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
    <section
      id="experience"
      aria-label="Experience"
      className="scroll-mt-[72px] py-20"
    >
        {/* max-w-[1100px], change width of section if needed */}
      <div className="mx-auto w-full max-w-[1300px] px-4">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[.14em] text-[var(--accent)]">
          Experience
        </p>

        <h2 className="mb-4 text-3xl font-extrabold tracking-tight md:text-4xl">
          What I’ve worked on
        </h2>

        <p className="mb-10 max-w-2xl text-[var(--muted)] leading-8">
          A combination of real-world development experience, client work, and
          professional involvement that reflects my growth as a developer.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {EXPERIENCE.map((item) => (
            <article
              key={item.role}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg transition duration-200 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]"
            >
              {/* Header */}
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

              {/* Bullets */}
              <ul className="mb-5 space-y-2 text-sm text-[var(--muted)]">
                {item.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="text-[var(--accent)]">▸</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {item.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-[var(--muted)]"
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
