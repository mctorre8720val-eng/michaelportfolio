export default function Projects() {
  // Mock data representing your project releases
  const projectData = [
    {
      title: "RehabCam",
      description: "RehabCam is a system designed to assist rehabilitation patients by using camera-based tracking to monitor movements and help ensure proper exercise form during recovery",
      buttonText: "Check RehabCam",
      link: "#",
      icon: "⚡" 
    },
    {
      title: "Clinic Room Reservation System",
      description: "A desktop application built using Java Swing (NetBeans) that manages clinic room availability and reservations, with a UI system for handling room status.",
      buttonText: "Get Clinic Room Reservation System",
      link: "#",
      icon: "🗼"
    },
    {
      title: "OLFU Library System",
      description: "A library management system developed for OLFU that helps manage book records, borrowing/returning processes, and user transactions efficiently.",
      buttonText: "Get OLFU Library System",
      link: "#",
      icon: "🌐"
    }
  ];

  // Inline styles aligned with your CSS Design System
  const styles = {
    heading: {
      fontSize: "2.5rem",
      marginBottom: "8px",
      fontWeight: "800",
    },
    subHeading: {
      fontSize: "1rem",
      color: "#9ca3af", // Matches your text descriptions color for dark sections
      marginBottom: "48px",
      maxWidth: "600px",
      lineHeight: "1.5",
    },
    projectRow: {
      display: "flex",
      alignItems: "center",
      gap: "40px",
      padding: "40px 0",
      borderBottom: "1px solid var(--border-secondary)",
    },
    iconContainer: {
      flex: "0 0 200px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "4rem", 
      height: "150px",
    },
    contentContainer: {
      flex: "1",
      maxWidth: "600px",
    },
    projectTitle: {
      fontSize: "1.75rem",
      fontWeight: "bold",
      marginBottom: "12px",
      color: "#ffffff",
    },
    projectDescription: {
      color: "#d1d5db", // Leverages the light text for your dark sections
      fontSize: "0.95rem",
      lineHeight: "1.7",
      whiteSpace: "pre-line",
      marginBottom: "20px",
    },
    button: {
      display: "inline-block",
      padding: "10px 20px",
      border: "1.5px solid var(--accent)", // Integrates your primary blue accent
      borderRadius: "10px", // Maintains consistency with your .btn and .card styles
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
              // Strips away the bottom border on the very last project item
              borderBottom: index === projectData.length - 1 ? "none" : styles.projectRow.borderBottom 
            }}
          >
            {/* Left Column: Visual Vector Graphic / Icon Placeholders */}
            <div style={styles.iconContainer}>
              {project.icon}
            </div>

            {/* Right Column: Descriptions & Action CTAs */}
            <div style={styles.contentContainer}>
              <h4 style={styles.projectTitle}>{project.title}</h4>
              <p style={styles.projectDescription}>{project.description}</p>
              <a 
                href={project.link} 
                style={styles.button}
                // Subtle hover effect setup matching your existing design system
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