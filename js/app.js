import { changer } from "./data.js";
import { elLoader } from "./html-elements.js";
import "./protector.js";
import { getProduct } from "./request.js";
import { uiRender } from "./ui-render.js";

getProduct().then((res)=>{
  const data=changer(res)
  uiRender(data);
}).catch().finally()