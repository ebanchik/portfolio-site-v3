import './Projects.css';
import { useState } from 'react';
import Modal from './Modal';

export function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = (area) => {
    switch(area) {
      case 'Area 1':
        setIsModalOpen(true);
        break;
      default:
        alert(`Clicked on area: ${area}`);
        break;
    }
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
          style={{ position: 'absolute', top: '48%', left: '45%', width: '35%', height: '13%' }}
          onClick={() => handleClick('Area 2')}
        ></div>
        <div
          className="interactive-area"
          style={{ position: 'absolute', top: '18%', left: '41%', width: '50%', height: '15%' }}
          onClick={() => handleClick('Area 2')}
        ></div>
        <div
          className="interactive-area"
          style={{ position: 'absolute', top: '63%', left: '14%', width: '65%', height: '15%' }}
          onClick={() => handleClick('Area 2')}
        ></div>
         <Modal isOpen={isModalOpen} close={() => setIsModalOpen(false)}>
        <h2>Modal Content</h2>
        <p>This is the content of the modal for Area 1!</p>
      </Modal>
        
      </div>
    </div>
  );
}

export default Projects;
