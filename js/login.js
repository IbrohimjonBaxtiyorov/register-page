import { validator } from "./utils.js";
const elForm = document.getElementById("form");

elForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(elForm);
  const result = {};

 for(const [key ,value] of formData.entries()){
    result[key]=value;
 }
 console.log(result);
  // const { target, message } = validator(obj);
});
