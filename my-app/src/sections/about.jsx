import {
  SiJavascript,
  SiReact,
  SiPython,
  SiCplusplus,
  SiHtml5,
  SiTailwindcss,
  SiGit,
} from "react-icons/si"

import { FaCss3Alt, FaJava } from "react-icons/fa"

const educationItems = [
  "University of Illinois Urbana-Champaign",
  "B.S. in Computer Science",
  "Expected Graduation: December 2026",
  "GPA: 3.53",
]

const technicalGroups = [
  {
    label: "Languages",
    items: ["Java", "Python", "C++", "JavaScript"],
  },
  {
    label: "Frontend",
    items: ["React", "HTML/CSS", "Tailwind CSS"],
  },
  {
    label: "Tools",
    items: ["Git", "GitHub", "Vite"],
  },
  {
    label: "Backend",
    items: ["Flask"],
  },
]

const techStack = [
  { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Java", icon: FaJava, color: "#F89820" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "C++", icon: SiCplusplus, color: "#5C8DBC" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Git", icon: SiGit, color: "#F05032" },
]

function InfoCard({ title, children }) {
  return (
    <article
      className="rounded-3xl border p-6 backdrop-blur-md shadow-lg transition duration-300 md:text-xl"
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
      <h3 className="mb-4 text-lg font-bold text-[var(--text)]">
        {title}
      </h3>
      {children}
    </article>
  )
}

function GradientTechCard({ tech }) {
  const Icon = tech.icon

  return (
    <div
      className="rounded-[24px] p-[1.5px] transition duration-300 hover:-translate-y-1"
      style={{
        background: "var(--accent-gradient)",
        boxShadow: "var(--shadow-soft)",
      }}
    >
      <div
        className="rounded-[22px] border px-4 py-5 backdrop-blur-md transition duration-300"
        style={{
          borderColor: "var(--border-soft)",
          backgroundColor: "var(--tech-card-bg)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "var(--tech-card-bg-hover)"
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "var(--tech-card-bg)"
        }}
      >
        <div className="flex h-[100px] flex-col items-center justify-center text-center">
          <Icon
            className="mb-3 text-[1.9rem] sm:text-[2.2rem]"
            style={{ color: tech.color }}
          />

          <p
            className="text-[0.88rem] font-semibold uppercase tracking-[0.16em]"
            style={{ color: "var(--tech-card-text)" }}
          >
            {tech.name}
          </p>
        </div>
      </div>
    </div>
  )
}

function TechVisualBlock() {
  return (
    <article
        className="relative overflow-hidden rounded-3xl border p-6 backdrop-blur-md shadow-lg"
        style={{
            borderColor: "var(--border)",
            backgroundColor: "var(--card-bg)",
        }}
    >
        <div
            className="pointer-events-none absolute inset-0"
            style={{
            background: `
                radial-gradient(circle at 20% 18%, var(--accent-glow-1), transparent 24%),
                radial-gradient(circle at 80% 78%, var(--accent-glow-2), transparent 22%)
            `,
            }}
        />
      <div className="relative z-10 flex h-full flex-col">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[.14em] text-[var(--accent)]">
          Stack
        </p>

        <h3 className="mb-3 text-2xl font-bold tracking-tight text-[var(--text)] md:text-3xl">
          Technologies I work with
        </h3>

        <p className="mb-8 max-w-xl text-sm leading-7 text-[var(--muted)] md:text-[0.96rem]">
          A visual snapshot of the languages and tools I use most often across
          coursework, personal projects, and web builds.
        </p>

        <div className="mt-auto grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {techStack.map((tech) => (
                <GradientTechCard key={tech.name} tech={tech} />
            ))}
        </div>
      </div>
    </article>
  )
}

export default function About() {
  return (
    <section
      id="about"
      aria-label="About"
      className=" py-20 md:py-5 scroll-mt-[72px]"
    >
      <div className="mx-auto w-full max-w-[1300px] px-4">
        <div className="">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[.14em] text-[var(--accent)]">
            About
          </p>

          <h2 className="mb-4 text-3xl font-extrabold tracking-tight md:text-5xl">
            Building practical, polished software
          </h2>

          <p className="text-[1rem] leading-8 text-[var(--muted)] md:text-[1.05rem]">
            I’m a Computer Science student at UIUC with interests in systems,
            web development, and building software that feels thoughtful,
            reliable, and useful. I enjoy projects that challenge me
            technically while also improving the experience for real users.
          </p>
        </div>

        <div className="mt-5 grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          <div className="flex flex-col gap-6">
            <InfoCard title="Education">
              <ul className="space-y-3 text-sm leading-7 text-[var(--muted)] md:text-[0.96rem]">
                {educationItems.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-[2px] text-[var(--accent)]">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </InfoCard>

            <InfoCard title="Languages & Frameworks">
              <div className="space-y-5">
                {technicalGroups.map((group) => (
                  <div key={group.label}>
                    <p
                      className="mb-2 text-sm font-semibold uppercase tracking-[0.12em]"
                      style={{ color: "var(--muted-strong)" }}
                    >
                      {group.label}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border px-3 py-1.5 text-sm text-[var(--muted)] transition duration-200 hover:text-[var(--text)]"
                            style={{
                            borderColor: "var(--border)",
                            backgroundColor: "var(--surface)",
                            }}
                            onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = "var(--border-strong)"
                            e.currentTarget.style.backgroundColor = "var(--surface-2)"
                            }}
                            onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = "var(--border)"
                            e.currentTarget.style.backgroundColor = "var(--surface)"
                            }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </InfoCard>
          </div>

          <TechVisualBlock />
        </div>
      </div>
    </section>
  )
}
