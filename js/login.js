import { login } from "./request.js";
import { validator } from "./utils.js";
import { showToast } from "./toasts.js";
const elForm = document.getElementById("form");

elForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(elForm);
  const result = {};

  for (const [key, value] of formData.entries()) {
    result[key] = value;
  }

  const checker = validator(result);
  if (checker) {
    showToast(checker.message,'danger')
    e.target[checker.target].focus();

  } else {

    e.target.dataset.steate = "pending";
    e.submitter.disabled = true;

    login(result)
      .then((res) => {
       showToast("Saytga muvofaqiyatli kirdingiz");
       localStorage.setItem("user" ,JSON.stringify(res))
       window.location.href = "/index.html";
      })
      .catch((err) => {
      showToast("nimadir xato ketdi",'warning')
      })
      .finally(() => {
        e.target.dataset.steate = "normal";
        e.submitter.disabled = false;
      });
   }
   
});
