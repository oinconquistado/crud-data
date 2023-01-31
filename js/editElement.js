import populateModal from "./populateModal.js";
import toggleModal from "./toggleModal.js";

export default function editElement(components, element) {
  const { variables } = components;
  const { elementToEdit } = variables;

  elementToEdit.set(element);
  toggleModal(components);
  populateModal(components);

  elementToEdit.reset();
}
