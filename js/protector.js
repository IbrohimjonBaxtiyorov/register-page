window.addEventListener("load", (e)=>{
 const currentPage= e.target.location.pathname;
 const allowedPages=[ "/" ,"/index.html","/smth.html"];
 const user=JSON.parse(localStorage.getItem("user"));

 if(user===null && allowedPages.includes(currentPage)){
    window.location.replace("/pages/login.html")
 }
  
 if(user && !allowedPages.includes(currentPage)){
    window.location.replace("/index.html")
 }
  
})