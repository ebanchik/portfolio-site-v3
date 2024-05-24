import './App.css';
import './Header.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/" element={<Banner />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
