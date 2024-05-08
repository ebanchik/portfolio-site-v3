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
          style={{ position: 'absolute', top: '33%', left: '8%', width: '30%', height: '15%' }}
          onClick={() => handleClick('Area 1')}
        ></div>
        <div
          className="interactive-area"
          style={{ position: 'absolute', top: '47%', left: '45%', width: '35%', height: '13%' }}
          onClick={() => handleClick('Area 2')}
        ></div>
        <div
          className="interactive-area"
          style={{ position: 'absolute', top: '20%', left: '41%', width: '50%', height: '15%' }}
          onClick={() => handleClick('Area 2')}
        ></div>
        <div
          className="interactive-area"
          style={{ position: 'absolute', top: '62%', left: '14%', width: '65%', height: '15%' }}
          onClick={() => handleClick('Area 2')}
        ></div>
        
      </div>
    </div>
  );
}

export default Projects;
