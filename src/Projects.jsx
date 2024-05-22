import { useState } from 'react';
import Modal from './Modal';
import './Projects.css';

export function Projects() {
  const [modal, setModal] = useState({ isOpen: false, content: '' });

  const handleClick = (area) => {
    switch (area) {
      case 'Area 1':
        // Opens a new window to a specified URL when Area 1 is clicked
        window.open('https://main--dima-studio.netlify.app/', '_blank');
        break;
      case 'Area 2':
        // Set the modal to open and specify the content type for Area 2
        setModal({ isOpen: true, content: 'video2' });
        break;
      case 'Area 3':
        setModal({ isOpen: true, content: 'video1' });
        break;
      case 'Area 4':
        window.open('https://eli-banchik.netlify.app/', '_blank');
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
    switch (modal.content) {
      case 'video1':
        return (
          <>
            <video width="90%" height="auto" controls>
              <source src="/armoire-walkthrough.mov" type="video/mp4"/>
              Your browser does not support the video tag.
            </video>
          </>
        );
      case 'video2':
        return (
          <>
            <video width="75%" height="auto" controls>
              <source src="/Split_Walkthrough.mov" type="video/mp4"/>
              Your browser does not support the video tag.
            </video>
          </>
        );
      default:
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
        <img className='keyboard' src="public/keyboard.svg" height="500px" alt="Keyboard"/>
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
