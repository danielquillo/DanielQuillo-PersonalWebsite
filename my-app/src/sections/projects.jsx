import { useMemo, useState } from "react"
import SpringRainSC from "../assets/SpringRainSC.png"
import TechTeamSC from "../assets/TechTeamSC.png"

const PROJECTS = [
  {
    title: "SHPE Tech Team Website",
    image: TechTeamSC,
    shortDescription:
      "Developed and maintained a website for SHPE Tech to improve usability, visibility, and engagement.",
    fullDescription:
      "Built and maintained the SHPE Tech website using Flask, HTML, CSS, and JavaScript. The project focused on improving user experience, clearer information structure, and a stronger digital presence for the organization.",
    tech: ["Flask", "JavaScript", "HTML", "CSS"],
    links: [
      { label: "GitHub", href: "https://github.com/SHPE-Tech-Team/SHPE_Website" },
      { label: "Live Site", href: "https://shpe-website-ten.vercel.app/" },
    ],
  },
  {
    title: "Spring Rain Website",
    image: SpringRainSC,
    shortDescription:
      "Created a responsive website to showcase Spring Rain’s services, mission, and community presence.",
    fullDescription:
      "Designed and developed a responsive website for Spring Rain using Flask, HTML, CSS, and JavaScript. The site was built to communicate the organization’s identity clearly while staying accessible across devices.",
    tech: ["Flask", "Responsive Design", "JavaScript", "HTML/CSS"],
    links: [
      { label: "GitHub", href: "https://github.com/danielquillo/SpringRain" },
      { label: "Live Site", href: "https://springrainlawn.com/" },
    ],
  },
]

function ProjectModal({ project, onClose }) {
  if (!project) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4"
      style={{ backgroundColor: "var(--overlay)" }}
      onClick={onClose}
      aria-hidden="true"
    >
      <div
        className="relative w-full max-w-3xl rounded-3xl border p-6 shadow-2xl md:p-8"
        style={{
          borderColor: "var(--border)",
          backgroundColor: "var(--bg-2)",
        }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-2xl border text-2xl text-[var(--text)] transition"
          style={{
            borderColor: "var(--button-secondary-border)",
            backgroundColor: "var(--surface)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "var(--button-secondary-bg-hover)"
            e.currentTarget.style.borderColor = "var(--button-secondary-border-strong)"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "var(--surface)"
            e.currentTarget.style.borderColor = "var(--button-secondary-border)"
          }}
          aria-label="Close project details"
        >
          ×
        </button>

        <div
          className="mb-6 overflow-hidden rounded-2xl border"
          style={{
            borderColor: "var(--border)",
            backgroundColor: "var(--image-frame)",
          }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="h-56 w-full object-cover md:h-72"
          />
        </div>

        <h3
          id="project-modal-title"
          className="mb-3 text-3xl font-extrabold tracking-tight text-[var(--text)]"
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
              className="rounded-full border px-3 py-1 text-sm font-medium text-[var(--muted)]"
              style={{
                borderColor: "var(--border)",
                backgroundColor: "var(--surface)",
              }}
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
              className="rounded-full border px-5 py-2 font-semibold text-[var(--text)] transition hover:-translate-y-0.5 hover:text-[var(--accent)]"
              style={{
                borderColor: "var(--button-secondary-border)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--button-secondary-bg-hover)"
                e.currentTarget.style.borderColor = "var(--accent)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent"
                e.currentTarget.style.borderColor = "var(--button-secondary-border)"
              }}
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
      <section id="projects" aria-label="Projects" className="py-20">
        <div className="mx-auto w-full max-w-[1300px] px-4">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[.14em] text-[var(--accent)]">
            Projects
          </p>

          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-[var(--text)] md:text-4xl">
            Things I’ve built
          </h2>

          <p className="mb-10 leading-8 text-[var(--muted)]">
            A selection of projects that reflect my interests in software
            development, systems, web design, and building tools with real user
            value.
          </p>

          <div className="grid gap-8 lg:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border shadow-lg transition duration-200 hover:-translate-y-1"
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
                <div className="overflow-hidden border-b" style={{ borderColor: "var(--border)" }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-56 w-full object-cover transition duration-300 group-hover:scale-[1.03] md:h-64"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6 backdrop-blur">
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
                        className="rounded-full border px-3 py-1 text-xs font-medium text-[var(--muted)]"
                        style={{
                          borderColor: "var(--border)",
                          backgroundColor: "var(--surface)",
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center gap-3 pt-2">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="rounded-full px-4 py-2 text-sm font-semibold transition hover:-translate-y-0.5"
                      style={{
                        backgroundColor: "var(--accent)",
                        color: "var(--button-primary-text)",
                      }}
                    >
                      View Details
                    </button>

                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border px-4 py-2 text-sm font-semibold text-[var(--text)] transition"
                        style={{
                          borderColor: "var(--button-secondary-border)",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "var(--button-secondary-bg-hover)"
                          e.currentTarget.style.borderColor = "var(--button-secondary-border-strong)"
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "transparent"
                          e.currentTarget.style.borderColor = "var(--button-secondary-border)"
                        }}
                      >
                        {link.label}
                      </a>
                    ))}
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
