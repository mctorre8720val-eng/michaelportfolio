import { motion } from "framer-motion";
import "../styles/Achievements.css";

const achievements = [
  {
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    date: "2025",
    image: "/CCNA Introduction to Networks.png",
    description:
      "A strong foundation in networking concepts, IP connectivity, routing fundamentals, and core switching principles.",
    skills: ["Networking", "IPv4", "IPv6", "Routing", "Switching"],
  },
  {
    title: "Programming Essentials in Python",
    issuer: "Cisco Networking Academy",
    date: "2025",
    image: "/PE1.png",
    description:
      "Developed confidence in Python syntax, logic flow, and algorithmic thinking through hands-on coding exercises.",
    skills: ["Python", "Logic", "Algorithms", "Automation"],
  },
  {
    title: "Programming Essentials in Python",
    issuer: "Cisco Networking Academy",
    date: "2026",
    image: "/PE2.png",
    description:
      "Built a solid understanding of structured programming, memory management, and low-level problem solving in Python.",
    skills: ["Python", "Programming", "Memory", "Problem Solving"],
  },
  {
    title: "Endpoint Security",
    issuer: "Cisco Networking Academy",
    date: "2025",
    image: "/Endpoint Security.png",
    description:
      "Explored essential endpoint protection practices, threat awareness, and device-level security hardening strategies.",
    skills: ["Cybersecurity", "Security", "Linux", "Threats"],
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="achievements-section">
      <div className="section-heading">
        <p className="eyebrow">Recognition</p>
        <h2>Achievements & Certifications</h2>
        <p className="section-copy">
          A growing list of milestones that reflect my curiosity, consistency, and commitment to building real-world skills.
        </p>
      </div>

      <div className="featured-showcase">
        {achievements.map((achievement, index) => {
          const isReversed = index % 2 === 1;

          return (
            <motion.article
              key={achievement.title}
              className={`achievement-feature ${isReversed ? "reversed" : ""}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.05 }}
              whileHover={{ y: -6, scale: 1.01 }}
            >
              <div className="achievement-media">
                <div className="achievement-frame">
                  <div className="achievement-toolbar">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="achievement-image-shell">
                    <img src={achievement.image} alt={`${achievement.title} certificate`} />
                  </div>
                </div>
              </div>

              <div className="achievement-panel">
                <p className="featured-label">Featured Achievement</p>
                <h3>{achievement.title}</h3>

                <div className="achievement-meta">
                  <span>{achievement.issuer}</span>
                  <span>{achievement.date}</span>
                </div>

                {achievement.description ? <p className="featured-description">{achievement.description}</p> : null}

                {achievement.skills?.length ? (
                  <div className="tech-stack">
                    {achievement.skills.map((skill) => (
                      <span key={skill} className="tech-chip">
                        {skill}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
