const aboutCards = [
  {
    title: "Education",
    items: [
      "University of Illinois Urbana-Champaign",
      "B.S. in Computer Science",
      "Expected Graduation: December 2025",
      "GPA: 3.53",
    ],
  },
  {
    title: "Languages & Frameworks",
    items: [
      "C, C++, Java, Python, JavaScript",
      "HTML, CSS, React",
      "Flask, Tailwind CSS, Vite",
      "Git, GitHub, Responsive Design",
    ],
  },
  {
    title: "Interests",
    items: [
      "Systems Programming",
      "Web Development",
      "Building Practical Software",
      "Real-World Client Projects",
    ],
  },
  {
    title: "Beyond Code",
    items: [
      "Involvement with SHPE",
      "Designing and improving user-facing experiences",
      "Learning through hands-on projects",
      "Working out and staying active.",
    ],
  },
]

export default function About() {
  return (
    <section
      id="about"
      aria-label="About"
      className="scroll-mt-[72px] py-20"
    >
        {/* max-w-[1100px], change width of section if needed */}
      <div className="mx-auto w-full max-w-[1300px] px-4">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[.14em] text-[var(--accent)]">
          About
        </p>

        <h2 className="mb-4 text-3xl font-extrabold tracking-tight md:text-4xl">
          A little more about me
        </h2>

        <p className="mb-10 max-w-5xl text-[1rem] leading-8 text-[var(--muted)] md:text-[1.05rem]">
          I’m a Computer Science student at UIUC with interests in systems, web
          development, and building software that feels practical, polished, and
          useful. I enjoy working on projects that push me technically while
          also creating something meaningful for real users.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {aboutCards.map((card) => (
            <article
              key={card.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg transition duration-200 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]"
            >
              <h3 className="mb-4 text-xl font-bold text-[var(--text)]">
                {card.title}
              </h3>

              <ul className="space-y-2 text-sm leading-7 text-[var(--muted)] md:text-[0.95rem]">
                {card.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-[2px] text-[var(--accent)]">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
