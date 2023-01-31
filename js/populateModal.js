import saveModifys from "./saveModifys.js";

export default function populateModal(components) {
  const { inputs, containers, buttons, variables } = components;
  const { elementToEdit, elementToAdd } = variables;
  const { saveEditItemButton } = buttons;
  const { inputEditTotal, inputEditName, inputEditUnits, inputEditValue } = inputs;

  const elementToRemove = { ...elementToEdit.get() };

  const { position } = elementToEdit.get();

  const populate = () => {
    inputEditName.value = elementToEdit.name;
    inputEditUnits.value = elementToEdit.units;
    inputEditValue.value = elementToEdit.value;
    inputEditTotal.disabled = true;
    saveEditItemButton.disabled = true;
    inputEditTotal.value = inputEditUnits.value * inputEditValue.value;

    addListeners();
  };

  const manageSaveEditButton = () => {
    const verifyChange = () => {
      if (
        elementToRemove.name !== elementToAdd.name ||
        elementToRemove.units !== elementToAdd.units ||
        elementToRemove.value !== elementToAdd.value
      )
        return true;
      else return false;
    };

    const verifyData = () => {
      if (inputEditName.value !== "" && inputEditTotal.value !== "") {
        return false;
      } else {
        return true;
      }
    };

    if (verifyChange() && !verifyData()) {
      saveEditItemButton.disabled = false;
    } else {
      saveEditItemButton.disabled = true;
    }
  };

  const updateElementToAdd = () => {
    const name = inputEditName.value;
    const units = inputEditUnits.value;
    const value = inputEditValue.value;
    const total = inputEditUnits.value * inputEditValue.value;
    elementToAdd.set({ name, units, value, total, position });
    console.log(elementToAdd.get());
  };

  const manageEditTotal = () => {
    if (inputEditUnits.value !== "" && inputEditValue.value !== "") {
      const units = inputEditUnits.value;
      const value = inputEditValue.value;
      const total = units * value;
      inputEditTotal.value = total;
    } else {
      inputEditTotal.value = "";
    }
  };

  const submitData = () => {
    saveModifys(components, elementToRemove, elementToAdd);
    removeListeners();
  };

  const addListeners = () => {
    [inputEditName, inputEditUnits, inputEditValue].forEach((input) => {
      input.addEventListener("input", updateElementToAdd);
      input.addEventListener("input", manageSaveEditButton);
    });

    [inputEditUnits, inputEditValue].forEach((input) => {
      input.addEventListener("input", manageEditTotal);
    });
    saveEditItemButton.addEventListener("click", submitData);
  };

  const removeListeners = () => {
    [inputEditName, inputEditUnits, inputEditValue].forEach((input) => {
      input.removeEventListener("input", updateElementToAdd);
      input.removeEventListener("input", manageSaveEditButton);
    });

    [inputEditUnits, inputEditValue].forEach((input) => {
      input.removeEventListener("input", manageEditTotal);
    });
    saveEditItemButton.removeEventListener("click", submitData);
  };

  populate();
}
