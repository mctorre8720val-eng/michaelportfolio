import profile from "../assets/profile.jpg";
import Lottie from "lottie-react";
import waveAnim from "../assets/greetings.json";

import {
  FaGithub,
  FaLinkedin,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
} from "react-icons/fa";

import {
  SiGmail,
  SiMysql,
  SiVite,
  SiNpm,
  SiPostman,
} from "react-icons/si";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        
        {/* LEFT SIDE: Image (Cleaned up inline padding to let CSS handle layouts) */}
        <div className="hero-image">
          <img src={profile} alt="profile" />
          <span className="wave">👋</span>
        </div>

        {/* RIGHT SIDE: Text & Info (Removed paddingLeft "250px" so it looks stellar on iPhone viewports) */}
        <div className="hero-text">
          <h2>
            HELLO, I'M <span>KEL</span>
          </h2>

          <h5 className="subtitle">Aspiring Software Engineer</h5>
          <h5 className="subtitle">BSIT Student | Web & Android Developer</h5>

          <p className="description">
            I build responsive web applications using HTML, CSS, JavaScript, and React, with a strong focus on backend development and system integration using Java, MySQL, and Android Studio.
          </p>

          <div className="skills-block">
            <p className="skills-title">Languages & Tools</p>

            <div className="skills-grid">
              <div className="skill-item">
                <FaHtml5 />
                <span>HTML5</span>
              </div>

              <div className="skill-item">
                <FaCss3Alt />
                <span>CSS3</span>
              </div>

              <div className="skill-item">
                <FaJs />
                <span>JavaScript</span>
              </div>

              <div className="skill-item">
                <FaReact />
                <span>React</span>
              </div>

              <div className="skill-item">
                <FaJava />
                <span>Java</span>
              </div>

              <div className="skill-item">
                <SiMysql />
                <span>MySQL</span>
              </div>

              <div className="skill-item">
                <SiVite />
                <span>Vite</span>
              </div>

              <div className="skill-item">
                <SiNpm />
                <span>npm</span>
              </div>

              <div className="skill-item">
                <SiPostman />
                <span>Postman</span>
              </div>

              <div className="skill-item">
                <FaGithub />
                <span>GitHub</span>
              </div>
            </div>
          </div>

          <p className="contact-label">Contact me</p>

          <div className="social-icons">
            <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
              <FaGithub size={26} />
            </a>

            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
              <FaLinkedin size={26} />
            </a>

            <a href="mailto:yourgmail@gmail.com">
              <SiGmail size={26} />
            </a>
          </div>

          <button
            className="btn"
            onClick={() => {
              document.getElementById("about").scrollIntoView({ behavior: "smooth" });
            }}
          >
            Learn more about Kel
          </button>
        </div>

      </div>
    </section>
  );
}