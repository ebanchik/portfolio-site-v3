import './About.css';

export function About() {
  return (
    <div className="about-container">
      <div className="about-text">
        <h3>
          Ambitious Web Designer and Developer focusing on crafting 
          <span className="highlight" style={{ animationDelay: '1.5s' }}> engaging</span>,
          {' '}<span className="cascading" style={{ animationDelay: '2.0s' }}>d</span>
          <span className="cascading" style={{ animationDelay: '2.1s' }}>y</span>
          <span className="cascading" style={{ animationDelay: '2.2s' }}>n</span>
          <span className="cascading" style={{ animationDelay: '2.3s' }}>a</span>
          <span className="cascading" style={{ animationDelay: '2.4s' }}>m</span>
          <span className="cascading" style={{ animationDelay: '2.5s' }}>i</span>
          <span className="cascading" style={{ animationDelay: '2.6s' }}>c</span>, and <span className="shine" style={{ animationDelay: '2.8s' }}> performative</span> web projects. 
          Additional professional in Marketing and Graphic Design compiles a well-rounded 
          skillset to tackle any project, simple or complex.
        </h3>
      </div>
    </div>
  );
}

export default About;
