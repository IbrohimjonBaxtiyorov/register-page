import { elAddForm } from "./html-elements.js";
import { addProduct } from "./request.js";
import { validator } from "./utils.js";
import { showToast } from "./toasts.js";
import "./protector.js";



elAddForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target);


  const formData = new FormData(elAddForm);
  const result = {};

  for (const [key, value] of formData.entries()) {
    result[key] = value;
  }

  const checker = validator(result);
  if (checker) {
    showToast(checker.message, "danger");
    e.target[checker.target].focus();

  } else {
    
    e.target.dataset.steate = "pending";
    e.submitter.disabled = true;

    addProduct(result)
      .then((res) => {
        showToast("Muvofaqiyatli Saqlandi");
        localStorage.setItem("user", JSON.stringify(res));
      })
      .catch((err) => {
        showToast("nimadir xato ketdi", "warning");
        
      })
      .finally(() => {
        e.target.dataset.steate = "normal";
        e.submitter.disabled = false;
      });
  }
});
