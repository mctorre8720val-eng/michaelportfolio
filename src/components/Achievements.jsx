import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import ImageModal from "./ImageModal";
import "../styles/Achievements.css";

const achievements = [
  {
    title: "Cisco Certified Network Associate",
    issuer: "Cisco",
    date: "2025",
    image: "/CCNA Introduction to Networks.png",
  },
  {
    title: "Programming Essentials in Python",
    issuer: "Cisco Networking Academy",
    date: "2024",
    image: "/PE1.png",
  },
  {
    title: "Programming Essentials in C",
    issuer: "Cisco Networking Academy",
    date: "2024",
    image: "/PE2.png",
  },
  {
    title: "Endpoint Security",
    issuer: "Cisco Networking Academy",
    date: "2024",
    image: "/Endpoint Security.png",
  },
];

export default function Achievements() {
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const selectedImage = useMemo(() => {
    if (!selectedAchievement) return null;
    return achievements.find((item) => item.title === selectedAchievement.title)?.image || null;
  }, [selectedAchievement]);

  const openAchievement = (achievement, index) => {
    setSelectedAchievement(achievement);
    setActiveIndex(index);
  };

  const closeAchievement = () => setSelectedAchievement(null);

  const showPrev = () => {
    const nextIndex = (activeIndex - 1 + achievements.length) % achievements.length;
    setActiveIndex(nextIndex);
    setSelectedAchievement(achievements[nextIndex]);
  };

  const showNext = () => {
    const nextIndex = (activeIndex + 1) % achievements.length;
    setActiveIndex(nextIndex);
    setSelectedAchievement(achievements[nextIndex]);
  };

  return (
    <section id="achievements" className="achievements-section">
      <div className="section-heading">
        <p className="eyebrow">Recognition</p>
        <h2>Achievements & Certifications</h2>
        <p className="section-copy">
          A growing list of milestones that reflect my curiosity, consistency, and commitment to building real-world skills.
        </p>
      </div>

      <div className="achievements-grid">
        {achievements.map((achievement, index) => (
          <motion.article
            key={achievement.title}
            className="achievement-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: index * 0.06 }}
            whileHover={{ y: -6, scale: 1.01 }}
          >
            <button
              className="achievement-image-button"
              type="button"
              onClick={() => openAchievement(achievement, index)}
              aria-label={`Open ${achievement.title}`}
            >
              <img src={achievement.image} alt={achievement.title} />
            </button>

            <div className="achievement-content">
              <h3>{achievement.title}</h3>
              <p className="achievement-issuer">{achievement.issuer}</p>
              {achievement.date ? <p className="achievement-date">{achievement.date}</p> : null}
            </div>
          </motion.article>
        ))}
      </div>

      <ImageModal
        isOpen={Boolean(selectedAchievement)}
        image={selectedImage}
        title={selectedAchievement?.title}
        currentIndex={activeIndex}
        total={achievements.length}
        showNavigation
        onClose={closeAchievement}
        onPrev={showPrev}
        onNext={showNext}
      />
    </section>
  );
}
