import headshotUrl from "@/assets/headshot.jpeg";
import { Mail, Github, Linkedin, Phone, ArrowUpRight, FileText } from "lucide-react";

const NAV = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const COURSEWORK = [
  "Data Structures & Algorithms",
  "Artificial Intelligence",
  "Data Management",
  "Software Design",
  "HW/SW Interface",
  "Linear Algebra",
  "Foundations of Computing",
  "System & Software Tools",
  "Calculus",
];

type Project = {
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  href: string;
  tone: "sky" | "blush";
};

const PROJECTS: Project[] = [
  {
    title: "mini-git",
    tagline: "Systems · Rust",
    description:
      "A minimal Git implementation built from scratch in Rust — no libgit2, no shelling out. Content-addressable object store (SHA-1 + zlib), a commit DAG, staging index, branches and detached HEAD, LCS-based diffing, and three-way merge with fast-forward and conflict detection.",
    tech: ["Rust", "clap", "SHA-1", "zlib"],
    href: "https://github.com/vasudhanarayanan/mini-git",
    tone: "sky",
  },
  {
    title: "depaudit",
    tagline: "Security tooling · Go",
    description:
      "A Go CLI that scans npm dependency trees for supply-chain risk. Queries the OSV.dev database for known CVEs across the full transitive graph, flags copyleft license conflicts, detects unused dependencies via static import analysis, and ships a CI mode with non-zero exit codes and JSON output.",
    tech: ["Go", "OSV.dev API", "Static analysis", "CI"],
    href: "https://github.com/vasudhanarayanan/depaudit",
    tone: "blush",
  },
  {
    title: "Screen Time Stocks",
    tagline: "Full-stack · Real-time",
    description:
      "Gamifies screen time as a stock portfolio — each app is a ticker whose price fluctuates on usage vs. goals via a capped-volatility price engine. TradingView-style charts, Google OAuth with JWT sessions, WebSocket-powered live leaderboards over invite-code markets, and an iOS Shortcuts API for automated logging.",
    tech: ["React", "Express", "SQLite", "Socket.IO", "Google OAuth"],
    href: "https://github.com/vasudhanarayanan/screen-time-stocks",
    tone: "sky",
  },
  {
    title: "Concert Price & Availability Tracker",
    tagline: "Data pipeline · Analytics",
    description:
      "Daily Ticketmaster ingestion pipeline tracking 1,000+ events. Dagster-orchestrated, idempotent loads into DuckDB, dbt models for price curves and sell-out velocity, surfaced through a Streamlit dashboard.",
    tech: ["Python", "Dagster", "dbt", "DuckDB", "Streamlit"],
    href: "https://github.com/vasudhanarayanan/concert-price-tracker",
    tone: "blush",
  },
  {
    title: "Page Summarizer",
    tagline: "Chrome extension · LLM",
    description:
      "Manifest V3 Chrome extension summarizing webpages in real time with streaming LLM output. Mozilla Readability extraction cuts token usage ~70%. Persistent side panel with multi-turn chat, caching, and cost tracking.",
    tech: ["Chrome Extension", "JavaScript", "OpenAI API"],
    href: "https://github.com/vasudhanarayanan/page-summarizer",
    tone: "sky",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
      <span className="h-px w-8 bg-border" />
      {children}
    </div>
  );
}

export function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* Soft pastel ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div
          className="absolute -top-32 -left-20 h-[420px] w-[420px] rounded-full opacity-60 blur-3xl"
          style={{ background: "var(--sky)" }}
        />
        <div
          className="absolute top-[40%] -right-24 h-[480px] w-[480px] rounded-full opacity-50 blur-3xl"
          style={{ background: "var(--blush)" }}
        />
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-md">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#about" className="font-display text-lg tracking-tight">
            vsn<span className="text-primary">.</span>
          </a>
          <ul className="hidden gap-7 text-sm text-muted-foreground sm:flex">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="transition-colors hover:text-foreground">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-6">
        {/* Hero / About */}
        <section id="about" className="pt-24 pb-28 sm:pt-32">
          <div className="grid items-start gap-12 md:grid-cols-[1fr_0.85fr]">
            <div>
              <p className="text-sm text-muted-foreground">Hi, I'm</p>
              <h1 className="mt-3 font-display text-6xl leading-[1.02] tracking-tight sm:text-7xl md:text-8xl">
                Vasudha <span className="text-foreground">Narayanan</span>
                <br />
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
                I am a computer science student at the University of Washington.&nbsp;I enjoy
                building reliable backend systems, thoughtful data pipelines, and ML tools.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-sky px-5 py-2.5 text-sm font-medium text-foreground transition-opacity hover:opacity-90"
                >
                  Get in touch <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="https://github.com/vasudhanarayanan"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
                >
                  <Github className="h-4 w-4" /> GitHub
                </a>
                <a
                  href="https://linkedin.com/in/vasudhanara"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-sm md:mx-0 md:max-w-none">
              <div className="aspect-[3/4] w-full overflow-hidden rounded-3xl border border-border/60 bg-card shadow-sm">
                <img
                  src={headshotUrl}
                  alt="Vasudha Narayanan professional headshot"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section id="education" className="border-t border-border/60 py-24">
          <SectionLabel>Education</SectionLabel>
          <div className="mt-8 grid gap-10 md:grid-cols-[1fr_1.2fr]">
            <div>
              <h2 className="font-display text-4xl leading-tight">
                University of Washington
              </h2>
              <p className="mt-3 text-muted-foreground">
                B.S. Computer Science · Seattle, WA
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Expected June 2027
              </p>
              <p className="mt-6 text-sm text-muted-foreground">
                2× Software Development Engineer Intern at{" "}
                <span className="text-foreground">Amazon</span> (Summer 2025, Summer 2026).
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Relevant coursework</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {COURSEWORK.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-border bg-card px-3 py-1.5 text-xs text-foreground/80"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="border-t border-border/60 py-24">
          <SectionLabel>Selected projects</SectionLabel>
          <h2 className="mt-6 max-w-2xl font-display text-4xl leading-tight sm:text-5xl">
            Things I've built across software, data, and ML.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {PROJECTS.map((p) => (
              <a
                key={p.title}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card p-7 transition-all hover:-translate-y-0.5"
                style={{ boxShadow: "var(--shadow-soft)" }}
              >
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full opacity-50 blur-2xl transition-opacity group-hover:opacity-80"
                  style={{ background: `var(--${p.tone})` }}
                />
                <div className="relative flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {p.tagline}
                    </p>
                    <h3 className="mt-2 font-display text-2xl leading-snug">
                      {p.title}
                    </h3>
                  </div>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
                <p className="relative mt-4 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                <div className="relative mt-6 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-muted px-2.5 py-1 text-[11px] text-foreground/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="border-t border-border/60 py-28">
          <SectionLabel>Contact</SectionLabel>
          <h2 className="mt-6 max-w-2xl font-display text-5xl leading-tight sm:text-6xl">
            Let's build something{" "}
            <span className="text-foreground">together</span>.&nbsp;
          </h2>
          <p className="mt-6 max-w-xl text-muted-foreground">
            Open to new-grad software engineering, data science, and data engineering roles.&nbsp;
          </p>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            <ContactRow
              icon={<Mail className="h-4 w-4" />}
              label="Email"
              value="vasudhan10@gmail.com"
              href="mailto:vasudhan10@gmail.com"
            />
            <ContactRow
              icon={<Phone className="h-4 w-4" />}
              label="Phone"
              value="425-802-1438"
              href="tel:+14258021438"
            />
            <ContactRow
              icon={<Linkedin className="h-4 w-4" />}
              label="LinkedIn"
              value="in/vasudhanara"
              href="https://linkedin.com/in/vasudhanara"
            />
            <ContactRow
              icon={<Github className="h-4 w-4" />}
              label="GitHub"
              value="@vasudhanarayanan"
              href="https://github.com/vasudhanarayanan"
            />
          </div>
        </section>

        <footer className="flex flex-col items-start justify-between gap-4 border-t border-border/60 py-10 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Vasudha Narayanan</p>
          <p className="flex items-center gap-1.5">
            <FileText className="h-3.5 w-3.5" /> Designed & built with care.
          </p>
        </footer>
      </main>
    </div>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="group flex items-center justify-between rounded-2xl border border-border bg-card px-5 py-4 transition-colors hover:bg-muted"
    >
      <div className="flex items-center gap-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-foreground/70 group-hover:bg-background">
          {icon}
        </span>
        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            {label}
          </p>
          <p className="text-sm text-foreground">{value}</p>
        </div>
      </div>
      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  );
}
