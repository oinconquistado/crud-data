export default function clearData(components) {
  const { inputs } = components;

  Array.from(Object.values(inputs)).forEach((input) => {
    input.value = "";
  });
}
