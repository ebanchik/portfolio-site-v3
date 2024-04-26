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
            <p>ABOUT</p>
            <p>WORK</p>
            <p>FF</p>
            <p>LINKS</p>
          </div>
        )}
        <div className="circle-left"></div>
      </div>
    </header>
  );
};

export default Header;
