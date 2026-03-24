import { useMemo, useState } from "react"

const PROJECTS = [
  {
    title: "Nonstop Networking (CS 341)",
    image: "/image.jpg",
    shortDescription:
      "Built a non-blocking I/O network stack with epoll/kqueue, focusing on throughput and fairness under load.",
    fullDescription:
      "Implemented a non-blocking networking system for CS 341, focusing on efficient event-driven communication, fairness under load, and scalable I/O handling. This project strengthened my understanding of systems programming, concurrency, and performance tradeoffs.",
    tech: ["C", "Networking", "epoll", "Systems"],
    links: [
      { label: "GitHub", href: "https://github.com/danielquillo" },
    ],
  },
  {
    title: "SHPE Tech Website",
    image: "/shpe-logo.png",
    shortDescription:
      "Developed and maintained a website for SHPE Tech to improve usability, visibility, and engagement.",
    fullDescription:
      "Built and maintained the SHPE Tech website using Flask, HTML, CSS, and JavaScript. The project focused on improving user experience, clearer information structure, and a stronger digital presence for the organization.",
    tech: ["Flask", "JavaScript", "HTML", "CSS"],
    links: [
      { label: "GitHub", href: "https://github.com/danielquillo" },
    ],
  },
  {
    title: "Spring Rain Website",
    image: "/springrain.jpg",
    shortDescription:
      "Created a responsive website to showcase Spring Rain’s services, mission, and community presence.",
    fullDescription:
      "Designed and developed a responsive website for Spring Rain using Flask, HTML, CSS, and JavaScript. The site was built to communicate the organization’s identity clearly while staying accessible across devices.",
    tech: ["Flask", "Responsive Design", "JavaScript", "HTML/CSS"],
    links: [
      { label: "GitHub", href: "https://github.com/danielquillo" },
    ],
  },
]

function ProjectModal({ project, onClose }) {
  if (!project) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4"
      onClick={onClose}
      aria-hidden="true"
    >
      <div
        className="relative w-full max-w-3xl rounded-3xl border border-white/10 bg-[var(--bg-2)] p-6 shadow-2xl md:p-8"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-2xl text-[var(--text)] transition hover:bg-white/10"
          aria-label="Close project details"
        >
          ×
        </button>

        <div className="mb-6 overflow-hidden rounded-2xl border border-white/10 bg-black/20">
          <img
            src={project.image}
            alt={project.title}
            className="h-56 w-full object-cover md:h-72"
          />
        </div>

        <h3
          id="project-modal-title"
          className="mb-3 text-3xl font-extrabold tracking-tight"
        >
          {project.title}
        </h3>

        <p className="mb-5 text-base leading-8 text-[var(--muted)] md:text-lg">
          {project.fullDescription}
        </p>

        <div className="mb-6 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-[var(--muted)]"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[var(--accent)]/40 px-5 py-2 font-semibold text-[var(--text)] transition hover:-translate-y-0.5 hover:bg-white/8 hover:text-[var(--accent)]"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = useMemo(() => PROJECTS, [])

  return (
    <>
      <section
        id="projects"
        aria-label="Projects"
        className="scroll-mt-[72px] py-20"
      >
        {/* max-w-[1100px], change width of section if needed */}
        <div className="mx-auto w-full max-w-[1300px] px-4">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[.14em] text-[var(--accent)]">
            Projects
          </p>

          <h2 className="mb-4 text-3xl font-extrabold tracking-tight md:text-4xl">
            Things I’ve built
          </h2>

          <p className="mb-10 max-w-2xl text-[var(--muted)] leading-8">
            A selection of projects that reflect my interests in software
            development, systems, web design, and building tools with real user
            value.
          </p>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-lg transition duration-200 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]"
              >
                <div className="overflow-hidden border-b border-white/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-48 w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="p-5">
                  <h3 className="mb-2 text-xl font-bold text-[var(--text)]">
                    {project.title}
                  </h3>

                  <p className="mb-4 text-sm leading-7 text-[var(--muted)]">
                    {project.shortDescription}
                  </p>

                  <div className="mb-5 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-[var(--muted)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-[#0f1220] transition hover:-translate-y-0.5"
                    >
                      View Details
                    </button>

                    {project.links[0] && (
                      <a
                        href={project.links[0].href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-[var(--text)] transition hover:bg-white/8"
                      >
                        {project.links[0].label}
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  )
}
