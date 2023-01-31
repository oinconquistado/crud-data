export default function createModal(item, components) {
  const { containers } = components;
  const { body } = containers;

  body.appendChild(createWrapper());
}
