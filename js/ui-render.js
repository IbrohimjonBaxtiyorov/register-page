import { elList, elLoader } from "./html-elements.js";
export function uiRender(products) {
  elLoader.classList.add("hidden");
  products.forEach((element) => {
    // create html elements
    const div = document.createElement("div");
    const div2 = document.createElement("div");
    const div3 = document.createElement("div");
    const a = document.createElement("a");
    const p = document.createElement("p");
    const h5 = document.createElement("h5");
    const span = document.createElement("span");
    const span2 = document.createElement("span");
    const button = document.createElement("button");

    // element styles
    elList.classList.add(
      "grid",
      "grid-cols-1",
      "gap-4",
      "md:grid-cols-2",
      "lg:grid-cols-3",
      "xl:grid-cols4",
      "2xl:grid-cols-5",
      "place-items-center"
    );
    div.classList.add(
      "w-full",
      "max-w-sm",
      "bg-white",
      "border",
      "border-gray-200",
      "rounded-lg",
      "shadow-sm",
      "dark:bg-gray-800",
      "dark:border-gray-700"
    );
    div2.classList.add("p-6", "px-7", "relative", "min-h-[280px]");
    a.href = "#";
    h5.classList.add(
      "text-xl",
      "font-semibold",
      "tracking-tight",
      "text-gray-100",
      "dark:text-white",
      "mb-8"
    );
    p.classList.add(
      "text-xl",
      "font-semibold",
      "tracking-tight",
      "text-gray-900",
      "dark:text-white",
      "mb-8"
    );
    span.classList.add("absolute", "top-3", "right-3","text-white");
    div3.classList.add("flex", "items-center", "justify-between");
    span2.classList.add(
      "text-3xl",
      "font-bold",
      "text-gray-900",
      "dark:text-white"
    );
    button.classList.add(
      "rounded-lg",
      "p-2",
      "text-white",
      "bg-red-700",
      "hover:bg-red-500",
      "focus:ring-4"
    );


    p.innerText = `${element.description}`;
    h5.innerText =`${ element.name}`;
    span.innerText =`${element.price}`;
    button.href = "#";
    button.innerText = "DELETE";
    div2.append(a, p);
    div2.append(span);
    div2.append(div3,button);
    a.append(h5);
    div.append(div2);
    elList.append(div);
  });
}
