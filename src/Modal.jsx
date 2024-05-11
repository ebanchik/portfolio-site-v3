import PropTypes from 'prop-types';
import './Modal.css';

const Modal = ({ isOpen, close, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={close}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="video-container">
          {children}
          <button className="close-button" onClick={close}>x</button>
        </div>
      </div>
    </div>
  );
};

// Define prop types for Modal component
Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  children: PropTypes.node
};

export default Modal;
