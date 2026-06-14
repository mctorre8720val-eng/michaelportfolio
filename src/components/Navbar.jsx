export default function Navbar() {
  return (
    <nav>
      {/* Removed the hardcoded 300px left margin so it respects global padding */}
      <div className="logo" style={{ fontSize: "24px", fontWeight: "bold" }} >
        <span style={{ color: "#3b82f6" }}>SWE</span> Michael
      </div>

      {/* Removed the hardcoded 200px right margin so it snaps beautifully on mobile */}
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><button className="btn" style={{ marginTop: "0px" }}>Resume</button></li> 
        {/* Note: Overrode the global .btn { margin-top: 25px } here so it aligns vertically with the text */}
      </ul>
    </nav>
  );
}