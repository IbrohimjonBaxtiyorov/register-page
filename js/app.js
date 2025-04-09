window.addEventListener("load", () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if(user===null){
    console.log(window.location.href);
    window.location.href="./pages/login.html"
  }
});
