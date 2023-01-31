export default function verifyData(components) {
  const { variables, buttons } = components;
  const { inputs } = components;
  const { inputName, inputTotal, inputUnits, inputValue } = inputs;
  const { arrayItems, count } = variables;
  const { verifyDataButton } = buttons;

  verifyDataButton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(arrayItems.get());
  });
}
