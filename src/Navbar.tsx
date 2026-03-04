import { useState } from 'react';
import { Link } from 'react-router-dom';

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
        <li><Link to="/" onClick={closeMobileMenu}>Home</Link></li>
        <li 
          className="nav-item-with-dropdown"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span>Works</span>
          <div className={`dropdown-menu ${showDropdown ? 'visible' : ''}`}>
            <Link to="/surf-or-sound" onClick={closeMobileMenu}>Surf or Sound</Link>
            <Link to="/living-bonsai" onClick={closeMobileMenu}>Living Bonsai</Link>
            <Link to="/designs" onClick={closeMobileMenu}>Designs</Link>
          </div>
        </li>
        <li><Link to="/contact" onClick={closeMobileMenu}>Contact</Link></li>
      </ul>
    </nav>
  );
}