import { useState } from 'react'
import './Header.css'; // Ensure this CSS file is in the same directory

export const Header = () => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <header className="header">
      <div 
        className="hover-area-left" 
        onMouseEnter={() => setIsHovering(true)} 
        onMouseLeave={() => setIsHovering(false)}
      >
        {isHovering && (
          <div className="header-options-left">
            <p style={{ animationDelay: '0s' }}>ABOUT</p>
            <p style={{ animationDelay: '0.1s' }}>WORK</p>
            <p style={{ animationDelay: '0.2s' }}>FF</p>
            <p style={{ animationDelay: '0.3s' }}>LINKS</p>
          </div>
        )}
        <div className="circle-left"></div>
      </div>
    </header>
  );
};

export default Header;
