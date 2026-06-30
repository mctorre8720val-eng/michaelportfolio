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
              Hi! <strong>I'm Kel</strong>, a fourth-year Information Technology student with a passion for building software that solves real-world problems.
            </p>

            <p style={styles.bioText}>
              My interest in programming started when my family bought our first computer while I was in grade school. What began as simple curiosity—exploring software, playing games, and wondering how everything worked—eventually grew into a passion for technology and software development.
            </p>

            <p style={{ ...styles.bioText, marginBottom: "0px" }}>
              Today, I enjoy building modern web and mobile applications that combine clean design with reliable functionality. Through academic and personal projects, I've gained hands-on experience with <strong>React</strong>, <strong>Node.js</strong>, <strong>Express</strong>, <strong>Flutter</strong>, <strong>Java</strong>, and <strong>MySQL</strong>. Technology is constantly evolving, and I enjoy learning alongside it. Whether I'm building applications or exploring emerging technologies like artificial intelligence, I'm always looking for opportunities to grow as a developer and create software that makes a positive impact.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
