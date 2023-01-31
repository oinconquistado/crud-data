import editElement from "./editElement.js";
import removeItem from "./removeItem.js";

export default function AddItemElement(components) {
  const { containers, variables } = components;
  const { elementToAdd } = variables;
  const { itemsList } = containers;

  const createItemElement = () => {
    let item = { ...elementToAdd.get() };

    const div = document.createElement("div");
    div.classList.add("item");
    div.innerHTML = `<div class="item" position=${item.position}>
    <p>Nome: ${item.name}</p>
    <p>Primeiro: ${item.units}</p>
    <p>Segundo: ${item.value}</p>
    <p>Resultado: ${item.total}</p>
    <div class="button-group">
    <button class="edit" edit=${item.position}>Editar</button> 
    <button class="remove" remove=${item.position}>Remover</button>
    </div>
    </div>
  `;

    div.addEventListener("click", (event) => {
      if (event.target.classList.contains("edit")) {
        editElement(components, item);
      }
      if (event.target.classList.contains("remove")) {
        removeItem(components, item);
      }
    });
    return div;
  };

  itemsList.appendChild(createItemElement());
}
