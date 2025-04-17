import { changer, products } from "./data.js";
import { elList } from "./html-elements.js";
import "./protector.js";
import { deleteProduct, getProduct } from "./request.js";
import { uiRender } from "./ui-render.js";
import { localremoveProduct } from "./utils.js";

getProduct().then((res)=>{
  const data=changer(res)
  uiRender(data);
}).catch().finally()

elList.addEventListener("click",(e)=>{
 if(e.target.dataset.action==="delete"){
  deleteProduct(e.target.id)
  .then((res)=>{
   const data=localremoveProduct(res,products);
   const final=changer(data)
   uiRender(final)
  })
  .catch()
  .finally()
 }
 
})