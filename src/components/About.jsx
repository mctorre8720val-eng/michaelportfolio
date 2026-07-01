import { 
  FaGraduationCap, 
  FaLaptopCode, 
  FaDatabase, 
  FaProjectDiagram, 
  FaMapMarkerAlt,
  FaSchool
} from "react-icons/fa";
import "../styles/About.css";

export default function About() {
  return (
    <section id="about">
      <h2 className="about-heading">About Me</h2>
      <p>in this section, you will learn about me, my journey as a BSIT student</p>    
      
      <div className="about-container">
        
        <div className="about-sidebar">
          <div className="about-icons">
            <div><FaGraduationCap /> <span>BSIT Student</span></div>
            <div><FaSchool /> <span>Our Lady of Fatima University</span></div>
            <div><FaLaptopCode /> <span>Backend Developer</span></div>
            <div><FaDatabase /> <span>Database & APIs</span></div>
            <div><FaProjectDiagram /> <span>System Design</span></div>
            <div><FaMapMarkerAlt /> <span>Manila, Philippines</span></div>
          </div>
        </div>

        <div className="about-main">
          <div className="card about-highlight-card">
          <p className="about-bio-text">
            Hi! <strong>I'm Kel</strong>, a fourth-year Information Technology student who enjoys creating software and exploring new technologies.
          </p>

          <p className="about-bio-text">
            My journey in programming started when my family got our first computer while I was in grade school. What began as curiosity—exploring applications, playing games, and wondering how things worked—slowly grew into a passion for software development.
          </p>

          <p className="about-bio-text" style={{ marginBottom: "0px" }}>
            Over the years, I’ve worked on various academic and personal projects, gaining experience in building web and mobile applications using <strong>React</strong>, <strong>Node.js</strong>, <strong>Express</strong>, <strong>Flutter</strong>, <strong>Android Studio</strong>, and <strong>MySQL</strong>. I enjoy combining clean design with functional solutions and continuously learning new tools and technologies. Whether I’m developing applications or exploring emerging fields like artificial intelligence, I’m always looking for ways to improve and create meaningful digital experiences.
          </p>
          </div>
        </div>

      </div>
    </section>
  );
}
