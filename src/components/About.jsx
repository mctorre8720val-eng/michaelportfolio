import { 
  FaGraduationCap, 
  FaLaptopCode, 
  FaDatabase, 
  FaProjectDiagram, 
  FaMapMarkerAlt,
  FaSchool,
  FaHeart
} from "react-icons/fa";

export default function About() {
  const styles = {
    heading: {
      fontSize: "2.5rem",
      fontWeight: "800",
      marginBottom: "30px",
      textAlign: "left", 
    },
    bioText: {
      lineHeight: "1.8",
      fontSize: "1.05rem",
      color: "#d1d5db",
      marginBottom: "20px",
    },
    highlightCard: {
      marginTop: "0", 
      padding: "24px",
    }
  };

  return (
    <section id="about">
      <h2 style={styles.heading}>About Me</h2>
      <p>in this section, you will learn about me, my journey as a BSIT student</p>    
      
      {/* Two-Column Wrapper governed by CSS structure */}
      <div className="about-container" style={{ display: "flex", flexWrap: "wrap", gap: "30px", alignItems: "flex-start" }}>
        
        {/* LEFT COLUMN: Quick Stats. Uses flex-basis so it drops down naturally on mobile */}
        <div className="about-sidebar" style={{ flex: "1 1 280px", width: "100%" }}>
          {/* Re-aligned about-icons setup to play well with your existing grid media queries */}
          <div className="about-icons">
            <div><FaGraduationCap /> <span>BSIT Student</span></div>
            <div><FaSchool /> <span>Our Lady of Fatima University</span></div>
            <div><FaLaptopCode /> <span>Backend Developer</span></div>
            <div><FaDatabase /> <span>Database & APIs</span></div>
            <div><FaProjectDiagram /> <span>System Design</span></div>
            <div><FaMapMarkerAlt /> <span>Manila, Philippines</span></div>
          </div>
        </div>

        {/* RIGHT COLUMN: Professional Narrative */}
        <div className="about-main" style={{ flex: "1 1 400px", width: "100%" }}>
          <div className="card" style={styles.highlightCard}>
          <p style={styles.bioText}>
            Hi! <strong>I'm Kel</strong>, a fourth-year Information Technology student who enjoys creating software and exploring new technologies.
          </p>

          <p style={styles.bioText}>
            My journey in programming started when my family got our first computer while I was in grade school. What began as curiosity—exploring applications, playing games, and wondering how things worked—slowly grew into a passion for software development.
          </p>

          <p style={{ ...styles.bioText, marginBottom: "0px" }}>
            Over the years, I’ve worked on various academic and personal projects, gaining experience in building web and mobile applications using <strong>React</strong>, <strong>Node.js</strong>, <strong>Express</strong>, <strong>Flutter</strong>, <strong>Android Studio</strong>, and <strong>MySQL</strong>. I enjoy combining clean design with functional solutions and continuously learning new tools and technologies. Whether I’m developing applications or exploring emerging fields like artificial intelligence, I’m always looking for ways to improve and create meaningful digital experiences.
          </p>
          </div>
        </div>

      </div>
    </section>
  );
}
