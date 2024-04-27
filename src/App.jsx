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
      <Banner/>
      <Header/>
      <About/>
      <Projects/>
      <Skills/>
    </div>
  )
}

export default App
