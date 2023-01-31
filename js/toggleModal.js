export default function toggleModal(components) {
  const { containers, buttons } = components;
  const { modalWrapper, modal } = containers;
  const { closeModalButton } = buttons;

  const updateCloseModalButton = () => {
    if (modal.classList.contains("active") && modalWrapper.classList.contains("active")) {
      Array.from(closeModalButton).forEach((button) => {
        button.addEventListener("click", changeModalState);
      });
    } else {
      Array.from(closeModalButton).forEach((button) => {
        button.removeEventListener("click", changeModalState);
      });
    }
  };

  const changeModalState = () => {
    [modalWrapper, modal].forEach((element) => {
      element.classList.toggle("active");
    });
    updateCloseModalButton();
  };

  changeModalState();
}
