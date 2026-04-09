function ContactIcon({ href, label, children }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      aria-label={label}
      className="grid h-[54px] w-[54px] place-items-center rounded-full border-2 bg-transparent text-[var(--text)] transition duration-150 hover:-translate-y-0.5 hover:text-[var(--accent)] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
      style={{
        borderColor: "var(--accent-border-soft)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--accent-border-strong)"
        e.currentTarget.style.backgroundColor = "var(--contact-icon-hover)"
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--accent-border-soft)"
        e.currentTarget.style.backgroundColor = "transparent"
      }}
    >
      {children}
    </a>
  )
}

export default function Contact() {
  return (
    <section
      id="contact"
      aria-label="Contact"
      className="scroll-mt-[72px] py-[clamp(3.25rem,6vw,6.5rem)]"
    >
      <div className="mx-auto w-full max-w-[1300px] px-4">
        <div className="grid items-center gap-[clamp(2rem,6vw,4rem)] md:grid-cols-[1fr_clamp(260px,28vw,360px)] md:grid-areas-[unset]">
          <div>
            <p className="mb-2 text-[clamp(.9rem,1.4vw,1.1rem)] font-bold uppercase tracking-[.14em] text-[var(--muted)]">
              Want to discuss a project or just want to say hi? My inbox is open for
              all.
            </p>

            <h2 className="mb-4 text-[clamp(2.2rem,6vw,3.6rem)] font-extrabold leading-[1.05] tracking-[.01em] text-[var(--text)]">
              Reach Out to me!
            </h2>

            <p className="max-w-[65ch] text-[clamp(1rem,1.5vw,1.1rem)] leading-[1.9] text-[var(--muted)]">
              I’m a Computer Science student at UIUC focused on systems,
              networks, and practical software. I’m currently applying for
              Summer internships. If you’d like to chat or collaborate, feel
              free to reach out anytime—I&apos;d love to connect.
            </p>

            <div className="mt-5 flex gap-[clamp(.6rem,2vw,1rem)]">
              <ContactIcon
                href="https://github.com/danielquillo"
                label="GitHub"
              >
                <svg
                  className="h-7 w-7 fill-current"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                >
                  <path d="M8 .2a8 8 0 0 0-2.53 15.6c.4.07.55-.17.55-.38v-1.33c-2.24.49-2.71-1.08-2.71-1.08-.36-.9-.88-1.14-.88-1.14-.72-.49.05-.48.05-.48.8.06 1.22.83 1.22.83.7 1.2 1.84.85 2.29.65.07-.5.27-.85.5-1.05-1.79-.2-3.67-.9-3.67-4a3.1 3.1 0 0 1 .84-2.16c-.08-.2-.36-1.01.08-2.1 0 0 .68-.22 2.22.83a7.6 7.6 0 0 1 4.04 0c1.54-1.05 2.22-.83 2.22-.83.44 1.09.16 1.9.08 2.1.52.57.84 1.3.84 2.16 0 3.1-1.88 3.8-3.68 4 .28.24.53.72.53 1.47v2.18c0 .21.15.45.55.38A8 8 0 0 0 8 .2Z" />
                </svg>
              </ContactIcon>

              <ContactIcon
                href="https://www.linkedin.com/in/daniel-quillo-a937b5383/"
                label="LinkedIn"
              >
                <svg
                  className="h-7 w-7 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5 2.5 2.5 0 0 1 4.98 3.5ZM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.3c0-1.27-.02-2.9-1.76-2.9-1.77 0-2.04 1.38-2.04 2.8V21H10z" />
                </svg>
              </ContactIcon>

              <ContactIcon href="mailto:dannyq2@illinois.edu" label="Email">
                <svg
                  className="h-7 w-7 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z" />
                </svg>
              </ContactIcon>
            </div>
          </div>

          <div className="order-first grid place-items-center md:order-none">
            <div className="relative mx-auto grid h-[clamp(220px,28vw,280px)] w-[clamp(220px,28vw,280px)] place-items-center rounded-full p-0">
              <img
                src="/headshot.jpg"
                alt="Daniel Quillo headshot"
                className="h-full w-full rounded-full object-cover"
                style={{ backgroundColor: "var(--avatar-bg)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
