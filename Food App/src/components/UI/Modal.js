import { createPortal } from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const location = document.getElementById("overlay");

const Modal = (props) => {
  return (
    <>
      {createPortal(<Backdrop />, location)};
      {createPortal(<ModalOverlay>{props.children}</ModalOverlay>,location)}
    </>
  );
};

export default Modal;
