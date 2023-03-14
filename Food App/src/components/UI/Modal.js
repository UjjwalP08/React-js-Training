import React from "react";
import { createPortal  } from "react-dom";
// import react-dom to use react portal

import classes from "./Modal.module.css";

const BackDrop = (props) => {
  return <div className={classes.backdrop}  onClick={props.onHideCart} />;
};

const ModalOverlay = (props)=>{
    return(
        <div className={classes.modal}>
            <div className={classes.content}>
                {props.children}
            </div>
        </div>
    )
}

const location = document.getElementById('overlays');

const Modal = (props) => {
  return(<>
  {createPortal(<BackDrop onHideCart={props.onHideCart} />,location)};    
  {createPortal(<ModalOverlay> {props.children} </ModalOverlay>,location)};
  </>)
};

export default Modal;
