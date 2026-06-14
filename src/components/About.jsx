import { 
  FaGraduationCap, 
  FaLaptopCode, 
  FaDatabase, 
  FaProjectDiagram, 
  FaMapMarkerAlt 
} from "react-icons/fa";

export default function About() {
  return (
    <section id="about">
      <h2 style={{textAlign: "center", fontSize: "2.5rem"}}>About Me</h2>

      <div className="card">
        <p>
        I'm Kel, a BSIT student passionate about frontend development, 
        UI/UX design, and building modern web applications. 
        I enjoy creating responsive and user-friendly interfaces that combine functionality with clean design. 
        Through academic projects and personal development,
        I continuously improve my skills in React, JavaScript, Java, 
        and database management while exploring new technologies
        in the field of software development.
        </p>
        <div className="about-icons">
          <br></br>
          <div><FaGraduationCap /> BSIT Student</div>
          <div><FaLaptopCode /> Backend Developer</div>
          <div><FaDatabase /> Database & API Development</div>
          <div><FaProjectDiagram /> System Design & Logic</div>
          <div><FaMapMarkerAlt /> Manila, Philippines</div>
        </div>
      </div>
    </section>
  );
}