export default function getElements() {
  const inputName = document.getElementById("name");
  const inputUnits = document.getElementById("units");
  const inputValue = document.getElementById("value");
  const inputTotal = document.getElementById("total");
  const inputEditTotal = document.getElementById("totalEdit");
  const inputEditName = document.getElementById("nameEdit");
  const inputEditUnits = document.getElementById("unitsEdit");
  const inputEditValue = document.getElementById("valueEdit");
  const medicoesArray = document.getElementById("medicoes_previstas");
  const addItemButton = document.getElementById("addItem");
  const verifyDataButton = document.getElementById("verifyData");
  const itemsList = document.getElementById("itemsList");
  const modalWrapper = document.getElementById("modal-wrapper");
  const modal = document.getElementById("modal");
  const closeModalButton = document.querySelectorAll(".close-modal");
  const saveEditItemButton = document.getElementById("save-edit");

  class itemDefault {
    constructor(name, units, value, total, position) {
      this.name = name;
      this.units = units;
      this.value = value;
      this.total = total;
      this.position = position;
    }
    get() {
      return this;
    }
    set({ name, units, value, total, position }) {
      this.name = name;
      this.units = units;
      this.value = value;
      this.total = total;
      this.position = position;
    }
    reset() {
      this.name = "";
      this.units = "";
      this.value = "";
      this.total = "";
      this.position = "";
    }
  }

  class counter {
    constructor() {
      this.count = 0;
    }
    increment() {
      this.count++;
    }
    decrement() {
      this.count--;
    }
    get() {
      return this.count;
    }
  }

  class arrayConstructor {
    constructor() {
      this.array = [];
    }
    push(item) {
      this.array.push(item);
    }
    remove(item) {
      this.array = this.array.filter((arrayItem) => arrayItem.position !== item.position);
    }
    get() {
      return this.array;
    }
  }

  const positionCounter = new counter();

  const arrayItems = new arrayConstructor([]);

  const elementToAdd = new itemDefault({});
  const elementToEdit = new itemDefault({});

  const components = {
    buttons: {
      addItemButton,
      verifyDataButton,
      closeModalButton,
      saveEditItemButton,
    },
    inputs: {
      inputName,
      inputUnits,
      inputValue,
      inputTotal,
      inputEditTotal,
      inputEditName,
      inputEditUnits,
      inputEditValue,
    },
    containers: {
      medicoesArray,
      itemsList,
      modalWrapper,
      modal,
    },
    variables: {
      positionCounter,
      arrayItems,
      elementToAdd,
      elementToEdit,
    },
  };

  return { components };
}
