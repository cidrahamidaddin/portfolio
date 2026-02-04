export default function Navbar({ onToggleTheme }) {
  return (
    <header className="topbar">
      <div className="brand">My Portfolio</div>

      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#skills">Skills</a>
        <a href="#education">Education</a>
        <a href="#languages">Languages</a>
        <a href="#contact">Contact</a>
      </nav>

      <button className="button ghost" type="button" onClick={onToggleTheme}>
        Toggle Theme
      </button>
    </header>
  );
}
