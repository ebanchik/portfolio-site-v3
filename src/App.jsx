import './App.css';
import './Header.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Banner } from "./Banner.jsx";
import Header from './Header';
import Projects from './Projects';
// import Skills from './Skills';
import About from './About';
import ScrollProgressBar from './ScrollProgressBar';

function App() {
  return (
    <div>
    <ScrollProgressBar />
    <Router>
      <div>
        <div id="header"><Header /></div>
        <div id="banner"><Banner /></div>
        <div id="about"><About /></div>
        {/* <div id="skills"><Skills /></div> */}
        <div id="projects"><Projects /></div>
        {/* Add more sections as needed */}
      </div>
    </Router>
    </div>
  );
}

export default App;
