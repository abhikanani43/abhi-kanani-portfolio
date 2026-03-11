const AboutSection = () => {
  const stats = [
    { label: "Internships", value: "2+" },
    { label: "Projects Built", value: "10+" },
    { label: "Technologies", value: "15+" },
    { label: "Years of Experience", value: "1+" },
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-sm font-medium mb-3" style={{ color: "hsl(var(--primary))" }}>
              01. About Me
            </p>
            <h2 className="section-heading text-foreground mb-6">
              Passionate about crafting{" "}
              <span className="gradient-text">exceptional experiences</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm an undergraduate developer pursuing my BCA at REVA University (2023–2026), 
                with hands-on experience building responsive, production-ready web applications 
                using <span className="text-foreground font-medium">Vue.js, JavaScript, HTML, CSS</span>, and Python.
              </p>
              <p>
                I've interned as a Software Developer at uClockit HR and as an AI/Business analytics Teaching assistant at RACE, 
                where I bridged frontend engineering with emerging AI tooling using 
                <span className="text-foreground font-medium"> CodeWhisperer, Codex, and GenAI tools</span> to 
                accelerate product development.
              </p>
              <p>
                I bring strong foundations in REST APIs, performance-driven UI architecture, 
                and a genuine enthusiasm for building tools that make a real difference.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass-card rounded-2xl p-6 hover-lift text-center"
              >
                <p
                  className="text-4xl font-bold mb-1"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", color: "hsl(var(--primary))" }}
                >
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
