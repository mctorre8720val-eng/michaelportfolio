import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin, FiMapPin, FiFacebook } from "react-icons/fi";
import "../styles/Contact.css";

const contactLinks = [
  {
    label: "Email",
    value: "kel.dev@email.com",
    href: "mailto:kel.dev@email.com",
    icon: FiMail,
    primary: true,
  },
  {
    label: "GitHub",
    value: "github.com/keldev",
    href: "https://github.com/keldev",
    icon: FiGithub,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/keldev",
    href: "https://linkedin.com/in/keldev",
    icon: FiLinkedin,
  },
  {
    label: "Facebook",
    value: "facebook.com/keldev",
    href: "https://facebook.com/keldev",
    icon: FiFacebook,
  },
  {
    label: "Location",
    value: "Cagayan de Oro, Philippines",
    href: "https://maps.google.com/?q=Cagayan+de+Oro+Philippines",
    icon: FiMapPin,
  },
];

const availabilityMessage = "Currently looking for Internship Opportunities";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <motion.div
        className="contact-shell"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <div className="contact-copy">
          <p className="eyebrow">Get in touch</p>
          <h2>Let&apos;s Connect</h2>
          <p className="contact-description">
            I&apos;m always open to internship opportunities, collaborations, research projects, or simply connecting with fellow developers.
            Feel free to reach out—I&apos;d love to hear from you.
          </p>

          <div className="contact-actions">
            <a href="mailto:kel.dev@email.com" className="contact-primary-btn">
              Send me an Email
            </a>
            <a href="https://github.com/keldev" className="contact-secondary-btn">
              View GitHub
            </a>
            <a href="https://linkedin.com/in/keldev" className="contact-secondary-btn">
              Connect on LinkedIn
            </a>
          </div>

          <div className="availability-badge">
            <span className="availability-dot" />
            {availabilityMessage}
          </div>
        </div>

        <div className="contact-links">
          {contactLinks.map((item) => {
            const Icon = item.icon;

            return (
              <a key={item.label} href={item.href} className={`contact-link-card ${item.primary ? "primary" : ""}`} target="_blank" rel="noreferrer">
                <div className="contact-link-icon">
                  <Icon />
                </div>
                <div>
                  <p className="contact-link-label">{item.label}</p>
                  <p className="contact-link-value">{item.value}</p>
                </div>
              </a>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}