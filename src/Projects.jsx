import { useState } from 'react';
import Modal from './Modal';
import './Projects.css';

export function Projects() {
  const [modal, setModal] = useState({ isOpen: false, content: '' });

  const handleClick = (area) => {
    switch (area) {
      case 'Area 1':
        setModal({ isOpen: true, content: 'text' });
        break;
      case 'Area 3':
        setModal({ isOpen: true, content: 'video' });
        break;
      default:
        alert(`Clicked on area: ${area}`);
        break;
    }
  };

  const closeModal = () => {
    setModal({ isOpen: false, content: '' });
  };

  const renderModalContent = () => {
    if (modal.content === 'video') {
      return (
        <>
          <video width="90%" height="auto" controls>
            <source src="../public/armoire-walkthrough.mov" type="video/mov"/>
            Your browser does not support the video tag.
          </video>
        </>
      );
    } else {
      return (
        <>
          <h2>Modal Content</h2>
          <p>This is the content of the modal for Area 1!</p>
        </>
      );
    }
  };

  return (
    <div className="project-container">
      <h1 className='projects-title'>PROJECTS</h1>
      <div className="keyboard-container">
        <img className='keyboard' src="../public/keyboard.svg" height="500px" alt="Keyboard"/>
        <div className="interactive-area" style={{ position: 'absolute', top: '33%', left: '8%', width: '30%', height: '15%' }} onClick={() => handleClick('Area 1')}></div>
        <div className="interactive-area" style={{ position: 'absolute', top: '48%', left: '45%', width: '35%', height: '13%' }} onClick={() => handleClick('Area 2')}></div>
        <div className="interactive-area" style={{ position: 'absolute', top: '18%', left: '41%', width: '50%', height: '15%' }} onClick={() => handleClick('Area 3')}></div>
        <div className="interactive-area" style={{ position: 'absolute', top: '63%', left: '14%', width: '65%', height: '15%' }} onClick={() => handleClick('Area 4')}></div>
      </div>
      <Modal isOpen={modal.isOpen} close={closeModal}>
        {renderModalContent()}
      </Modal>
    </div>
  );
}

export default Projects;
