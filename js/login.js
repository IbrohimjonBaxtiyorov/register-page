import { validator } from "./utils.js";
const elForm = document.getElementById("form");

elForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(elForm);
  const result = {};

 for(const [key ,value] of formData.entries()){
    result[key]=value;
 }
  
  const checker = validator(result);
  if(checker){
    alert(checker.message)
    e.target[checker.target].focus()
  }
  
});
