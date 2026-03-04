import { useState } from 'react';

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  let hideTimeout: NodeJS.Timeout;

  const handleMouseEnter = () => {
    if (hideTimeout) {
      clearTimeout(hideTimeout);
    }
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    hideTimeout = setTimeout(() => {
      setShowDropdown(false);
    }, 300);
  };

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
        <li><a href="/">Home</a></li>
        <li 
          className="nav-item-with-dropdown"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <a href="/work">Works</a>
          <div className={`dropdown-menu ${showDropdown ? 'visible' : ''}`}>
            <a href="/surf-or-sound">Surf or Sound</a>
            <a href="/living-bonsai">Living Bonsai</a>
            <a href="/designs">Designs</a>
          </div>
        </li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}