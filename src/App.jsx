import { Banner } from "./Banner.jsx"
import './App.css'
import './Header.css'
import Header from './Header';
import Projects from './Projects';
import Skills from './Skills';
import About from './About';

function App() {

  return (
    <div>
      <div id="banner"><Banner /></div>
      <div id="header"><Header /></div>
      <div id="about"><About /></div>
      <div id="projects"><Projects /></div>
      <div id="skills"><Skills /></div>
    </div>
  )
}

export default App
