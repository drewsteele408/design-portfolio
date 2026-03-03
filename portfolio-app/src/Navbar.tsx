export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logo-icon">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L4 10l8 12 8-12z" />
          </svg>
        </span>
      </div>
      <ul className="nav-links">
        <li><a href="/">Studio</a></li>
        <li><a href="/work">Works</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}