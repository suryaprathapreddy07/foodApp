import classes from "./modal.module.css";
import Cart from "./cart";

import { Fragment } from "react";
import ReactDOM from "react-dom";

const modalOverlay = document.querySelector(".modal-overlay");

const Backdrop = function (props) {
  return <div className={classes.backdrop} onClick={props.onClick}></div>;
};

const Overlay = function (props) {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = function (props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClose}></Backdrop>,
        modalOverlay
      )}
      {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>, modalOverlay)}
    </Fragment>
  );
};

export default Modal;
