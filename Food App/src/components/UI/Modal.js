import { createPortal } from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onCloseCart} />;
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
      {/* onHideCart prop is comming from the Cart.js file and pass to BackDrop as prop name onCloseCart */}
      {createPortal(<Backdrop onCloseCart={props.onHideCart} />, location)};
      {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, location)}
    </>
  );
};

export default Modal;
