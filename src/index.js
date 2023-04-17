import { loadPage } from "./loadPage";

//loadPage();
console.log("console woah");

const landingBtn = document.createElement("button");
landingBtn.setAttribute("id", "landingBtn");
landingBtn.textContent = "HOME";
landingBtn.addEventListener("click", () => {
  loadPage();
});

const menuBtn = document.createElement("button");
menuBtn.setAttribute("id", "menuBtn");
menuBtn.textContent = "MENU";

const contactBtn = document.createElement("button");
contactBtn.setAttribute("id", "contactBtn");
contactBtn.textContent = "CONTACT";

const buttonsDiv = document.createElement("div");
buttonsDiv.classList.add("buttonsDiv");

buttonsDiv.appendChild(landingBtn);
buttonsDiv.appendChild(menuBtn);
buttonsDiv.appendChild(contactBtn);

const content = document.querySelector("#content");

content.appendChild(buttonsDiv);
