import { FaDownload } from "react-icons/fa";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav>
      
      <div className="logo" style={{ fontSize: "24px", fontWeight: "bold" }} >
        <span style={{ color: "#3b82f6" }}>SWE</span> Michael
      </div>

      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#achievements">Achievements</a></li>
        <li><a href="#contact">Contact</a></li>
        
        <li>
          <a 
            href="/resume.pdf" 
            download="Michael_Resume.pdf" 
            className="btn nav-cta"
          >
            <span>Resume</span>
            <FaDownload size={14} style={{ display: "inline-block" }} />
          </a>
        </li> 
      </ul>
    </nav>
  );
}