import { useState } from "react";
import certificateImg from "@/assets/achievement-certificate.jpeg";
import stageImg from "@/assets/achievement-stage.jpeg";

const achievements = [
  {
    title: "Robot development using IOT",
    subtitle: "MD Certificate Ceremony",
    description:
      "Built an IoT-controlled robot with real-time sensor feedback, MQTT-based remote actuation, and PWM motor control. Implemented embedded firmware on ESP32 with interrupt-driven I/O and wireless telemetry over Wi-Fi.",
    image: certificateImg,
    badge: "🏆 Robot development",
    color: "hsl(var(--primary))",
  },
  {
    title: "Best Intern Recognition",
    subtitle: "Annual Recognition Event",
    description:
      "Recognized as Best Intern by RACE among 20+ interns for exceptional contributions and outstanding impact as a AI/Business analytics Teaching assistant.",
    image: stageImg,
    badge: "⭐ Best Intern",
    color: "hsl(var(--secondary))",
  },
];

const AchievementsSection = () => {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="achievements" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium mb-3" style={{ color: "hsl(var(--primary))" }}>
            05. Achievements
          </p>
          <h2 className="section-heading text-foreground">
            Recognition & <span className="gradient-text">Awards</span>
          </h2>
          <p className="section-subheading max-w-xl mx-auto">
            Moments that mark milestones in my professional journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl overflow-hidden hover-lift group"
            >
              {/* Image */}
              <div
                className="relative overflow-hidden cursor-zoom-in"
                onClick={() => setLightbox(achievement.image)}
              >
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "hsl(var(--background) / 0.6)" }}
                >
                  <div
                    className="px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2"
                    style={{
                      background: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                    }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                    View Full Image
                  </div>
                </div>
                {/* Badge overlay */}
                <div className="absolute top-4 left-4">
                  <span
                    className="text-sm font-semibold px-3 py-1.5 rounded-full"
                    style={{
                      background: "hsl(var(--background) / 0.9)",
                      border: `1px solid ${achievement.color}`,
                      color: achievement.color,
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    {achievement.badge}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  className="text-lg font-bold text-foreground mb-1"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {achievement.title}
                </h3>
                <p className="text-sm font-medium mb-3" style={{ color: achievement.color }}>
                  {achievement.subtitle}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "hsl(var(--background) / 0.95)", backdropFilter: "blur(16px)" }}
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 p-2 rounded-full text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={lightbox}
            alt="Achievement"
            className="max-w-full max-h-[85vh] rounded-2xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default AchievementsSection;
