import { useEffect } from "react";
import { createPortal } from "react-dom";

// const rootModal = document.querySelector('#root_modal');
interface ModalProps {
    onClose: () => void;
    children: React.ReactNode;
  }
  
  
  const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
    useEffect(() => {
      const handleEscape = (e: KeyboardEvent) => {
        if (e.code === `Escape`) {
          onClose();
        }
      };
      window.addEventListener("keydown", handleEscape);
      return () => {
        window.removeEventListener("keydown", handleEscape);
      };
    }, [onClose]);
  
    const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    };
  
    return createPortal(
      <div className='backdrop ' onClick={handleClose}>
        <div style={{ transform: 'translate(-50% -50%)' }} className='modalContainer'>
            <p className={`closeModal w-[16px] h-[16px] z-50 cursor-pointer`}  onClick={handleClose}>X</p>
          {children}
        </div>
      </div>,
      document.querySelector("body")!
    );
  };
  
  export default Modal;