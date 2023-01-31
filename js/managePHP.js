export default function managePHP(components) {
  const { containers, variables } = components;
  const { medicoesArray } = containers;
  const { arrayItems } = variables;

  medicoesArray.value = JSON.stringify([...arrayItems.get()]);
}
