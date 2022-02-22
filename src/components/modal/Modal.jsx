import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./modal.scss";

const Modal = (props) => {
  // initial  active is false
  const [active, setActive] = useState(false);
  // use useEffect to set active is props.active and dependency is props.active
  useEffect(() => {
    setActive(props.active);
  }, [props.active]);
  return (
    // id is props.id and  if className is active return active else  return ''
    <div id={props.id} className={`modal ${active ? "active" : ""}`}>
      {props.children}
    </div>
  );
};

Modal.propTypes = {
  active: PropTypes.bool,
  id: PropTypes.string,
};

export const ModalContent = (props) => {
  // declare contentRef variable use useRef to set state for contentRef
  const contentRef = useRef(null);

  const closeModal = () => {
    contentRef.current.parentNode.classList.remove("active");
    if (props.onClose) props.onClose();
  };
  return (
    <div ref={contentRef} className="modal__content">
      {props.children}
      <div className="modal__content__close" onClick={closeModal}>
        <i className="bx bx-x"></i>
      </div>
    </div>
  );
};
ModalContent.propTypes = {
  onClose: PropTypes.func,
};

export default Modal;
