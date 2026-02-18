const certifications = [
  {
    title: "Cisco Certified Support Technician",
    subtitle: "Cybersecurity",
    issuer: "Cisco",
    icon: "🔐",
    color: "hsl(var(--primary))",
  },
  {
    title: "Robot Development Certification",
    subtitle: "Robotics & Automation",
    issuer: "Certified Program",
    icon: "🤖",
    color: "hsl(var(--secondary))",
  },
];

const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "REVA University",
    period: "2023 – 2026",
    location: "Bangalore, India",
    status: "Ongoing",
  },
];

const CertEducationSection = () => {
  return (
    <>
      {/* Certifications */}
      <section id="certifications" className="py-20 px-6" style={{ background: "hsl(var(--muted) / 0.2)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-medium mb-3" style={{ color: "hsl(var(--primary))" }}>
              06. Certifications
            </p>
            <h2 className="section-heading text-foreground">
              Licenses & <span className="gradient-text">Certifications</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {certifications.map((cert) => (
              <div key={cert.title} className="glass-card rounded-2xl p-6 hover-lift flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{
                    background: `${cert.color}15`,
                    border: `1px solid ${cert.color}30`,
                  }}
                >
                  {cert.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm leading-tight mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-medium mb-1" style={{ color: cert.color }}>
                    {cert.subtitle}
                  </p>
                  <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-medium mb-3" style={{ color: "hsl(var(--primary))" }}>
              07. Education
            </p>
            <h2 className="section-heading text-foreground">
              Academic <span className="gradient-text">Background</span>
            </h2>
          </div>

          {education.map((edu) => (
            <div
              key={edu.degree}
              className="glass-card rounded-2xl p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6"
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
                style={{
                  background: "hsl(var(--primary) / 0.1)",
                  border: "1px solid hsl(var(--primary) / 0.3)",
                }}
              >
                🎓
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                  <div>
                    <h3
                      className="text-lg font-bold text-foreground"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {edu.degree}
                    </h3>
                    <p className="font-medium mt-0.5" style={{ color: "hsl(var(--primary))" }}>
                      {edu.institution}
                    </p>
                  </div>
                  <span
                    className="text-xs font-medium px-3 py-1 rounded-full"
                    style={{
                      background: "hsl(142 76% 36% / 0.15)",
                      color: "hsl(142 76% 56%)",
                      border: "1px solid hsl(142 76% 36% / 0.3)",
                    }}
                  >
                    {edu.status}
                  </span>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-1">
                  <span className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {edu.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {edu.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CertEducationSection;
