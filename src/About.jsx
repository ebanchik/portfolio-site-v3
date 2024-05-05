
import './About.css';

export function About() {
  return (
    <div className="about-container">
      <div className="circle-hover">
        <img className='linkedin-photo' src="../public/linkedin2.png" alt="LinkedIn Profile"/>
      </div>
      <div className="about-text-container">
        <h3 className="about-text">
          Ambitious Web Designer and Developer focusing on crafting 
          engaging, dynamic, and performative web projects. Additional professional in Marketing and Graphic Design compiles a well-rounded skillset to tackle any project, simple or complex.
        </h3>
      </div>
    </div>
  );
}

export default About;
