import './App.css';
import './Header.css';
import { HashRouter as Router } from 'react-router-dom';
import { Banner } from "./Banner.jsx";
import Header from './Header';
import Projects from './Projects';
import Skills from './Skills';
import About from './About';
import ScrollProgressBar from './ScrollProgressBar';

function App() {
  return (
    <div>
      <ScrollProgressBar />
      <Router>
        <div>
          <div id="header"><Header /></div>
          <div className="scroll-container">
            <div id="banner" className="snap-section"><Banner /></div>
            <div id="about" className="snap-section"><About /></div>
            <div id="projects" className="snap-section"><Projects /></div>
            <div id="skills" className="snap-section"><Skills /></div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
