import '../styles/navbar.css';

const Navbar = ({ isDark, onThemeToggle }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-icon">▶</span>
          <span className="logo-text">VideoTube</span>
        </div>

        <button 
          className="theme-toggle"
          onClick={onThemeToggle}
          title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {isDark ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
