import { 
  FaVideo, 
  FaClinicMedical, 
  FaBookReader, 
  FaAndroid, 
  FaJava, 
  FaDatabase, 
  FaGithub,
  FaSchool
} from "react-icons/fa";

import {
  FaReact,
  FaNodeJs
} from "react-icons/fa6";

import { 
  SiOpencv, 
  SiMysql,
  SiPhp,
  SiXampp,
  SiFirebase,
  SiExpress,
} from "react-icons/si";

export default function Projects() {
  const projectData = [
    {
  title: "Dormly",
  description: "Dormly is a dormitory rating and discovery platform designed to help students find, compare, and share experiences about dormitories through reviews and ratings.",
  buttonText: "Learn More about Dormly (WIP)",
  link: "https://dormly-nu.vercel.app/",
  icon: <FaSchool />,
  techStack: [
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "GitHub", icon: <FaGithub /> },
  ]
},
    {
      title: "RehabCam",
      description: "RehabCam is a system designed to assist rehabilitation patients by using camera-based tracking to monitor movements and help ensure proper exercise form during recovery",
      buttonText: "Learn More about RehabCam",
      link: "#",
      icon: <FaVideo /> ,
      techStack: [
        { name: "Android", icon: <FaAndroid /> },
        { name: "Java", icon: <FaJava /> },
        { name: "OpenCV", icon: <SiOpencv /> },
        { name: "MySQL", icon: <FaDatabase /> },
        { name: "GitHub", icon: <FaGithub /> },
      ]
    },
    {
      title: "Clinic Room Reservation System",
      description: "A desktop application built using Java Swing (NetBeans) that manages clinic room availability and reservations, with a UI system for handling room status.",
      buttonText: "Learn More about Clinic Room Reservation System",
      link: "#",
      icon: <FaClinicMedical /> ,
      techStack: [
        { name: "Java Swing", icon: <FaJava /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "XAMPP", icon: <SiXampp /> },
      ]
    },
    {
      title: "OLFU Library System",
      description: "A library management system developed for OLFU that helps manage book records, borrowing/returning processes, and user transactions efficiently.",
      buttonText: "Learn More about OLFU Library System",
      link: "#",
      icon: <FaBookReader />,
      techStack: [
        { name: "PHP", icon: <SiPhp /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "GitHub", icon: <FaGithub /> },
      ]
    }
  ];

  const styles = {
    heading: {
      fontSize: "2.5rem",
      marginBottom: "8px",
      fontWeight: "800",
    },
    subHeading: {
      fontSize: "1rem",
      color: "#9ca3af", 
      marginBottom: "48px",
      maxWidth: "600px",
      lineHeight: "1.5",
    },
    projectRow: {
      display: "flex",
      flexWrap: "wrap", 
      alignItems: "center",
      gap: "30px", 
      padding: "40px 0",
      borderBottom: "1px solid var(--border-secondary)",
    },
    iconContainer: {
      flex: "1 1 120px", 
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "3.5rem", 
      height: "auto",
      color: "var(--accent)", 
    },
    contentContainer: {
      flex: "1 1 340px", 
      width: "100%",
    },
    projectTitle: {
      fontSize: "1.75rem",
      fontWeight: "bold",
      marginBottom: "12px",
      color: "#ffffff",
    },
    projectDescription: {
      color: "#d1d5db", 
      fontSize: "0.95rem",
      lineHeight: "1.7",
      whiteSpace: "pre-line",
      marginBottom: "20px",
    },
    button: {
      display: "inline-block",
      padding: "10px 20px",
      border: "1.5px solid var(--accent)", 
      borderRadius: "10px", 
      backgroundColor: "transparent",
      color: "var(--accent)",
      fontWeight: "600",
      fontSize: "0.9rem",
      textDecoration: "none",
      cursor: "pointer",
      transition: "0.3s",
    }
  };

  return (
    <section id="projects">
      <h2 style={styles.heading}>Projects</h2>
      <h3 style={styles.subHeading}>
         A collection of projects built using my skills, languages, and tools.
      </h3>

      <div className="project-list">
        {projectData.map((project, index) => (
          <div 
            key={index} 
            style={{ 
              ...styles.projectRow,
              borderBottom: index === projectData.length - 1 ? "none" : styles.projectRow.borderBottom 
            }}
          >
            <div className="project-icon-box" style={styles.iconContainer}>
              {project.icon}
            </div>

            <div style={styles.contentContainer}>
              <h4 style={styles.projectTitle}>{project.title}</h4>
              <p style={styles.projectDescription}>{project.description}</p>
              
              {project.techStack && project.techStack.length > 0 && (
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "24px" }}>
                  {project.techStack.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: "6px 12px",
                        backgroundColor: "rgba(255, 255, 255, 0.03)",
                        border: "1px solid var(--border-secondary)",
                        borderRadius: "8px",
                        fontSize: "0.8rem",
                        color: "#d1d5db"
                      }}
                    >
                      <span style={{ color: "var(--accent)", display: "flex", alignItems: "center" }}>
                        {tech.icon}
                      </span>
                      {tech.name}
                    </span>
                  ))}
                </div>
              )}

              <a 
                href={project.link} 
                style={styles.button}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(59, 130, 246, 0.08)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {project.buttonText}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}