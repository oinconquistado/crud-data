import managePHP from "./managePHP.js";

export default function removeItem(components, elementToRemove) {
  const { variables } = components;
  const { arrayItems } = variables;

  console.log(elementToRemove);

  const removeFromArray = () => {
    arrayItems.remove(elementToRemove);
  };

  const removeFromDOM = () => {
    const itemToRemove = document.querySelector(`[position="${elementToRemove.position}"]`);
    itemToRemove.remove();
  };

  removeFromArray();
  removeFromDOM();
  managePHP(components);
}
