import './Projects.css';

export function Projects() {
  const handleClick = (area) => {
    alert(`Clicked on area: ${area}`);
  };

  
  return (
    <div className="project-container">
      <h1 className='projects-title'>PROJECTS</h1>
      <div className="keyboard-container">
        <img className='keyboard' src="../public/keyboard.svg" height="500px" alt="Keyboard"/>
        <div
          className="interactive-area"
          style={{ position: 'absolute', top: '10%', left: '20%', width: '10%', height: '10%' }}
          onClick={() => handleClick('Area 1')}
        ></div>
        <div
          className="interactive-area"
          style={{ position: 'absolute', top: '30%', left: '30%', width: '15%', height: '15%' }}
          onClick={() => handleClick('Area 2')}
        ></div>
        {/* Add more interactive areas as needed */}
      </div>
    </div>
  );
}

export default Projects;
