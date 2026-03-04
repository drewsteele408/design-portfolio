import { useState } from 'react';

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  let hideTimeout: ReturnType<typeof setTimeout> | undefined;

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
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
      <button className="hamburger" onClick={toggleMobileMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        {isMobileMenuOpen && (
          <button className="close-btn" onClick={closeMobileMenu}>
            ✕
          </button>
        )}
        <li><a href="/" onClick={closeMobileMenu}>Home</a></li>
        <li 
          className="nav-item-with-dropdown"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <a href=''>Works</a>
          <div className={`dropdown-menu ${showDropdown ? 'visible' : ''}`}>
            <a href="/surf-or-sound" onClick={closeMobileMenu}>Surf or Sound</a>
            <a href="/living-bonsai" onClick={closeMobileMenu}>Living Bonsai</a>
            <a href="/designs" onClick={closeMobileMenu}>Designs</a>
          </div>
        </li>
        <li><a href="/contact" onClick={closeMobileMenu}>Contact</a></li>
      </ul>
    </nav>
  );
}