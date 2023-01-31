import addItem from "./addItem.js";

export default function manageAddForm(components) {
  const { buttons, inputs, variables } = components;
  const { positionCounter, elementToAdd } = variables;
  const { addItemButton } = buttons;
  const { inputName, inputUnits, inputValue, inputTotal } = inputs;

  inputTotal.disabled = true;

  addItemButton.disabled = true;

  const manageAddItemButtom = () => {
    if (inputName.value !== "" && inputUnits.value !== "" && inputValue.value !== "") {
      addItemButton.disabled = false;
    } else {
      addItemButton.disabled = true;
    }
  };

  const manageInputTotal = () => {
    if (inputUnits.value !== "" && inputValue.value !== "") {
      const units = inputUnits.value;
      const value = inputValue.value;
      const total = units * value;
      inputTotal.value = total;
    } else {
      inputTotal.value = "";
    }
  };

  const updateElementToAdd = () => {
    const name = inputName.value;
    const units = inputUnits.value;
    const value = inputValue.value;
    const total = inputTotal.value;
    const position = positionCounter.get();
    elementToAdd.set({ name, units, value, total, position });
  };

  const manageAddItem = () => {
    addItem(components, elementToAdd.get());
  };

  addItemButton.addEventListener("click", (event) => {
    event.preventDefault();
    manageAddItem();
  });

  [inputName, inputUnits, inputValue, inputTotal].forEach((input) => {
    input.addEventListener("change", updateElementToAdd);
  });

  [(inputUnits, inputValue)].forEach((input) => {
    input.addEventListener("input", manageInputTotal);
  });

  [inputName, inputUnits, inputValue].forEach((input) => {
    input.addEventListener("input", manageAddItemButtom);
  });
}
