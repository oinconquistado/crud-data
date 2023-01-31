import addItem from "./addItem.js";
import removeItem from "./removeItem.js";
import toggleModal from "./toggleModal.js";

export default function saveModifys(components, elementToRemove, elementToAdd) {
  removeItem(components, elementToRemove);
  addItem(components, elementToAdd);
  toggleModal(components);
}
