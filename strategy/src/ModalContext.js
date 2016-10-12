class Modal {
  // setStrategy
  constructor(content) {
    this.content = content;
  }
  setStrategy(modal) {
    this.modal = modal;
  }
  showModal() {
    return this.modal.showModal(this.content);
  }

}
export default Modal;
