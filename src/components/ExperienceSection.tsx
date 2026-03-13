const experiences = [
  {
    role: "Software Developer Intern",
    company: "uClockit HR",
    period: "Sep 2025 – Present",
    type: "Full-time Internship",
    color: "hsl(var(--primary))",
    description: [
      "Architected and delivered 8+ admin portal modules using Vue 3 Composition API and Vuetify, serving as the primary UI layer for an HR SaaS platform with 500+ active users",
      "Engineered subscription lifecycle and billing management UI with REST API integration, handling plan upgrades, downgrades, and webhook-driven status sync",
      "Built real-time analytics dashboards with dynamic charting, filterable data tables, and live polling, reducing manual reporting time for HR teams",
      "Optimized critical API call chains and implemented lazy loading strategies, improving average page load performance by ~35%",
    ],
    tags: ["Vue 3", "Composition API", "Vuetify", "REST APIs", "JavaScript", "Python", "Webhooks", "Performance"],
  },
  {
    role: "AI/Business analytics Teaching assistant",
    company: "RACE",
    period: "Jul 2024 - Present",
    type: "Internship",
    color: "hsl(var(--secondary))",
    description: [
      "Coordinated with mentors, AI/ML program delivery for student cohorts across multiple batches",
      "Guided participants on AI projects, improving delivery quality and engagement",
      "Assisted in designing curricula content for AI fundamentals and hands-on labs from azure certification tranings",
      "Evaluated participant projects and provided structured technical feedback",
    ],
    tags: ["AI/ML", "Program Coordination", "Mentoring", "Python"],
  },
];
const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium mb-3" style={{ color: "hsl(var(--primary))" }}>
            03. Experience
          </p>
          <h2 className="section-heading text-foreground">
            Work <span className="gradient-text">History</span>
          </h2>
          <p className="section-subheading">Where I've built real products that shipped to users</p>
        </div>
        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px"
            style={{ background: "hsl(var(--border))" }}
          />
          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-16">
                {/* Timeline dot */}
                <div
                  className="absolute left-4 top-6 w-4 h-4 rounded-full border-2 -translate-x-1/2"
                  style={{
                    background: "hsl(var(--background))",
                    borderColor: exp.color,
                    boxShadow: `0 0 12px ${exp.color}`,
                  }}
                />
                <div className="glass-card rounded-2xl p-6 hover-lift">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3
                        className="text-lg font-semibold text-foreground"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {exp.role}
                      </h3>
                      <p className="font-medium mt-0.5" style={{ color: exp.color }}>
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-right">
                      <span
                        className="text-xs font-medium px-3 py-1 rounded-full"
                        style={{
                          background: `${exp.color}20`,
                          color: exp.color,
                          border: `1px solid ${exp.color}40`,
                        }}
                      >
                        {exp.period}
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span
                          className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                          style={{ background: exp.color }}
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default ExperienceSection;
