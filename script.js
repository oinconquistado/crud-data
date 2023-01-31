import getElements from "/js/getElements.js";
import clearData from "./js/clearData.js";
import verifyData from "./js/verifyData.js";
import manageAddForm from "./js/manageAddForm.js";

const main = () => {
  const { components } = getElements();

  clearData(components);
  manageAddForm(components);
  verifyData(components);
};

main();
