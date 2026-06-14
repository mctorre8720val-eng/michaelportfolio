export default function Navbar() {
  return (
    <nav>
    <div className="logo" style={{ marginLeft: "200px", fontSize: "24px", fontWeight: "bold" }} >
        <span style={{ color: "#3b82f6" }}>SWE</span> Michael
    </div>

      <ul style={{ marginRight: "200px" }}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><button className="btn">Resume</button></li>
      </ul>
    </nav>
  );
}