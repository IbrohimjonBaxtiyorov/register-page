window.addEventListener("load", (e) => {
  const currentPage = window.location.pathname;
  const allowedPages = ["/", "/index.html", "/smth.html"];
  const user = JSON.parse(localStorage.getItem("user"));
  if (allowedPages.includes(currentPage)) {
    localStorage.setItem("link", currentPage);
  }

  const link = localStorage.getItem("link");

  if (user === null && allowedPages.includes(currentPage)) {
    window.location.replace("/pages/login.html");
  }

  if (user && !allowedPages.includes(currentPage)) {
    if (link === "/index.html") {
      window.location.replace("/index.html");
    }
    if (link === "/smth.html") {
      window.location.replace("/smth.html");
    }
  }
});
