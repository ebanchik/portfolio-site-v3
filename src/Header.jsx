import './Header.css'; // Ensure this CSS file is in the same directory
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="header">
      <div className="hover-area-left">
        <div className="header-options-left">
          <Link to="/about" style={{ '--delay-in': '0s', '--delay-out': '0.3s' }}>
            <p>ABOUT</p>
          </Link>
          <Link to="/projects" style={{ '--delay-in': '0.1s', '--delay-out': '0.2s' }}>
            <p>WORK</p>
          </Link>
          <Link to="/ff" style={{ '--delay-in': '0.2s', '--delay-out': '0.1s' }}>
            <p>FF</p>
          </Link>
          <Link to="/links" style={{ '--delay-in': '0.3s', '--delay-out': '0s' }}>
            <p>LINKS</p>
          </Link>
        </div>
        <img src="/plus_sign.png" alt="Profile" className="circle-left"/>
      </div>
    </header>
  );
};

export default Header;
