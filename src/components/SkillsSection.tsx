const skillCategories = [
  {
    title: "Frontend",
    icon: "🖥️",
    skills: ["Vue 3", "Vuetify", "Angular", "HTML5", "CSS3", "TypeScript", "JavaScript"],
  },
  {
    title: "Backend & APIs",
    icon: "⚙️",
    skills: ["Python", "Java", "REST APIs", "Axios"],
  },
  {
    title: "AI & Tools",
    icon: "🤖",
    skills: ["CodeWhisperer", "Codex", "GenAI Tools"],
  },
  {
    title: "DevOps & Tooling",
    icon: "🛠️",
    skills: ["Git", "Docker", "VS Code"],
  },
];

const SkillBadge = ({ skill }: { skill: string }) => (
  <span
    className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 cursor-default"
    style={{
      background: "hsl(var(--primary) / 0.1)",
      border: "1px solid hsl(var(--primary) / 0.25)",
      color: "hsl(var(--foreground))",
    }}
  >
    {skill}
  </span>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6" style={{ background: "hsl(var(--muted) / 0.3)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium mb-3" style={{ color: "hsl(var(--primary))" }}>
            02. Skills
          </p>
          <h2 className="section-heading text-foreground">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="section-subheading max-w-xl mx-auto">
            Technologies I've worked with across frontend, backend, and AI tooling
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="glass-card rounded-2xl p-6 hover-lift"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="font-semibold text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <SkillBadge key={skill} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
