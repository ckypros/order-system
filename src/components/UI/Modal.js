import { createPortal } from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = ({ onClick }) => {
  return <div className={classes.backdrop} onClick={onClick} />;
};

const ModalOverlay = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = ({ children, onBgClick }) => {
  return (
    <>
      {createPortal(<Backdrop onClick={onBgClick} />, portalElement)}
      {createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
    </>
  );
};

export default Modal;
