import { FaDownload } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav>
      {/* Natively inherits responsive desktop alignment classes from your CSS style sheet */}
      <div className="logo" style={{ fontSize: "24px", fontWeight: "bold" }} >
        <span style={{ color: "#3b82f6" }}>SWE</span> Michael
      </div>

      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        {/* Overrode the global .btn { margin-top: 25px } inline to keep vertical layout alignment */}
        <li>
          <a 
            href="/resume.pdf" 
            download="Michael_Resume.pdf" 
            className="btn" 
            style={{ 
              marginTop: "0px", 
              display: "inline-flex", 
              alignItems: "center", 
              justifyContent: "center",
              gap: "8px",
              textDecoration: "none" 
            }}
          >
            <span>Resume</span>
            <FaDownload size={14} style={{ display: "inline-block" }} />
          </a>
        </li> 
      </ul>
    </nav>
  );
}