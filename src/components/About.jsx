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
              I'm <strong>Kel</strong>, an aspiring Software Engineer currently pursuing my BSIT degree. 
              I sit at the intersection of frontend elegance and robust backend logic—passionate about creating responsive, user-focused web and mobile interfaces that combine strict functionality with clean design architecture.
            </p>
            <p style={{ ...styles.bioText, marginBottom: "0px" }}>
              Through academic projects and continuous personal engineering, I have honed deep, practical skillsets managing 
              {" "}<strong>React architectures</strong>, native <strong>Java environments</strong>, and relational systems like <strong>MySQL</strong>. 
              I am highly focused on building clean system integrations, tracking application states smoothly, and engineering intuitive digital solutions.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
