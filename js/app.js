window.addEventListener("load", () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user === null) {
    window.location.href = "/pages/login.html";
  }
});
