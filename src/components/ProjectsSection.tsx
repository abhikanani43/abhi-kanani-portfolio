const projects = [
  {
    title: "Track My Attendance",
    description:
      "A smart attendance tracking web application that helps students and professionals log, monitor, and analyze their attendance records in real-time. Features include automated percentage calculation, subject-wise tracking, and absence alerts.",
    tags: ["Vue 3", "JavaScript", "REST APIs", "CSS3", "Vuetify"],
    status: "Live",
    links: {
      github: "#",
      demo: "#",
    },
    icon: "📊",
    gradient: "linear-gradient(135deg, hsl(217 91% 60% / 0.15), hsl(185 75% 52% / 0.1))",
    borderColor: "hsl(var(--primary) / 0.3)",
  },
  {
    title: "LLM-based Automated Code Review System",
    description:
      "Multi-model code review pipeline using LLaMA, Gemma, and Mixtral via Groq, delivering automated analysis for code quality, security, and performance bottlenecks - eliminating manual review overhead.",
    tags: ["Streamlit", "Python", "LLaMA", "Gemma", "Mixtral", "Pandas"],
    status: "Live",
    links: {
      github: "#",
      demo: "#",
    },
    icon: "💰",
    gradient: "linear-gradient(135deg, hsl(185 75% 52% / 0.15), hsl(270 60% 60% / 0.1))",
    borderColor: "hsl(var(--secondary) / 0.3)",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6" style={{ background: "hsl(var(--muted) / 0.2)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium mb-3" style={{ color: "hsl(var(--primary))" }}>
            04. Projects
          </p>
          <h2 className="section-heading text-foreground">
            Things I've <span className="gradient-text">Built</span>
          </h2>
          <p className="section-subheading max-w-xl mx-auto">
            Projects that solve real problems and demonstrate scalable frontend engineering
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="glass-card rounded-2xl p-8 hover-lift flex flex-col"
              style={{
                background: project.gradient,
                borderColor: project.borderColor,
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                  style={{ background: "hsl(var(--card))" }}
                >
                  {project.icon}
                </div>
                <div className="flex items-center gap-3">
                  <span
                    className="text-xs font-medium px-2.5 py-1 rounded-full"
                    style={{
                      background: "hsl(142 76% 36% / 0.15)",
                      color: "hsl(142 76% 56%)",
                      border: "1px solid hsl(142 76% 36% / 0.3)",
                    }}
                  >
                    ✦ {project.status}
                  </span>
                </div>
              </div>

              <h3
                className="text-xl font-bold text-foreground mb-3"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {project.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-md font-medium"
                    style={{
                      background: "hsl(var(--muted))",
                      color: "hsl(var(--muted-foreground))",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <a
                  href={project.links.github}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                  Source Code
                </a>
                <a
                  href={project.links.demo}
                  className="flex items-center gap-2 text-sm font-medium transition-colors"
                  style={{ color: "hsl(var(--primary))" }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
