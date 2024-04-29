import './App.css'
import './Header.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Banner } from "./Banner.jsx";
import Header from './Header';
import Projects from './Projects';
import Skills from './Skills';
import About from './About';

function App() {
  return (
    <Router>
      <div>
        <div id="banner"><Banner /></div>
        <div id="header"><Header /></div>
        <Routes>
          <Route path="/" element={<About />} /> {/* Default route */}
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          {/* Add more routes for other pages if needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
