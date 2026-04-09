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

const techColumns = [
  [
    { name: "HTML", icon: SiHtml5, color: "#E34F26" },
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "C++", icon: SiCplusplus, color: "#5C8DBC" },
  ],
  [
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
  ],
  [
    { name: "Java", icon: FaJava, color: "#F89820" },
    { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Git", icon: SiGit, color: "#F05032" },
  ],
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
    <article className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur shadow-lg transition duration-300 hover:border-white/20 hover:bg-white/[0.07]">
      <h3 className="mb-4 text-lg font-bold text-[var(--text)] md:text-xl">
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
      className="rounded-[24px] p-[1.5px] shadow-[0_0_0_1px_rgba(255,255,255,0.03)] transition duration-300 hover:-translate-y-1"
      style={{ background: "var(--accent-gradient)" }}
    >
      <div className="rounded-[22px] border border-white/5 bg-[#0b1120]/90 px-4 py-5 backdrop-blur-sm transition duration-300 hover:bg-[#0d1428]/95">
        <div className="flex h-[100px] flex-col items-center justify-center text-center">
          <Icon
            className="mb-3 text-[1.9rem] sm:text-[2.2rem]"
            style={{ color: tech.color }}
          />

          <p className="text-[0.88rem] font-semibold uppercase tracking-[0.16em] text-white/90">
            {tech.name}
          </p>
        </div>
      </div>
    </div>
  )
}

function TechVisualBlock() {
  return (
    <article className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur shadow-lg">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(122,162,255,0.10),transparent_24%),radial-gradient(circle_at_80%_78%,rgba(122,162,255,0.07),transparent_22%)]" />

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
      className=" py-20 md:py-24"
    >
      <div className="mx-auto w-full max-w-[1300px] px-4">
        <div className="max-w-4xl">
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

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
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
                    <p className="mb-2 text-sm font-semibold uppercase tracking-[0.12em] text-white/70">
                      {group.label}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-[var(--muted)] transition duration-200 hover:border-white/20 hover:bg-white/[0.08] hover:text-[var(--text)]"
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
