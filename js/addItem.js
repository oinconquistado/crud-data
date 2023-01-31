import clearData from "./clearData.js";
import managePHP from "./managePHP.js";
import addItemElement from "./addItemElement.js";

export default function addItem(components, elementToAdd) {
  const { variables, inputs } = components;
  const { arrayItems, positionCounter } = variables;
  const { inputName } = inputs;

  arrayItems.push({ ...elementToAdd });
  positionCounter.increment();
  clearData(components);
  inputName.focus();
  managePHP(components);
  addItemElement(components);
  elementToAdd.reset();
}
