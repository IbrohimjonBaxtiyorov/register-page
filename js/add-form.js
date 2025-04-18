import { elAddForm,elLoguout } from "./html-elements.js";
import { addProduct } from "./request.js";
import { validator2 } from "./utils.js";
import { showToast } from "./toasts.js";
import "./protector.js";

elAddForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(elAddForm);
  const result = {};

  for (const [key, value] of formData.entries()) {
    result[key] = value;
  }

  const checker = validator2(result);
  if (checker) {
    showToast(checker.message, "danger");
    e.target[checker.target].focus();
  } else {
    e.target.dataset.steate = "pending";
    e.submitter.disabled = true;

    addProduct(checker)
      .then((res) => {
        showToast("Muvofaqiyatli Saqlandi");
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

// login out buttoni
elLoguout.addEventListener("click",()=>{
    localStorage.removeItem("user");
    location.reload()
  })