import './Header.css'; // Ensure this CSS file is in the same directory

export const Header = () => {
  return (
    <header className="header">
      <div className="hover-area-left">
        <div className="header-options-left">
          <p style={{ '--delay-in': '0s', '--delay-out': '0.3s' }}>ABOUT</p>
          <p style={{ '--delay-in': '0.1s', '--delay-out': '0.2s' }}>WORK</p>
          <p style={{ '--delay-in': '0.2s', '--delay-out': '0.1s' }}>FF</p>
          <p style={{ '--delay-in': '0.3s', '--delay-out': '0s' }}>LINKS</p>
        </div>
        <div className="circle-left"></div>
      </div>
    </header>
  );
};

export default Header;