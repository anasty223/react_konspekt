import { Component } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";

const modalRoot = document.querySelector("#modal-root");

export default class Modal extends Component {
  componentDidMount() {
    console.log("modal componentDidMount");
    window.addEventListener("keydown", this.handleKeydown);
  }
  componentWillUnmount() {
    console.log("modal componentWillUnmount");
    window.removeEventListener("keydown", this.handleKeydown);
  }
  //Закрытие по escape
  handleKeydown = (e) => {
    if (e.code === "Escape") {
      console.log("нажали escнужно закрыть модалку");

      this.props.onClose();
    }
  };
  //Закрытие по бекдропу
  handleBackdropClick = (e) => {
    console.log("Кликнули на бекдроп");
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };
  render() {
    return createPortal(
      <div className="Modal__backdrop" onClick={this.handleBackdropClick}>
        <div className="Modal__content">{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}
