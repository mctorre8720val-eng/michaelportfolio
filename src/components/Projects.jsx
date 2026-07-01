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
import "../styles/Projects.css";

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

  return (
    <section id="projects">
      <h2 className="project-heading">Projects</h2>
      <h3 className="project-subheading">
         A collection of projects built using my skills, languages, and tools.
      </h3>

      <div className="project-list">
        {projectData.map((project, index) => (
          <div key={index} className="project-row">
            <div className="project-icon-box">
              {project.icon}
            </div>

            <div className="project-content">
              <h4 className="project-title">{project.title}</h4>
              <p className="project-description">{project.description}</p>
              
              {project.techStack && project.techStack.length > 0 && (
                <div className="project-tech-list">
                  {project.techStack.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="project-tech-item"
                    >
                      <span className="project-tech-icon">
                        {tech.icon}
                      </span>
                      {tech.name}
                    </span>
                  ))}
                </div>
              )}

              <a 
                href={project.link} 
                className="project-link"
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